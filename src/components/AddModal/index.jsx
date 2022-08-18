import { useForm } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TechContext } from "../../contexts/TechContext";
import Button from "../Button";
import api from "../../Api";
import { Container, Form } from "./styles";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddModal(){
    const {tech, setTech, details, setDetails, deleteTech, click, setClick, openModal2, openModal1, user, setList, list, reload, setReload} = useContext(UserContext);
    
    const formSchema = yup.object({
        title: yup.string().required('Titulo da tecnologia é obrigatório.'),
        status: yup.string().required('Selecione o nível de habilidade')
    });

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(formSchema)
    });

    async function addTech (data){
        const response = await api.post('/users/techs', data).catch(() => toast.error('Tecnologia existente'));
        // console.log(response)
        setTech(response.data)

        if(response.status === 201) {
            setReload(!reload);
            toast('Tecnologia cadastrada!');

        }
    }
    
    return(
        <Container>
            <form onSubmit={handleSubmit(addTech)}>
                <div className="box__title">
                    <h2>Cadastrar Tecnologia</h2>
                    <Button type={'button'} onClick={openModal1}>x</Button>
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
                    <Button type={'submit'}>Cadastrar Tecnologia</Button>
                </div>
            </form>
        </Container>
    );
}
export default AddModal;