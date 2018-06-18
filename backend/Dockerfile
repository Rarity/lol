FROM node:10-alpine
EXPOSE 3000

RUN mkdir -p /usr/bin/backend/
WORKDIR /usr/bin/backend/

COPY package.json /usr/bin/backend/
COPY src /usr/bin/backend/src/

VOLUME ./src:/usr/bin/backend/src/

RUN yarn

CMD [ "yarn", "dev" ]
