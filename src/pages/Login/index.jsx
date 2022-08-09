import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Button from '../../components/Button';
import { Container } from './styles';
import logo from '../../Logo.svg'

function Login({setUser}){
    const [loading, setLoading] = useState();
    // const [user, setUser] = useState({});

    const formSchema = yup.object({
        email: yup.string().email('Email inválido!').required('Email é obrigatório.'),
        password: yup.string().min(6, 'Mínimo 6 caracteres').required('Senha obrigatória')
    });
    
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(formSchema)
    });

    const navigate = useNavigate();

    function callBack(data){
        console.log({...data});
        axios.post('https://kenziehub.herokuapp.com/sessions', {...data}).then((response) => {
            
            console.log(response);
            setUser(response.data.user);

            window.localStorage.clear();
            window.localStorage.setItem('token', response.data.token);
            window.localStorage.setItem('user_id', response.data.user.id);
    
            navigate(`/home`, {replace: true});
        });
    }

    return(
        <Container className='container'>
            <h1><img src={logo} alt="Logo Kenzie Hub" /></h1>

            <form onSubmit={handleSubmit(callBack)}>
                <h2>Login</h2>
                
                <div className='box__input'>
                    <label htmlFor={"email"}>Email</label>
                    <input 
                        {...register('email')}
                        type={'text' }
                        id={'email'}
                    />
                    <span>{errors.email?.message}</span>
                </div>

                <div className='box__input'>
                    <label htmlFor={"password"}>Senha</label>
                    <input 
                        {...register('password')}
                        id={'password'}
                        type={'password'}
                    />
                    <span>{errors.password?.message}</span>
                </div>

                <div className='box__button'>
                    <Button type='submit'>Entrar</Button>
                </div>
                <span>Ainda não possui uma conta?</span>
                
                <div className='box__link'>
                    <Link className='a' to='/cadastro'>Cadastre-se</Link>

                </div>
            </form>
        </Container>

    )
}
export default Login;