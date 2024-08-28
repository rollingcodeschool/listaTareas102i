//  import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const FormularioTarea = () => {
  const tareasLocalstorage = JSON.parse(localStorage.getItem('tareasKey')) || [];
  const [listaTareas, setListaTareas] = useState(tareasLocalstorage)
  const [tarea, setTarea] = useState('');
  const {register, handleSubmit, formState:{errors}} = useForm();


  //ciclo de vida del componente
  useEffect(()=>{
    console.log('prueba del ciclo de vida');
    //guardar en localstorage
    localStorage.setItem('tareasKey', JSON.stringify(listaTareas))
  }, [listaTareas])

// const tomarTexto = (e)=>{
//   setTarea(e.target.value)
// }

const handleSubmit2 = (e)=>{
  e.preventDefault();
  //guardar la tarea en listaTareas
  // listaTareas.push(tarea)
  // ... operador spread
  setListaTareas([...listaTareas, tarea])
  setTarea('');
}

const borrarTarea = (nombreTarea)=>{
  //listaTareas.splice
  const tareasFiltradas = listaTareas.filter((item)=> item !== nombreTarea );
  //actualizar el state
  setListaTareas(tareasFiltradas)
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
      <ListaTareas listaTareas={listaTareas} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormularioTarea;
