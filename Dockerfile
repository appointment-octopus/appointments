FROM node:latest

WORKDIR /appointments

COPY ./package.json ./yarn.lock ./

RUN yarn install

COPY . .

RUN ls /appointments

RUN ls /appointments/__tests__/

CMD sleep 30 && yarn test