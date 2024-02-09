import { CssBaseline } from '@mui/material';
import './App.css';
import Home from './container/Home/Home';
import AppToolbar from './components/AppToolbar/AppToolbar';

function App() {
  return (
    <>
      <CssBaseline/>
      <header>
        <AppToolbar/>
      </header>
      <main className="container">
        <Home/>
      </main>
    </>
  );
}

export default App;
