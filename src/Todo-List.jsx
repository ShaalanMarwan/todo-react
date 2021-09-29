import Todo from "./todo";

const TodoList = (props) => {
  return (
    <div>
      <h1>Todo List</h1>
      {props.todos?.map((todo, index) => {
        return <Todo checked={props.completed}
        index={index} key={index} todo={todo} />;
      })}
    </div>
  );
};
export default TodoList;
