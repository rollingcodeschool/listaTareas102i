//  import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";

const FormularioTarea = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex" >
          <Form.Control type="text" placeholder="agrega una tarea" />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
