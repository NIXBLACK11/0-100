basic commmands
- check running containers
```bash
docker ps
```

- to kill a process

```bash
docker kill 324234324fewr43
```

- to get inside a container

```bash
docker exec -it egegewsg88 /bin.bash
```

# MongoDB
- to run docker images available on the internet

- example

```bash
docker run mongo
```

- for the mac machine to map requests to the container
```bash
docker run -p 27017:27017 mongo
```

- to run and dont see any logs
```bash
docker run -d -p 27017:27017 mongo
```

# PostgreSQL
- to run
```bash
docker run -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
```
go to the documentation to check the final string


another command that can be used

```bash
sudo docker run -e POSTGRES_PASSWORD=password -d -p 5432:5432 postgres
```

connection string

postgresql://postgres:password@localhost:5432/postgres


- ssh into the contaioner to use psql inside the container easily as already installed

- to use psql inside the container

```bash
psql -h localhost -d postgres -U postgres
```