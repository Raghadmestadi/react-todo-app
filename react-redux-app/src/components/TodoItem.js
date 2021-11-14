import React from "react"
import Checkbox from "@material-ui/core/Checkbox"
import { useDispatch } from "react-redux"
import { setCheck, deleteTodo } from "../features/todoSlice"

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch()
  const handledelete = () => {
    dispatch(deleteTodo(id))
  }
  const handleCheck = () => {
    dispatch(setCheck(id))
  }

  return (
    <div className="todoItem">
      <Checkbox checked={done} onChange={handleCheck} color="secondary" inputProps={{ "aria-label": "controlled" }} />
      <p className={done && "todoItem--done"}>{name}</p>
      <button onClick={handledelete}> delete</button>
    </div>
  )
}

export default TodoItem
