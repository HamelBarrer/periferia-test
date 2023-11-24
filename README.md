# Periferia test

This is the proposed solution for the exercise of microservices, it is complete with services:

- deliveries
- notifications
- orders
- payments
- restaurants

These microservices have their docker configuration file, and send or wait for an event using rabbit.

### Project execution

To run the project you need to have docker installed, and execute the following command:

```sh
docker compose up # windows
```

```sh
docker-compose up # linux
```

Once the command is executed, each of the microservices is built.
