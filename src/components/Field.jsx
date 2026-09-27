import {clsx} from 'clsx'

const Field = (props) => {
    const {className= '' , id , label , type = 'text' , value ,  onChange , ref , error} = props
    return (
        <>
         <div className={`field ${className}`}>
          <label
            className="field__label"
            htmlFor={id}
          >
            {label}
          </label>
          <input
            className={clsx(error ? 'is-invalid' : '' , "field__input")}
            id={id}
            placeholder=" "
            autoComplete="off"
            type={type}
            value={value}
            onChange={onChange}
            ref={ref}
          />
          {error && (
            <span className="field__error" title={error}>{error}</span>)}
        </div>
        </>
    )

}
export default Field