import React, { useContext, useState } from "react";
import { todoContext } from "../context/todocontext";
import { DateList } from "../dateList/dateList";


export const CreateTodo = ()=>{
    const [description ,setDescription] = useState('')
    const [todoDate ,setTodoDate] = useState('')
    const {todo, setTodo , date ,setDate} = useContext(todoContext)
    
    const handleInputChange = (e) => {
        if(e.target.name === "description"){
            setDescription(e.target.value)
        }

        if(e.target.name === "date"){
            setTodoDate(e.target.value)
        }
        
    }

    const handleCreateTodo = () => {
        if(!description.trim || !todoDate.trim){
            alert('each filds are required')
            return
        }

        if(todo.some((item) => item.description === description)){
            alert('To Do with this name already exsits')
            return
        }

        const newTodo = {
            description : description,
            date : todoDate,
            completed : false
        }

        setTodo((prevState)=> [...prevState , newTodo])

        if(!date[todoDate]){
            setDate((prev) => {
                return { ...prev , [todoDate] : 1}
            })
        }else{
            date[todoDate] = date[todoDate] + 1
            setDate({...date})
        }

        setDescription("")
        setTodoDate("")

    }

    return(
        <div>
            <input value={description} onChange={handleInputChange} type='text' name='description' />
            <input value={todoDate} onChange={handleInputChange} type='date' name='date' />
            <button onClick={handleCreateTodo}> Create Todo</button>
            <DateList></DateList>
        </div>
    )
}