FROM node:14

ADD . /resume-maker

EXPOSE 5000

WORKDIR /resume-maker

ENTRYPOINT ["node", "server/server.js"]

