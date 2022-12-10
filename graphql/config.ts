import { GraphQLClient } from "graphql-request";

const API_URL = `https://api.github.com/graphql`;

export const graphQLClient = new GraphQLClient(API_URL, {
    headers: {
        Authorization: `Bearer ${process.env.GITHUB_SECRET_TOKEN}`
    }
});