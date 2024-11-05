# NestJS Project

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

This project is built using the [NestJS](https://nestjs.com/) framework, a progressive Node.js framework for building efficient and scalable server-side applications.

## How to Run

This project uses Docker and Docker Compose for setup. Follow the steps below to build and run the application.

### Prerequisites

Ensure you have Docker and Docker Compose installed on your machine. If not, download them from:
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

###  Environment Variables

Configure the environment variables by creating a .env file in the root directory of the project and copying the contents of .env.dist into it. Modify the values as necessary:

```
PORT=3000
NODE_ENV=production
POSTGRES_HOST=postgres-salt-test
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASS=123456
POSTGRES_NAME=salt-test
POSTGRES_TYPEORM_SYNCHRONIZE=true
POSTGRES_TYPEORM_DROP_SCHEMA=true
JWT_SECRET=secret
JWT_EXPIRES_IN=1d
JWT_REFRESH_SECRET=secretcret
JWT_REFRESH_EXPIRES_IN=7d
CORS_ORIGINS=http://localhost:3000,http://localhost:4200
THROTTLE_TTL=60
THROTTLE_LIMIT=10
```

### Setup

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
   cd <repository-directory>

2. **Build and Run with Docker Compose :**
   ```bash
    docker compose up -d --build
   ```

    This command will:

    - Build the Docker image for the application.
    - Recreating container if exist
    - Start the application in detached mode.

3. **Verify running container :**
   ```bash
    docker ps
   ```

4. **Access the application :**
   - The app will be available at http://localhost:3000.
   - The api documentation will be available at http://localhost:3000/swagger-docs.
   - Use the configured PORT (default: 3000) to access the app

4. **Logs the apps & database :**
```bash
   $docker logs salt-test-app-1
   $docker logs postgres-salt-test
```