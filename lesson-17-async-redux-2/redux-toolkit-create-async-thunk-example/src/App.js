import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";

import Navbar from './modules/Navbar/Navbar';
import UserRoutes from './UserRoutes';

import store from "./redux/store";

import './App.css';

function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <UserRoutes />
        </BrowserRouter>
    </Provider>

  );
}

export default App;
