import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { todoContext } from '../context/todocontext'

export const DateList = () =>{
    const { date } = useContext(todoContext)
    const todoGroup = Object.entries(date)
      return (
        <div>
            {todoGroup.map((group,index)=>(
                <Link style={{display:"block"}} key={group[0]} to={`todo${group[0]}`}>{group[0]}({group[1]})</Link>
            ))}    </div>
      )
}