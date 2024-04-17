import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import axios from 'axios';
import { useState, useEffect } from 'react';

function Men() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const URL = 'http://localhost:3000/students?gender=masculino';


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