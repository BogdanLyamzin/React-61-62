import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import Button from "./components/Button/Button";
import List from "./components/List/List";

import movieList from "./data/movieList.json";

const btnProps = {
  text: "Click me",
  type: "button",
  active: true
}

function App() {
  return (
    <>
      <Header />
      {/* Header() */}
      <div>divider</div> 
      {/* createElement("div"...) */}
      <List items={movieList} />
      <List title="Movie list" items={movieList} />
      {/* 
      const props = {
        title: "Movie list",
        items: movieList
      }
      List(props)
      */}
      <Button text="Click me" type="button" active />
      {/* <Button {...btnProps} /> */}
      {/* 
      const props = {
        text: "CLick me",
        type: "button"
      }
      Button(props)
      */}
      <Main />
      <Button text="Add book" />
      <Footer />
    </>
  );
}

export default App;
