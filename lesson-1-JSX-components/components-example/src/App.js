import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import Button from "./components/Button/Button";

import './App.css';

function App() {
  return (
    <>
    <Header />
    {/* Header() */}
    <div>divider</div> 
    {/* createElement("div"...) */}
    <Button text="Click me" type="button" />
    {/* 
    const props = {
      text: "CLick me",
      type: "button"
    }
    Button(props)
    */}
    <Main />
    <Button text="Add book" type="submit" />
    <Footer />
    </>
  );
}

export default App;
