import './App.css';
import { CreateToDo } from './component/createtoDo/createtodo';
import { ToDoList } from './component/todoList/todolist';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CreateToDo />}/>
      <Route path='todo:group' element={<ToDoList/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
