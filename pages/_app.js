import "react-circular-progressbar/dist/styles.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Provider } from "react-redux";
import "../public/css/style.css";
import store from "../redux/store";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { SnackbarProvider } from "notistack";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <SnackbarProvider>
          <Component {...pageProps} />
        </SnackbarProvider>
      </Provider>
    </ApolloProvider>
  );
}

export default MyApp;
