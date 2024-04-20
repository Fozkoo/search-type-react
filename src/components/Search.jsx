import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

function Search() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const URL = 'http://localhost:3000/students';

  const showData = async () => {
    try {
      const response = await axios.get(URL)
      setUsers(response.data);
      console.log("Se encontro corractamente los usuarios")
    }
    catch (error){
      console.log("No se a podido encontrar la direccion", error)
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
        <input type="text" placeholder="Search" onChange={searcher} className="form-control"/>
    </div>

    <table className="table table-striped table-hover mt-5 shadow-lgm">
          <thead>
            <tr className="hola text-white">
              <th>ID</th>
              <th>Nombre Completo</th>
              <th>Fecha de nacimiento</th>
              <th>Sexo</th>
              <th>Aprobada</th>
            </tr>
          </thead>
          <tbody>
            {results.map((user) => (
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
  )
}

export default Search