import Todo from "./todo";

const TodoList = (props) => {
  return (
    <div>
      <h1>Todo List</h1>
      {props.todos?.map((todo, index) => {
        return (
          <Todo
            markAsCompleted={props.markAsCompleted}
            index={index}
            deleteTodo={props.deleteTodo}
            key={index}
            todo={todo}
          />
        );
      })}
    </div>
  );
};
export default TodoList;
