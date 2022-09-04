import React, { useContext , useState } from 'react'
import { todoContext } from '../context/todocontext';

export const TodoItem = ({singleTodo}) =>{
        const {todo ,setTodo , date ,setDate} = useContext(todoContext)
        const index = todo.findIndex((item) => item.description === singleTodo.description) 
        const [isEdit , setIsEdit] = useState(false)
        const [newDescription, setNewDescription] = useState(singleTodo.description)


        const handleCheckbox = () => {
            todo[index].completed = !todo[index].completed
            setTodo([...todo])
        }

        const handleDelete = () => {
            const updatedTodo = todo.filter(item => item.description !== singleTodo.description)
            setTodo(updatedTodo)

            date[singleTodo.date] = date[todo.date] - 1;

            if(!date[singleTodo.date]){
                delete date[singleTodo.date]
            }

            setDate({...date})
        }

        const handleEdit = () => {
            setIsEdit(true)
        }

        const handleChangeInput = (e)=> {
            setNewDescription(e.target.value)
        }

        const cancelButton = ()=> {
            setNewDescription('')
            setIsEdit(false)

        }

        const saveButton = () => {
            if(todo.some((item)=> item.description === newDescription)){
                alert('Description with this text is already exists')
                return
            }

            todo[index].description = newDescription
            setTodo([...todo])
            setIsEdit(false)
        }

      return (
        <div style={{display:"flex"}}>
            {!isEdit && <input type='checkbox' checked={singleTodo.completed} onChange={handleCheckbox}/>}
            {!isEdit ? <p>{singleTodo.description}</p> :
            ( <><input type='text' name='newDescription' value={newDescription} onChange={handleChangeInput} /><button onClick={saveButton}>Save</button><button onClick={cancelButton}>Cancel</button></>
            ) }
            {!isEdit && <button onClick={handleEdit}>Edit</button>}
           <button onClick={handleDelete}>Delete</button>
        </div>
      )
}