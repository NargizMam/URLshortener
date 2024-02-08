import './App.css';
import AppToolbar from './components/AppToolbar/AppToolbar';
import Home from './container/Home/Home';

function App() {

  return (
    <>
      <header>
        <AppToolbar/>
      </header>
      <main>
        <Home/>
      </main>
    </>
  );
}

export default App;
