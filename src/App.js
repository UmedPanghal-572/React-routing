
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './view/HomePage';
import About from './view/About'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import EmailJs from './view/EmailJs';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<About />} />
        <Route path='/email' element={<EmailJs/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
