# brokenglass

Website to report your worst employer

## Running locally
#### Requirements
- install Docker
#### Good to have requirements
- redis-cli
- pgAdmin

#### Running locally without docker-compose
```
$ npm run server // server
$ npm run client // client
```

#### Running locally with docker-compose
```
docker-compose up
```

#### Running Redis locally
```
docker-compose up redis -d
```

#### Just running Postgres locally
```
docker-compose up pg -d
```

#### Stopping services
```
docker-compose stop
```

#### Removing services, remove images and volumes
```
docker-compose down
```