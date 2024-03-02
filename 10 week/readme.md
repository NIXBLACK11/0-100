      ```bash
      sudo docker run --name my-postgres -e POSTGRES_PASSWORD=Nixblack@11 -d -p 5432:5432 postgres
      sudo postgresql://postgres:Nixblack@11@localhost:5432/postgres?sslmode=disable
      sudo psql -h localhost -d postgres -U postgres

      \dt to see databses in psql
      ```

To see the currently running containers and close them, you can follow these steps:

1. **List Running Containers**: Use the following command to list all the running containers:

   ```bash
   docker ps
   ```

   This command will show you a list of running containers along with their container ID, name, and other information.

2. **Stop a Running Container**: To stop a running container, you can use the following command:

   ```bash
   docker stop <container_id_or_name>
   ```

   Replace `<container_id_or_name>` with the actual container ID or name of the container you want to stop. For example:

   ```bash
   docker stop my-postgres
   ```

   This command will stop the container with the name `my-postgres`.

3. **Remove a Stopped Container**: After stopping a container, you can remove it from your system using the following command:

   ```bash
   docker rm <container_id_or_name>
   ```

   Replace `<container_id_or_name>` with the actual container ID or name of the container you want to remove. For example:

   ```bash
   docker rm my-postgres
   ```

   This command will remove the container with the name `my-postgres` from your system.

4. **Remove All Stopped Containers**: If you want to remove all stopped containers from your system, you can use the following command:

   ```bash
   docker container prune
   ```

   This command will remove all stopped containers from your system.

Please note that stopping and removing containers will not remove the Docker images used to create those containers. If you also want to remove the Docker images, you can use the `docker image prune` command to remove all unused images from your system.



# setupt typescript backend with postgresql

npm init -y
npx tsc --init
rootDir ./src
outDir ./dist

npm install pg
npm install @types/pg