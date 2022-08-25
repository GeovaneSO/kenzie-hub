import React from 'react';
import { useForm } from 'react-hook-form';
import { useState, useContext } from 'react';
import { Context, UserContext,IUser } from '../../contexts/UserContext';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../../components/Button';
import { ToastContainer, toast } from 'react-toastify';
import { Container } from './styles';
import logo from './Logo.svg'

function Login(){
    const {signIn, token} = Context();

    token && localStorage.clear()

    const formSchema = yup.object({
        email: yup.string().email('Email inválido!').required('Email é obrigatório.'),
        password: yup.string().min(6, 'Mínimo 6 caracteres').required('Senha obrigatória')
    });
    
    const {register, handleSubmit, formState:{errors}} = useForm<IUser>({
        resolver: yupResolver(formSchema)
    });

    return(
        <Container className='container'>
            <h1><img src={logo} alt="Logo Kenzie Hub" /></h1>

            <form onSubmit={handleSubmit(signIn)}>
                <h2>Login</h2>
                
                <div className='box__input'>
                    <label htmlFor={"email"}>Email</label>
                    <input 
                        {...register('email')}
                        placeholder='Insira seu Email'
                        type={'text' }
                        id={'email'}
                    />
                    <span>{errors.email?.message}</span>
                </div>

                <div className='box__input'>
                    <label htmlFor={"password"}>Senha</label>
                    <input 
                        {...register('password')}
                        placeholder='Insira sua senha'
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
            <ToastContainer/>
        </Container>

    )
}
export default Login;