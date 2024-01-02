
import './App.css';
import Home from './Home';
import "bootstrap/dist/css/bootstrap.css"
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Adduser from './Adduser';
import { ListUser } from './ListUser';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/addUser' element={<Adduser/>}/>
        <Route path='/users' element={<ListUser/>}/>
      </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
