import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import servicesAPI from '../services/helper.js';

function FormAdd() {

  // constante que guarda los datos del formulario 

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    birthdayDay: '',
    asignatures: '',
    gender: ''
  });


  // Función que se encarga de capturar los datos del formulario

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  // Función que se encarga de enviar los datos del formulario al backend

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await servicesAPI.addStudent(formData); // Se envían los datos al backend utilizando la funcion que viene del helper
      alert('Alumno agregado correctamente');
      window.location.reload(); 
    } catch (error) {
      alert('Ocurrió un error al agregar el alumno');
    }
  };



  return (
    <>
      <div className="container-form flex items-center justify-center w-full mb-10 flex-col">
        <Form onSubmit={handleSubmit} className='formulario flex flex-col w-full'>
          <Form.Group className="mb-3">
            <Form.Label>ID del usuario</Form.Label>
            <Form.Control
              type="number"
              name='id'
              placeholder='ID'
              required
              value={formData.id}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nombre y apellido</Form.Label>
            <Form.Control
              type="text"
              name='name'
              placeholder='Nombre y apellido'
              required
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Fecha de nacimiento</Form.Label>
            <Form.Control
              type="text"
              placeholder="Fecha de nacimiento"
              name='birthdayDay'
              required
              value={formData.birthdayDay}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Sexo M F</Form.Label>
            <Form.Control
              type="text"
              placeholder="M o F"
              name='gender'
              required
              value={formData.gender}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Asignaturas aprobadas</Form.Label>
            <Form.Control
              type="number"
              placeholder="Asignaturas aprobadas"
              name='asignatures'
              required
              value={formData.asignatures}
              onChange={handleChange}
            />
          </Form.Group>
          
          <div className="contain-buton">
            <Button variant="primary" type="submit">
              Cargar Alumno
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default FormAdd;
