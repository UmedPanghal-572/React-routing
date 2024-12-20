
import './App.css';
import HomePage from './components/view/HomePage';
import About from './components/view/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
