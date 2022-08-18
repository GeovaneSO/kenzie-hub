function Button({children, id, type, onClick, className}){
    return(
        <button id={id} className={className} type={type} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;