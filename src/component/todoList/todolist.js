import React, { useContext } from 'react'
import {Link, useLocation} from 'react-router-dom'
import { todoContext } from '../context/todocontext';
import { TodoItem } from '../todoItem/todoItem';

export const TodoList = () =>{
    const {pathname} = useLocation();
    const todoListDate = pathname.slice(5);
    const {todo } = useContext(todoContext);
    const todoGroup = todo.filter((item)=> item.date === todoListDate)
      return (
        <div>
          <Link to='/'><button>Back</button></Link>
          {todoGroup.map((singleTodo , index) =>  ( <TodoItem key={singleTodo.description} singleTodo = {singleTodo}/>))}
        </div>
      )
}