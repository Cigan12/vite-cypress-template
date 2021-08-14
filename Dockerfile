FROM cypress/base:14.16.0 as test
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn
COPY . .
CMD [ "yarn", "test" ]

FROM node:14.16.1 as prod
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn --frozen-lockfile
COPY . .
CMD [ "yarn", "build" ]