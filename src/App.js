import './App.css';


import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='projects' element={<Projects />}/>

          <Route path="/" index element={<Home />}> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
