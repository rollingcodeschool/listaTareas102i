//  import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState } from "react";


const FormularioTarea = () => {
  const [listaTareas, setListaTareas] = useState([])
  const [tarea, setTarea] = useState('')

// const tomarTexto = (e)=>{
//   setTarea(e.target.value)
// }

const handleSubmit = (e)=>{
  e.preventDefault();
  //guardar la tarea en listaTareas
  // listaTareas.push(tarea)
  // ... operador spread
  setListaTareas([...listaTareas, tarea])
  setTarea('');
}

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" >
          <Form.Control type="text" placeholder="agrega una tarea" onChange={(e)=> setTarea(e.target.value)} value={tarea}/>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas listaTareas={listaTareas}></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
