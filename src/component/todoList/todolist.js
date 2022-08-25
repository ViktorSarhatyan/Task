import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { toDoContext } from "../context/todocontext";
import { ToDoItem } from "../todoitem/todoitem";


export const ToDoList = ()=>{

    const {pathname} = useLocation()

    const toDoCurrentGroup = pathname.slice(5)

    const {toDo} = useContext(toDoContext)

    const toDoList = toDo.filter((todo) => todo.date === toDoCurrentGroup )

    return(
        <div>
            <Link to="/"><button>Back</button></Link>
            {toDoList.map((todo, index)=>{
                return(
                    <ToDoItem key={todo.description} todo={todo}></ToDoItem>
                )
            })}
        </div>
    )
}