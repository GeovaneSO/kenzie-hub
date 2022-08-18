import { Routes, Route, Navigate } from 'react-router-dom';
import Registration from '../pages/Cadastro';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

function RoutesMain (){

  return( 
    <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cadastro' element={<Registration/>}/>
        <Route path='*' element={<Navigate to='/login'/>}/>  
    </Routes>
  )
}

export default RoutesMain;