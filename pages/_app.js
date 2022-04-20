import "react-circular-progressbar/dist/styles.css";
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Provider } from 'react-redux';
import '../public/css/style.css';
import store from '../redux/store';

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )
  }

export default MyApp
