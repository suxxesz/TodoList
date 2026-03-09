const Button = (props) => {
    const {className="" , name , type = 'button' , children} = props
    return (
        <button className={` button ${className}`} type={type}>{name}</button>
    )
}
export default Button