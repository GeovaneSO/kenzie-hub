import { useForm } from "react-hook-form"
import * as yup from 'yup';
import Button from "../Button";

function AddModal(){
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(formSchema)
    })
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <h2>Cadastrar Tecnologia</h2>
                <Button></Button>
            </div>
            <div>
                <label htmlFor="name">Nome</label>
                <input 
                    type="text"
                    name="" 
                    id=""
                />
            </div>
            <div>
                <label htmlFor="status">Selecionar status</label>
                
                <select name="" id="">
                    <option value="iniciante">Iniciante</option>
                </select>
            </div>

        </form>
    )
}
export default AddModal