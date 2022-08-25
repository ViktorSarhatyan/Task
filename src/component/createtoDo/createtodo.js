import React, { useContext, useState } from "react";
import { toDoContext } from "../context/todocontext";
import { DateList } from "../dateList/datelist";


export const CreateToDo = ()=>{

    const [toDoDescription, setToDescription] = useState("")

    const [toDoDate, setToDoDate] = useState("")


    const {toDo, setToDo, date, setDate } = useContext(toDoContext)

    const handleInputChange = (e)=>{
        if(e.target.name === "description"){
            setToDescription(e.target.value)
        }

        if(e.target.name === "date"){
            setToDoDate(e.target.value)
        }
    }

    const createToDo = ()=>{
        if( !toDoDescription.trim() || !toDoDate.trim()){
            alert("Two fields are required")
            return
        }

        if(toDo.some((toDo)=> toDo.description === toDoDescription)){
            alert("To Do with this name already exsits")
            return
        }


        const newToDo = {
            description: toDoDescription,
            date: toDoDate,
            completed:false
        }

        setToDo((prev)=>[...prev,newToDo])

        if(!date[toDoDate]){
            setDate((prev)=>{
                return {...prev, [toDoDate]:1}
            })
        }else{
            date[toDoDate] = date[toDoDate] + 1
            setDate({...date})
        }

        setToDescription("")
        setToDoDate("")

    }


    return(
        <div>
            <input type="text" name="description" value={toDoDescription} onChange={handleInputChange}></input>
            <input type="date" name="date" value={toDoDate} onChange={handleInputChange}></input>
            <button onClick={createToDo}>Create</button>
            <DateList></DateList>
        </div>
    )
}