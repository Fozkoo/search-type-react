import '@fontsource-variable/onest';
import React from 'react'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';





function Header() {
    return (
      <header>
        <div className="container-header h-24 bg-gray-200 flex justify-center items-center font-bold">
            <nav>
              <ul className='flex gap-5 text-white textde'>
                <li>
                  <Link to="/" className=''>ALUMNOS</Link>
                </li>
                <li>
                  <Link to="/men">HOMBRES</Link>
                </li>
                <li>
                  <Link to="/woman">MUJERES</Link>
                </li>
              </ul>
            </nav>
        </div>
      </header>
          
    );
  }
  
  export default Header;