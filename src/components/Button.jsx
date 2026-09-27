const Button = (props) => {
    const {className="" , name , type = 'button' , onClick , isDisabeled} = props
    return (
        <button className={` button ${className}`} type={type} onClick={onClick} disabled={isDisabeled}>{name}</button>
    )
}
export default Button