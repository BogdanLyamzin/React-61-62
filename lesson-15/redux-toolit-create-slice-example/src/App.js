import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

import Navbar from './modules/Navbar/Navbar';
import UserRoutes from './UserRoutes';

import {store, persistor} from "./redux/store";

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Navbar />
          <UserRoutes />
        </BrowserRouter>
      </PersistGate>
    </Provider>

  );
}

export default App;
