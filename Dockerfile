# react 14.4 app

FROM node:4.2.1
MAINTAINER Andrew Grewell <andrewgrewell@gmail.com>

ENV NODE_ENV production

# install modules before copying over source in order to
# allow docker to cache this layer
COPY package.json /src
RUN cd /src; npm install --unsafe-perm  # See https://github.com/npm/npm/issues/2984
COPY . /src
RUN cd /src; npm run build
RUN cd /src; rm -rf .git

EXPOSE 3000

CMD ["node", "initServer.js"]