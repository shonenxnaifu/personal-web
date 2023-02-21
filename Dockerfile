# FROM node:alpine

# # create & set working directory
# RUN mkdir -p /usr/src
# WORKDIR /usr/src

# # copy source files
# COPY . /usr/src

# # install dependencies
# RUN yarn
# # RUN npm install

# # start app
# RUN npm run build
# RUN rm -rf /usr/src/node_modules
# EXPOSE 3000
# CMD npm run start

FROM node:16-alpine AS dependency

WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install --frozen-lockfile

FROM node:16-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=dependency /app/node_modules ./node_modules
RUN yarn build

FROM node:16-alpine AS runner
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
CMD ["node", "server.js"]