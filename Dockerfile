FROM node:18.12.1-alpine

ENV APP=/app/

WORKDIR ${APP}

COPY package.json yarn.lock ${APP}

RUN yarn install --prod --frozen-lockfile --ignore-engines

COPY . .

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

RUN yarn build

EXPOSE 1337

CMD [ "yarn", "start" ]
