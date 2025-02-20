import { useSelector } from "react-redux"
function todos() {
    const todos = useSelector(state => state.todos)
    return(
        <div>Todos: {todos}</div>
    )
}

export default todos
