import { useNavigate, Link } from 'react-router-dom';
import logo from '../../Logo.svg'
import { NavBar } from './styles'
function Nav(){
    
    return (
        <NavBar>
            <div className="container">
                <h1><img src={logo} alt="Logo Kenzie Hub" /></h1>
                <Link to='/login' >Voltar</Link>
            </div>
        </NavBar>
    )
}
export default Nav;