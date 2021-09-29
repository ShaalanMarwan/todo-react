import { Form, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";

const FormTodo = (props) => {
  const [state, setState] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (state) {
      props.addTodo(state);
    }
    setState("");
  };
  const onInputChangeHandler = (event) => {

    setState(event.target.value);
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group>
        <Form.Label>Add Todo</Form.Label>
        <Form.Control
          value={state}
          onChange={onInputChangeHandler}
          type="text"
          placeholder="Enter Todo"
        />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};
export default FormTodo;
