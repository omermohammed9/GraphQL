# Node.js GraphQL Server

## Introduction
This application is a Node.js server using the Express framework. It integrates GraphQL using ApolloServer and includes middleware for body parsing, CORS, and HTTP requests.

## Dependencies

This application uses several npm packages to function correctly. Below is a list of these dependencies along with a brief description of their purpose:

- `express`: A fast, unopinionated, and minimalist web framework for Node.js. It's used to create the server and handle HTTP requests.

- `@apollo/server`: A fully-featured, production-ready GraphQL server. It simplifies building a GraphQL API.

- `@apollo/server/express4`: Middleware for integrating ApolloServer with Express. This allows your Express app to understand and respond to GraphQL queries.

- `body-parser`: Middleware for parsing incoming request bodies. It's essential for handling JSON, raw, text, and URL-encoded form data.

- `cors`: Middleware to enable CORS (Cross-Origin Resource Sharing). It allows your server to accept requests from different origins, which is crucial for a public API.

- `axios`: A promise-based HTTP client for making HTTP requests. It's used to send requests to other servers or APIs.

Remember to install these packages using npm to ensure your application functions as intended.

## Installation
To set up the application, you need Node.js and npm (Node Package Manager) installed on your machine.

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install all dependencies.

## Usage
To start the server, run the following command in the terminal:

```bash
node index.js
