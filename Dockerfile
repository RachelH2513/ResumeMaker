FROM node:14

ADD . /resume-maker

WORKDIR /resume-maker

ENTRYPOINT ["node", "server/server.js"]
