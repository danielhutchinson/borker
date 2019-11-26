# Borker.

## Social Media for Doggos

A full-stack "kitchen sink" approach to developing an application for the personal portfolio. Uses NestJS on the sever side, and Angular on the client side.

## Run with Docker

The app is split into 2 containers, the web app and the server side app. They can both be executed and run at once using docker. Simply run `docker-compose up` from the root directory. If images need to be rebuild run `docker-compose build` or `docker-compose up -build`.

The client side app runs at `http://localhost:4200` and the server side app runs at `http://localhost:3000`.
