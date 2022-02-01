## Description

This is a tutorial project. 

## For me to improve

I would cover my modules with tests.
Added error handler.
Would add checks s.

## Development requirement:
* subd: Postgres 9+
* without using ORM libraries (pure sql)

## Stack: 
* nestJS
* knex
* postgresql
* docker-compose

## Installation

```bash
$ npm install
```
## Migrations and seeds

```bash
$ npx knex migrate:latest
$ npx knex seed:run
```


## Running the app

```bash
# up database container
$ docker-compose up

# stop database container
$ docker-compose down -v

# run server
$ nest start

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```