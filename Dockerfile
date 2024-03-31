FROM node:18-alpine AS dependency

WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=dependency /app/node_modules ./node_modules
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
# COPY --from=builder /app/.next ./.next
CMD ["node", "server.js"]
# CMD ["npm", "start"]