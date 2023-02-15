import LangContext from './langContext';

import Navbar from './modules/Navbar/Navbar';
import Main from "./modules/Main/Main";
import Footer from './modules/Footer/Footer';

import "./App.css";

function App() {
  return (
    <LangContext>
      <div className="App">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </LangContext>
  );
}

export default App;
