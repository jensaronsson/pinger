FROM node:8-alpine
WORKDIR app
COPY . .
VOLUME output
ENTRYPOINT ["node", "index.js"]
