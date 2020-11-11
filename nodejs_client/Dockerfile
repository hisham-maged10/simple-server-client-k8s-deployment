FROM node:latest AS dev

WORKDIR /src

RUN npm install -g nodemon

ENTRYPOINT ["nodemon","-L","."]

FROM dev AS build

COPY . .

RUN npm install

FROM alpine:latest AS prod

WORKDIR /src

COPY --from=build /src .

RUN apk add --update nodejs

EXPOSE 8081

ENTRYPOINT ["node", "app.js"]
