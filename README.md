<!-- GENERATE A README FOR A TYPESCRIPT API TEMPLATE PROJECT that use docker compose & a maria DB -->

# TypeScript API Template Project
This project is a template for creating an API using TypeScript. It uses Docker Compose for container orchestration and MariaDB as the database.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


### Prerequisites
- Docker
- Docker Compose
- Node.js
- TypeScript
- Installation
- Clone the repository

### Installation
1. Clone the repository

``` sh
git clone <repository_url>
```

2. navigate to the project directory

``` sh
cd <project_name>
```

3. Go to the api folder
``` sh
cd ts
```

4. Install the dependencies
```sh
npm install
```
5. Go back to the root of the project
```sh
cd ..
```

6. Build and run the Docker containers
``` sh

docker compose up --build
```

## Customise the project for yourself

To customize the project you'll need to change some of the environment variables from the docker-compose.yml. 
To set up database access and schema name, go into the docker-compose.yml and customise the value for these variables 
```yml
nodets:
    [...]
    environment: 
        DB_HOST: <container_name or ip address>
        DB_USER: <your_username>
        DB_PASSWORD: <your_password>
        DB_NAME: <schema_name>


```

### Built With
- [Typescript](https://www.typescriptlang.org/) - The main language used.
- [Docker](https://www.docker.com/) - Used for containerization.
- [Docker Compose](https://docs.docker.com/compose/) - Used for container orchestration.
- [MariaDB](https://mariadb.org) - The database used.

### Acknowledgments
Hat tip to anyone whose code was used
Inspiration
etc.