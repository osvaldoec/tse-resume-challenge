import './App.css';
import Main from './Main';
import Sidebar from './Sidebar';
import Config from './config.json';

function App() {
  return (
  <div className="container">
  <Sidebar Data={Config.Sidebar} />
  <Main Data={Config.Main} />
</div>
  );
}

export default App;
