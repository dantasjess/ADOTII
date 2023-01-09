FROM node:16-alpine

WORKDIR /frontend

COPY package*.json ./

RUN npm install -g npm@latest

COPY . .

EXPOSE 3000

CMD npm run dev
