import React from 'react'


function Search() {
  return (
    <>
    <div className='container-table flex w-full'>
        <input type="text" placeholder="Search" className="form-control"/>
    </div>

    <table className="table table-striped table-hover mt-5 shadow-lgm">
          <thead>
            <tr className="hola text-white">
              <th>ID</th>
              <th>Nombre Completo</th>
              <th>Fecha de nacimiento</th>
              <th>Sexo</th>
              <th>Aprobadas</th>
            </tr>
          </thead>
          <tbody>
              <tr >
                <td>1</td>
                <td>Tiziano</td>
                <td>19-05-2004</td>
                <td>Masculino</td>
                <td>23</td>
              </tr>
          </tbody>
    </table>

    
    </>
  )
}

export default Search