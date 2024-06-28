import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import { useState, useEffect } from 'react';
import servicesAPI from '../services/helper.js';

function Men() {

  // Se crean los estados para guardar los datos de los estudiantes, la busqueda y los errores

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);


  // Funcion para buscar los estudiantes de genero masculino, Utilizo el metodo searchMale del helper servicesAPI
  // Se hace uso de async y await para esperar la respuesta de la API, en caso de no recibir respuesta se captura el error y se muestra en consola
  
  const showData = async () => {
    try {
      const data = await servicesAPI.searchMale();
      setUsers(data);
    } catch (error) {
      setError("No se pudo encontrar la dirección");
      console.error(error);
    }
  };

  // Se hace uso de useEffect para ejecutar la funcion showData al cargar la pagina

  useEffect(() => {
    showData();
  }, []);


  // Funcion para buscar los estudiantes, se filtra por nombre

  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };  

  // Se crea un array para guardar los resultados de la busqueda, si no se ha realizado ninguna busqueda se muestran todos los estudiantes
  // Se va actualizando con cada letra que se escribe en el input y va filtrando los estudiantes que coincidan con la busqueda

  let results = [];
  if (!search) { // Si no hay busqueda se muestran todos los estudiantes por eso "!search" (Lo niega)
    results = users;
  } else {  
    results = users.filter((dato) => // Se filtra el array de estudiantes utilizando el metodo filter 
      dato.name.toLowerCase().includes(search.toLowerCase())
    );
  } 


  return (
    <>
      <div className="container-men-list flex flex-col m-10">
        <div className='container-table flex w-full'>
            <input type="text" placeholder="Search" onChange={searcher} className="form-control"/>
        </div>
        <table className="table table-striped table-hover mt-5 shadow-lgm">
              <thead>
                <tr className="hola text-white">
                  <th>ID</th>
                  <th>Nombre Completo</th>
                  <th>Fecha de nacimiento</th>
                  <th>Aprobadas</th>
                </tr>
              </thead>
              <tbody>
                {results.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.birthdayDay}</td>
                    <td>{user.asignatures}</td>
                  </tr>
                ))}
              </tbody>
        </table>
      </div>
    </>
  )
}

export default Men