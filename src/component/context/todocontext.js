import React, { useState } from "react";

export const toDoContext = React.createContext()


export const ToDoContextProvider = ({children})=>{
    const [date, setDate] = useState({})
    const [toDo, setToDo] = useState([])
    return(
        <toDoContext.Provider value={{date,setDate,toDo, setToDo}}>
            {children}
        </toDoContext.Provider>
    )
}