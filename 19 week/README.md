## Redis

```bash
    docker run --name my-redis -d -p 6379:6379 redis
    docker exec -it container_id /bin/bash
    redis-cli
```

```bash
    SET user "Siddharth"
    SET tracks "[{title: 'typescript', description: 'test'}]"
    GET tracks
    HSET user:100 name "John Doe" email  ""
```