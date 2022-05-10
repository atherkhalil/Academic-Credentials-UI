import "react-circular-progressbar/dist/styles.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Provider } from "react-redux";
import "../public/css/style.css";
import store from "../redux/store";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { SnackbarProvider } from "notistack";
import { setContext } from "@apollo/client/link/context";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { createUploadLink } from "apollo-upload-client";
import { from } from '@apollo/client';

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("certmate_token");

  console.log("token _app: ", token)
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    },
  };
});

const uploadLink = createUploadLink({ 
  uri: process.env.NEXT_PUBLIC_BACKEND_URL
});

const client = new ApolloClient({
  link: from([authLink, uploadLink]),
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  const persistor = persistStore(store);

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SnackbarProvider>
            <Component {...pageProps} />
          </SnackbarProvider>
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
