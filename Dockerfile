FROM node:16-alpine

WORKDIR /app
COPY package.json yarn.lock ./

RUN yarn

EXPOSE 7000

COPY . /app/
CMD [ "yarn", "start:dev" ]