# city-explorer-server

## Introduction

`city-explorer-server` is a backend server application built with NestJS. It is designed to provide server-side functionality for the associated frontend application.

## Technology Stack

- NestJS
- TypeScript
- TypeORM
- PostgreSQL
- Jest

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:

```bash
   git clone [repository URL]
```

2. Navigate to the server's directory:

```bash
   cd city-explorer-server
```

3. Install the dependencies:

```bash
   npm install
```
or
```bash
   yarn install
```


### Configuring the Application

Set up your database configurations and any other environment variables required by the application.

### Running the Application

#### Development

To start the server in development mode with hot-reload:
```bash
npm run start:dev
```
or

```bash
yarn start:dev
```

## Available Scripts

In the project directory, you can run:

| Command               | Description                                                       |
|-----------------------|-------------------------------------------------------------------|
| `npm start`           | Runs the app in production mode.                                  |
| `npm run start:dev`   | Runs the app in development mode with hot-reload.                 |
| `npm run build`       | Builds the app for production to the `dist` folder.               |
| `npm run test`        | Runs the test suite.                                              |
| `npm run test:watch`  | Runs the test suite in watch mode.                                |
| `npm run test:cov`    | Runs the test suite and generates a coverage report.              |
| `npm run lint`        | Lints and fixes TypeScript files.                                 |


# Environmental Variables


## .env.stage.dev Configuration

Create a `.env.stage.dev` file in the root of your project with the following content:

```env
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_db_name
DB_PASSWORD=your_db_password
DB_DATABASE=city-explorer
JWT_SECRET=your_secret
```

### Variable Descriptions

- `PORT`: The port number on which the server will run.
- `DB_HOST`: Hostname for the database server.
- `DB_PORT`: Port number for the database server.
- `DB_USERNAME`: Username for database access.
- `DB_PASSWORD`: Password for database access.
- `DB_DATABASE`: Name of the database to use.
- `JWT_SECRET`: Secret key for JWT authentication.

## Important Notes

- **Required Variables**: Ensure all the required environment variables are set up before starting the server.
- **Environment-Specific Files**: This example uses `.env.stage.dev` for development-stage configurations. 


