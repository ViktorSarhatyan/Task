import './App.css';
import { CreateTodo } from './component/createTodo/createTodo';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {TodoList} from './component/todoList/todoList'



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<CreateTodo />}/>
      <Route path='todo:group' element={<TodoList/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
