#Build stage
FROM node:lts-alpine AS build 

LABEL maintainer="Kristoffer Lesteberg" 

WORKDIR /app

COPY  . /app/

RUN npm install

RUN npm run build

#Prod stage
FROM nginx:alpine

WORKDIR /app

COPY --from=build /app/dist /usr/share/nginx/html