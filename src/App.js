
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './view/HomePage';
import About from './view/About'

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
