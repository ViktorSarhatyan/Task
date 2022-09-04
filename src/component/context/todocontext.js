import React, { useState } from "react";

export const todoContext = React.createContext()


export const ToDoContextProvider = ({children})=>{
    const [date, setDate] = useState({})
    const [todo, setTodo] = useState([])
    return(
        <todoContext.Provider value={{date,setDate,todo, setTodo}}>
            {children}
        </todoContext.Provider>
    )
}