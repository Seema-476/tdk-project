import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/view/Home'
import About from './component/view/About'
import Features from './component/view/Features';
import Blogs from './component/view/Blogs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/features' element={<Features />} />
          <Route path='/blogs' element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
