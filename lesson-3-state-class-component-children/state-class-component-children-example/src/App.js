import MainMenu from './components/MainMenu/MainMenu';
import ToggleButton from './components/ToggleButton/ToggleButton';

import './App.css';

import menuItems from "./data/menuItems.json";

function App() {
  return (
    <div className="App">
      <MainMenu items={menuItems} />
      {/* 
      const props = {
        items: menuItems,
      }
      const obj = new MainMenu(props);
      obj.render();
      */}
      <ToggleButton text="Click me" type="button" />
    </div>
  );
}

export default App;
