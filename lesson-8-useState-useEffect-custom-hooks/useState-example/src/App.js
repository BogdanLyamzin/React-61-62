import MainMenu from './modules/MainMenu/MainMenu';
import ToggleButton from './shared/components/ToggleButton/ToggleButton';
import Vote from './modules/Vote/Vote';

import './shared/styles/styles.scss';

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
      {/* <ToggleButton text="Click me" type="button" /> */}
      <Vote />
    </div>
  );
}

export default App;
