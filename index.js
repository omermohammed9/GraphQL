const express = require("express");
const {ApolloServer } = require('@apollo/server');
const {expressMiddleware} = require('@apollo/server/express4');
const bodyParser = require("body-parser");
const cors = require("cors");
const {default: axios} = require("axios");


async function startApolloServer() {
    const app = express();
    const server = new ApolloServer({
        typeDefs: `
        type User {
            id: ID!
            name: String!
            username: String!
            email: String!
            phone: String!
            website: String!
        }
        
        type Todo {
            id: ID!
            title: String!
            completed: Boolean!
            user: User
            }
            type Query {
                getTodos: [Todo]
                getAllUsers: [User]
                getUser(id: ID!): User
            }
            `,
        resolvers: {
            Todo: {
                user: async (todo) => {
                    try {
                        const response = await axios.get(
                            `https://jsonplaceholder.typicode.com/users/${todo.userId}`
                        );
                        if (response.data) {
                            return response.data;
                        } else {
                            throw new Error(`User with ID ${todo.userId} not found`);
                        }
                    } catch (error) {
                        // Handle error appropriately; possibly logging and/or re-throwing
                        console.error(error);
                        throw new Error('Failed to fetch user data');
                    }
                }
            },
            Query: {
                getTodos: async () =>
                    (await axios.get("https://jsonplaceholder.typicode.com/todos")).data,
                getAllUsers: async () =>
                    (await axios.get("https://jsonplaceholder.typicode.com/users")).data,
                getUser: async (parent, {id}) =>
                    (await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)).data
            }
        }
    });

    app.use(bodyParser.json());
    app.use(cors());

    await server.start()

    app.use(
        '/graphql',
        expressMiddleware(server)
    );

    app.listen(8000, () => console.log(`Server is running on port 8000`));
}
startApolloServer();
