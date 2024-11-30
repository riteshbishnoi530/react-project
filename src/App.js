import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/view/Home';
import About from './components/view/About';
import Form from './components/view/Form';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/form' element={<Form/>}/>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
