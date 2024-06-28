import '@fontsource-variable/onest';
import React from 'react'
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import logo from '../image/logo.png';
import './header.css';


function Header() {
    return (
     
    <header>
      <div className="container-header h-20 shadow-sm flex justify-between items-center font-semibold">
        <nav className=' flex justify-center items-center gap-5 text-xl w-full'>
              <Link to="/" className=''>ALUMNOS</Link>
              <Link to="/men">HOMBRES</Link>
              <Link to="/woman">MUJERES</Link>
        </nav>
      </div>
    </header>
          
    );
  }
  
  export default Header;