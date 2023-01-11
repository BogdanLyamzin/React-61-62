import './App.css';

const pageTitle = "Home page";
const isHomePage = true;
const pageNumber = 1;
const booleanVar1 = true;
const booleanVar2 = false;
const nullVar = null;
const undefinedVar = undefined;

const arr = ["Dota 2", "Blood"];

const obj = {
  name: "Alex"
}

function App() {
  return (
    <>
      <header></header>
      <main>
        <h1 className="page-title">{pageTitle}</h1>
        <p>{isHomePage ? "Welcome to site!" : "Contacts page"}</p>
        <p>This is {pageNumber} page</p>
        <p>{booleanVar1}{booleanVar2}{nullVar}{undefinedVar}</p>
        <p>{arr}</p>
        {obj}
        <label htmlFor="book-title">Book title</label>
        {/* <input id="book-title" placeholder='Book title' autoComplete /> */}
      </main>
      <footer></footer>
    </>
  );
}

export default App;
