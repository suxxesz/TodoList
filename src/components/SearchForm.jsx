import { useContext } from "react"
import Field from "./Field"
import { TaskContext } from "../context/TaskContext"

const SearchForm = () => {
    const {searchQuery , setSearchQuery} = useContext(TaskContext)
    return (
        <>
        <form className="todo__form"
        onSubmit={(event) => event.preventDefault()}
        >
        <Field 
        id="search-task" 
        label="Search tasks" 
        type="search" 
        className="todo__field" 
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        />
      </form>
      </>
    )
}
export default SearchForm