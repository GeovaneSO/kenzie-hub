import { Routes, Route, Navigate } from 'react-router-dom';
import Registration from '../pages/Cadastro';
import Home from '../pages/Home';
import Login from '../pages/Login';

// import Registration from '../pages/Cadastro';
function RoutesMain (){
    <Routes>
        {/* <Route path='/' element={<Home/>}></Route> */}
        <Route path='/login' element={<h1>drdrx</h1>}/>
        {/* <Route path='/Cadastro' element={<Registration/>}></Route> */}
        <Route path='*' element={<Navigate to='/login'/>}/>  
    </Routes>
}

export default RoutesMain;