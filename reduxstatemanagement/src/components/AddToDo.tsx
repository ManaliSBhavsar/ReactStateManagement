import { useDispatch } from "react-redux"
import { addToDo } from "../features/toDoSlice"
import { useState } from "react"
function AddToDo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch();
    const addToDoHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addToDo(input));
        setInput('');
    }
    return(
        <>
            <form onSubmit={addToDoHandler}>
            <input></input>
            <button type="submit">Add to Do</button>
            </form>
        </>
    )
}

export default AddToDo
