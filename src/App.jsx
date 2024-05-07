import { useState } from "react";
import { Form, Button } from "react-bootstrap/";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const ListItems = styled.li`
    cursor: pointer;
    margin: 1rem 0;
  `

  function addTodo(){
    setTodos([...todos, todoInput]);
    setTodoInput("");
  }

  return (
    <>
      <section className="py-5 bg-dark text-white">
        <div className="container py-5">
          <Form className="d-flex flex-column py-5">
            <Form className="label text-center mb-2 fs-2">Hedef</Form>
            <div className="formActions d-flex">
              <Form.Control
                value={todoInput}
                onChange={(event) => {
                  setTodoInput(event.target.value);
                }}
                className="control border-dark"
                type="text"
              />
              <Button onClick={addTodo} variant="primary">Send</Button>
            </div>
          </Form>
          <ul className="pb-5">
            {todos.map((todo) => (
              <ListItems key={todo} onClick={() =>{
                setTodos(todos.filter((todoDelete) => todoDelete !== todo));
              }}>
                {todo}
              </ListItems>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
