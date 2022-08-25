import React, { useContext, useState } from "react";
import { toDoContext } from "../context/todocontext";


export const ToDoItem = ({todo})=>{

    const {toDo, setToDo, date, setDate} = useContext(toDoContext)

    const [isEdit, setIsEdit] = useState(false)

    const [newDescription, setNewDescription] = useState(todo.description)

    const index = toDo.findIndex((item)=> item.description === todo.description)

    const deleteToDo = ()=>{
        const updatedToDo = toDo.filter((item)=> item.description !== todo.description)

        setToDo(updatedToDo)

        date[todo.date] = date[todo.date] -  1


        if(!date[todo.date]){
            delete date[todo.date]
        }

        setDate({...date})
    }

    const editTodo = ()=>{
        setIsEdit(true)
    }

    const changeToDoStatus = ()=>{
        
        toDo[index].completed = !toDo[index].completed

        setToDo([...toDo])
    }

    const handleInputChange = (e)=>{
        setNewDescription(e.target.value)
    }

    const saveEdit = ()=>{
        if(toDo.some((todo)=> todo.description === newDescription && newDescription !== todo.description)){
            alert("ToDo with this name already exsit")
            return
        }

        toDo[index].description = newDescription

        setToDo([...toDo])

        setIsEdit(false)
    }


    const cancelEdit = ()=>{
        setIsEdit(false)
        setNewDescription(todo.description)
    }


    return(
        <div style={{display:"flex"}}>
            {!isEdit && <input type="checkbox" checked={todo.completed} onChange={changeToDoStatus}></input>}
            {!isEdit ? <p>{todo.description}</p> : 
            <input type="text" value={newDescription} onChange={handleInputChange}></input>
            }
            <button disabled={isEdit} onClick={editTodo}>Edit</button>
            <button onClick={deleteToDo} disabled={isEdit}>Delete</button>
            {isEdit && <button onClick={saveEdit}>Save</button>}
            {isEdit && <button onClick={cancelEdit} >Cancel</button>}
        </div>
    )
}