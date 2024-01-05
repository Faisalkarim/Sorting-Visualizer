import logo from './logo.svg';
import './App.css';
import RandomArrayGenerator from './RandomArr';
import DrawerAppBar from './appbar';
import StickyFooter from './footer';
import GridExample from './HomePage';
import NumberNode from './Num';



function App() {
  return (
    <div className="App">
      <DrawerAppBar></DrawerAppBar>
      {/* <GridExample></GridExample> */}
      <RandomArrayGenerator></RandomArrayGenerator>
      {/* <TextChanger></TextChanger> */}
     
      {/* <NumberNode></NumberNode> */}
      <StickyFooter></StickyFooter>
    </div>
  );
}

export default App;
