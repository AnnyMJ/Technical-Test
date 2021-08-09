import './App.scss';
import Navbar from './components/NavBar/index';
import MainContent from './components/MainContent/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <body className="App-body">
        <MainContent/>
      </body>
    </div>
  );
}

export default App;
