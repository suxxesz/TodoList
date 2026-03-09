import Field from "./Field"

const SearchForm = (props) => {
    const {onSearchInput} = props
    return (
        <>
        <form className="todo__form"
        onSubmit={(event) => event.preventDefault()}
        >
        <Field 
        id="search-task " 
        label="Search tasks" 
        type="search" 
        className="todo__field" 
        onInput={(event) => onSearchInput(event.target.value)}
        />
      </form>
      </>
    )
}
export default SearchForm