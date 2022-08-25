import { ReactNode, ButtonHTMLAttributes } from 'react';

interface Props{
    children: ReactNode;
    id?: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement> | any;
    className?: string;
}
function Button({children, id, type, onClick, className}: Props){
    return(
        <button id={id} className={className} type={type} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;