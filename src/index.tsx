import React from 'react';
import ReactDOM from 'react-dom/client';
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';
import {Provider} from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store/store';
import '@shopify/polaris/build/esm/styles.css';
import './index.css';
import App from './App';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>  
    <BrowserRouter>
    <AppProvider i18n={enTranslations}>
     <Provider store={store}>
      <ToastContainer
      theme="dark"
      position="top-right"
      autoClose={3000}
      closeOnClick
      pauseOnHover={false}
      />
      <App />
     </Provider> 
    </AppProvider> 
    </BrowserRouter>
  </React.StrictMode>
 ) 