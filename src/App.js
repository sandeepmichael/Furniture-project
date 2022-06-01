
import './App.css';
import Header from './components/Header';
import { Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Cart from './components/Cart';
import Dashboard from './components/Dashboard';
import Contact from './components/Contact';
import Register from './components/Register';


function App() {
  return (
    <div className="App">
      <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />}/>
        <Route exact path='/cart' element={<Cart />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route exact path='/contact' element={<Contact />}/>
      </Routes>
      </>
    </div>
  );
}

export default App;
