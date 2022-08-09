import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import RoutesMain from './routes';
import Registration from './pages/Cadastro';
import Global from './styles/global'
import Home from './pages/Home';

function App() {
  const [user, setUser] = useState(null)

  return (
    <>
      <Global/>
      <Routes>
        <Route path='/home' element={<Home user={user}/>}/>
        <Route path='/login' element={<Login setUser={setUser}/>}/>
        <Route path='/cadastro' element={<Registration/>}/>
        <Route path='*' element={<Navigate to='/login'/>}/>  
      </Routes>
    </>
  );
}

export default App;
