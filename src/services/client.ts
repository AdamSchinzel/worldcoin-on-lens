import { API_URL } from "@/config/constants";
import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (networkError) {
    console.log(networkError);
  }

  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      console.error(
        "GQL ERROR | Operation:",
        operation.operationName,
        "| Variables:",
        operation.variables,
        "| Error response:",
        err
      );
    }
  }
});

const client = new ApolloClient({
  link: from([
    errorLink,
    new HttpLink({
      uri: API_URL,
    }),
  ]),
  cache: new InMemoryCache(),
});

export default client;
