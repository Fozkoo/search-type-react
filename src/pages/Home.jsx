import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormAdd from '../components/FormAdd';
import Search from '../components/Search';

function Home() {
  return (
    <>
      <section className=''>
        <div className="container-add flex flex-col justify-center items-center p-10">
           <FormAdd/>
           <Search/>
        </div>


      </section>


    </>


  )

}

export default Home