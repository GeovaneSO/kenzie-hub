import { useForm } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, ReactNode } from "react";
import { UserContext,Context, IUser, Technology } from '../../contexts/UserContext'
import Button from "../Button";
import api from "../../Api";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddModal(){
    const { addTech, openModal1} = Context();
    
    const formSchema = yup.object({
        title: yup.string().required('Titulo da tecnologia é obrigatório.'),
        status: yup.string().required('Selecione o nível de habilidade')
    });

    const {register, handleSubmit, formState:{errors}} = useForm<Technology>({
        resolver: yupResolver(formSchema)
    });
    
    return(
        <Container>
            <form onSubmit={handleSubmit(addTech)}>
                <div className="box__title">
                    <h2>Cadastrar Tecnologia</h2>
                    <Button type={'button'} onClick={openModal1} >x</Button>
                </div>
                <div className='box__input'>
                    <label htmlFor="name">Nome</label>
                    <input 
                        {...register('title')}
                        placeholder='Insira uma tecnologia'
                        type='text'
                        id='tech'
                    />
                <span>{errors.title?.message}</span>
                </div>
                <div className='box__select'>
                    <label htmlFor="status">Selecionar status</label>
                    
                    <select  
                        {...register('status')}
                        name="status" 
                        id="status">
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediario">Intermediário</option>
                        <option value="Avancado">Avançado</option>
                    </select>
                    <span>{errors.status?.message}</span>
                </div>
                <div className='box__button'>
                    <Button type={'submit'} id={""} className={"btn"}>Cadastrar Tecnologia</Button>
                </div>
            </form>
        </Container>
    );
}
export default AddModal;