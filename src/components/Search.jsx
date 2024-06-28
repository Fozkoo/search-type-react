import React, { useState, useEffect } from 'react';
import servicesAPI from '../services/helper.js';

function Search() {

  // Almaceno los datos de los usuarios en un estado

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // Función que se encarga de mostrar los datos de los usuarios

  const showData = async () => {
    try {
      const data = await servicesAPI.searchAll();
      setUsers(data); 
    } catch (error) {
      console.log("No se ha podido encontrar la dirección", error);
    }
  };


  // Se ejecuta la función showData al cargar la página

  useEffect(() => {
    showData();
  }, []);


  // Función que se encarga de buscar los estudiantes

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
      <div className='container-table flex w-full'>
        <input type="text" placeholder="Buscar alumno" onChange={searcher} className="form-control" />
      </div>

      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr className="bg-primary text-white">
            <th>ID</th>
            <th>Nombre Completo</th>
            <th>Fecha de nacimiento</th>
            <th>Sexo</th>
            <th>Aprobada</th>
          </tr>
        </thead>
        <tbody>
          {results && results.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.birthdayDay}</td>
              <td>{user.gender}</td>
              <td>{user.asignatures}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Search;
