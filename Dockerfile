FROM node:18.12.1-alpine

ENV APP=/app/

WORKDIR ${APP}

COPY package.json yarn.lock ${APP}

RUN yarn install --frozen-lockfile

COPY . .

RUN NODE_ENV=production yarn build

EXPOSE 1337

CMD [ "yarn", "start" ]
