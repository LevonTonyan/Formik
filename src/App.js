import './App.css';
import SignUpForm from './components/SignUpForm/SignUpForm';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/login' element={<Login/> } />
        <Route path='/signup' element={<SignUpForm/> } />
      </Routes>
     
    </div>
  );
}

export default App;
