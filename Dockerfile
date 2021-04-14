FROM node:12.18.1 as builder

COPY package.json package-lock.json ./

RUN npm i

COPY . .


