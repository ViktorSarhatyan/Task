import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toDoContext } from "../context/todocontext";


export const DateList = ()=>{

    const {date} = useContext(toDoContext)

    const toDoGroup = Object.entries(date)

    return(
        <div>
            {toDoGroup.map((group)=>(
                <Link style={{display:"block"}} key={group[0]} to={`todo${group[0]}`}>{group[0]}({group[1]})</Link>
            ))}
        </div>
    )
}