import React, { useState, useEffect } from 'react';
import servicesAPI from '../services/helper.js';

function Search() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const showData = async () => {
    try {
      const data = await servicesAPI.searchAll();
      setUsers(data); 
      console.log("Se encontraron correctamente los usuarios:", data);
    } catch (error) {
      console.log("No se ha podido encontrar la dirección", error);
    }
  };

  useEffect(() => {
    showData();
  }, []);

  const searcher = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  let results = [];
  if (!search) {
    results = users;
  } else {
    results = users.filter((dato) =>
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
