FROM node:10-alpine
ENV PORT=3001
EXPOSE 3001

RUN mkdir -p /usr/bin/backend/
WORKDIR /usr/bin/backend/

COPY package.json /usr/bin/backend/
COPY src /usr/bin/backend/

VOLUME /usr/bin/backend/src/

RUN ["npm", "i"]

CMD [ "npm", "start" ]
