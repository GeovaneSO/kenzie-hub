import './App.css';
import Providers from './contexts/UserContext';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import RoutesMain from './routes';
import Registration from './pages/Cadastro';
import Global from './styles/global'
import Dashboard from './pages/Dashboard';

function App() {
  const [user, setUser] = useState(null)

  return (
    <Providers>
      <Global/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard user={user}/>}/>
        <Route path='/login' element={<Login setUser={setUser}/>}/>
        <Route path='/cadastro' element={<Registration/>}/>
        <Route path='*' element={<Navigate to='/login'/>}/>  
      </Routes>
    </Providers>
  );
}

export default App;
