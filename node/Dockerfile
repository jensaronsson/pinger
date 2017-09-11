FROM node:8-alpine
WORKDIR app
COPY package.json package.json
RUN npm i
COPY . .
ENTRYPOINT ["node", "index.js"]
