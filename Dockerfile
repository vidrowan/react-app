# react 14.4 app

FROM node:4.2.1
MAINTAINER Andrew Grewell <andrewgrewell@gmail.com>

ENV NODE_ENV production

EXPOSE 3000

COPY . /
RUN npm install --unsafe-perm  # See https://github.com/npm/npm/issues/2984
RUN npm build
RUN npm start
RUN rm -rf .git