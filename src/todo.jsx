import { Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Todo = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span
        style={{
          textDecoration: props.todo.isCompleted ? "line-through" : "none",
        }}
      >
        {props.todo.text}
      </span>
      <div>
        <Button
          onClick={() => {
            props.checked(props.index);
          }}
        >
          ✅
        </Button>
        <Button onClick={() => {}}>❌</Button>
      </div>
    </div>
  );
};
export default Todo;
