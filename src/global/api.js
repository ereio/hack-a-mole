
import { ApolloClient } from 'apollo-client';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { createUploadLink } from 'apollo-upload-client';
import { getMainDefinition } from 'apollo-utilities';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

// fragment matcher for unions and interfaces in gql
// import introspectionQueryResultData from './fragmentTypes.json';

let apiClient;

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
};

const initApiClient = async (getState, { API_GRAPHQL, API_WEBSOCKET }) => {
  const headers = {
    'x-token': getState().user && getState().user.currentUser
      ? getState().user.currentUser.token
      : null,
  };

  const authLink = setContext(async () => {
    const { currentUser } = getState().user;
    const { token } = currentUser;
    return { headers: { 'x-token': token } };
  });

  const httpLink = createUploadLink({
    uri: API_GRAPHQL,
    headers,
  });

  // Create a WebSocket link:
  const wsLink = new WebSocketLink({
    uri: API_WEBSOCKET, // websocket url
    options: {
      reconnect: true,
      connectionParams: { ...headers },
    },
  });

  // split based on operation type
  const link = split(({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  authLink.concat(httpLink));

  // const fragmentMatcher = new IntrospectionFragmentMatcher({ introspectionQueryResultData });

  apiClient = new ApolloClient({
    link,
    cache: new InMemoryCache(),
    defaultOptions,
  });
};

export { initApiClient, apiClient };
