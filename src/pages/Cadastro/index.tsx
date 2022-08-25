import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Nav from '../../components/Nav';
import { Container } from './styles';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Button from '../../components/Button';
import api from '../../Api';
import { IUser } from '../../contexts/UserContext'

function Registration(){
    const formSchema = yup.object({
        name: yup.string().required('Insira seu nome completo.'),
        email: yup.string().email('Email inválido!').required('Email é obrigatório.'),
        password: yup.string().min(6, 'Mínimo 6 caracteres').required('Senha obrigatória'),
        passwordConfirm: yup.string().required('Confirme a senha').oneOf([yup.ref('password'), null]),
        bio: yup.string().required('Insira uma descrição'),
        contact: yup.string().required('Insira seu contato'),
        course_module: yup.string().required('Selecione o módulo')
    });

    const {register, handleSubmit, formState:{errors}} = useForm<IUser>({
        resolver: yupResolver(formSchema)
    });
    
    const navigate = useNavigate();

    async function callBack(data: IUser){
        const response: any = await api.post('/users', data).catch((error) =>  toast.error('Ops! Conta já cadastrada'));
        
        if(response.status === 201){
            toast.success('Conta criada com sucesso!')
            setTimeout(() => {
                navigate('/login', {replace:true});
              }, 5000);
        }
    }
  
    return(
        <Container className='container'>
            <Nav/>
            <form onSubmit={handleSubmit(callBack)}>
                <h2>Crie sua conta</h2>
                <span>Rápido e grátis, vamos nessa</span>
                <div className='box__input'>
                    <label htmlFor="name">Nome</label>
                    <input
                        {...register('name')}
                        id='name'
                        type="text"
                        placeholder='Digite seu nome'
                    />
                    <span>{errors.name?.message}</span>
                </div>

                <div className='box__input'>
                    <label htmlFor="email">Email</label>
                    <input 
                        {...register('email')}
                        id='email'
                        type="text"
                        placeholder='Digite seu email'
                    />
                    <span>{errors.email?.message}</span>
                </div>

                <div className='box__input'>
                    <label htmlFor="password">Senha</label>
                    <input
                        {...register('password')}
                        id='password'
                        type="password"
                        placeholder='Digite sua senha'
                    />
                    <span>{errors.password?.message}</span>
                </div>

                <div className='box__input'>
                    <label htmlFor="passwordConfirm">Confirmar Senha</label>
                    <input
                        {...register('passwordConfirm')}
                        id='passwordConfirm'
                        type="password"
                        placeholder='Digite novamente sua senha'
                    />
                    <span>{errors.passwordConfirm?.message}</span>
                </div>

                <div className='box__input'>
                    <label htmlFor="bio">Bio</label>
                    <input
                        {...register('bio')}
                        id='bio'
                        type="text"
                        placeholder='Fale sobre você'
                    />   
                    <span>{errors.bio?.message}</span>              
                </div>
     
                <div className='box__input'>
                    <label htmlFor="contact">Contato</label>
                    <input
                        {...register('contact')}
                        id='contact'
                        type="text"
                        placeholder='Opção de contato'
                    />                    
                    <span>{errors.contact?.message}</span>
                </div>

                <div className='box__select'>
                    <label htmlFor="course">Selecionar módulo</label>
                    <select 
                        {...register('course_module')}
                        name="course"
                        id="course">
                        <option value='Primeiro módulo (Introdução ao Frontend)'>Primeiro módulo</option>
                        <option value='Segundo módulo (Frontend Avançado)'>Segundo módulo</option>
                        <option value='Terceiro módulo (Introdução ao Backend)'>Terceiro módulo</option>
                        <option value='Quarto módulo (Backend Avançado)'>Quarto módulo</option>
                    </select>
                    <span>{errors.name?.message}</span>
                </div>

                <div className='box__button'>
                    <Button type={'submit'}>Cadastrar</Button>
                </div>
            </form>   
            <ToastContainer/>
        </Container>
    );
}
export default Registration;
