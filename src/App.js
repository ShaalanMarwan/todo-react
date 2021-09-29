import "./App.css";
import TodoList from "./Todo-List";
import FormTodo from "./form-todo";
import { useState } from "react";
function App() {
  const [todosList, setTodosList] = useState([
    {
      text: "1-task",
      isCompleted: false,
    },
    {
      text: "2-task",
      isCompleted: true,
    },
    {
      text: "3-task",
      isCompleted: false,
    },
  ]);
  const addTodo = (text) => {
    console.log("todo from app");
    // todosList.push({text, isCompleted: false})
    const newTodos = [...todosList, { text, isCompleted: false }];
    setTodosList(newTodos);
  };
  // make a function to make a task completed
  // this function will be passed to TodoList
  // this function take index of task and mark it as completed
  const markAsCompleted = (index) => {
    const newTodos = [...todosList];
    if(newTodos[index].isCompleted){

      newTodos[index].isCompleted = false;
    }else{
      newTodos[index].isCompleted = true;

    }
    setTodosList(newTodos);

  }
  // make a function to delete a task
  // this function will be passed to TodoList
  // this function take index of task and delete it
  const deleteTodo = (index) => {
    const newTodos = [...todosList];
    newTodos.splice(index, 1);
    setTodosList(newTodos);
  }
  return (
    <div className="App">
      <FormTodo addTodo={addTodo} />
      <TodoList todos={todosList} 
      deleteTodo={deleteTodo} 
      markAsCompleted={markAsCompleted} />
    </div>
  );
}

export default App;
