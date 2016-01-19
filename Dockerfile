# react 14.4 app

FROM node:4.2.1
MAINTAINER Andrew Grewell <andrewgrewell@gmail.com>

ENV NODE_ENV production

# install modules before copying over source in order to
# allow docker to cache this layer
#ADD package.json package.json
#RUN npm install --unsafe-perm  # See https://github.com/npm/npm/issues/2984
#COPY . /
#RUN npm run build
#RUN rm -rf .git

COPY . /
RUN npm install

EXPOSE 3000

CMD ["node", "initServer.js"]
