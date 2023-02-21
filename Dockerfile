FROM node:alpine

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# copy source files
COPY . /usr/src

# install dependencies
RUN yarn
# RUN npm install

# start app
RUN npm run build
RUN rm -rf /usr/src/node_modules
EXPOSE 3000
CMD npm run start