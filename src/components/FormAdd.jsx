import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormAdd() {
  return (
    <>
    
    <div className="container-form flex items-center justify-center w-full mt-10 flex-col">
        <Form className='formulario flex flex-col w-7/12 '>
          <Form.Group className="mb-3">
            <Form.Label>ID del usuario</Form.Label>
            <Form.Control type="number" name='id' placeholder='ID' required/>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nombre y apellido</Form.Label>
            <Form.Control type="text" name='name' placeholder='Nombre y apellido' required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control type="text" placeholder="Fecha de nacimiento" name='birthdayDay' required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Sexo M F</Form.Label>
            <Form.Control type="text" placeholder="M o F" name='sexo' required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Asignaturas aprobadas</Form.Label>
            <Form.Control type="number" placeholder="Asignaturas aprobadas" name='asignatures' required />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Cargar Alumno
          </Button>
        </Form>
    </div>
    
    
    </>
  )
}

export default FormAdd