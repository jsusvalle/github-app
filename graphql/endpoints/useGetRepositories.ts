import { useQuery } from "react-query";
import { gql } from "graphql-request";
import { graphQLClient } from "../config";

export function useGetRepositories(username: string) {
    return useQuery(["get-repos", username], async () => {
        return await graphQLClient.request(
            gql`
                query ($username: String!) {
                    user(login: $username) {
                        repositories(first: 100) {
                            edges {
                                node {
                                    url
                                    id
                                    name
                                }
                            }
                                totalCount
                            }
                    }
                }
            `,
            { username }
        );
    });
}