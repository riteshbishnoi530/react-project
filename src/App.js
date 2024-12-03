import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/view/Home';
import About from './components/view/About';
import Form from './components/view/Form';
import EffectPractice from './components/view/EffectPractice';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/effect' element={<EffectPractice/>}/>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
