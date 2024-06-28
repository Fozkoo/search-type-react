import axios from "axios";

// Creacion del helper para gestionar las peticiones a la API y preservar la seguridad de la URL



const BASE_URL = 'http://localhost:3000'; // URL de la API, en este caso es una API local

// Creacion de la instancia de axios para gestionar las peticiones a la API

const api = axios.create({
  baseURL: BASE_URL,
});

// Funcion para buscar los estudiantes de genero masculino, Se filtra por "gender" y se le pasa el valor "masculino"
// Se hace uso de async y await para esperar la respuesta de la API
// En caso de no recibir respuesta se captura el error y se muestra en consola

const searchMale = async () => {
  try {
    const response = await api.get('/students', { params: { gender: 'masculino' } });
    return response.data;
  } catch (error) {
    console.error("Error fetching male students:", error);
    throw error;
  }
};

// Funcion para buscar los estudiantes de genero femenino,

const searchFemale = async () => {
  try {
    const response = await api.get('/students', { params: { gender: 'femenino' } });
    return response.data;
  } catch (error) {
    console.error("Error fetching female students:", error);
    throw error;
  }
};



// Funcion para buscar todos los estudiantes


const searchAll = async () => {
  try {
    const response = await api.get('/students');
    return response.data;
  } catch (error) {
    console.error("Error fetching all students:", error);
    throw error;
  }
};


// funcion para cargar un estudiante
const addStudent = async (studentData) => {
  try {
    const response = await api.post('/students', studentData);
    return response.data;
  } catch (error) {
    console.error("Error adding student:", error);
    throw error;
  }
};


// Se crea un objeto donde se guardan las funciones para exportarlas y poder usarlas en otros archivos

const servicesAPI = {
  searchMale,
  searchFemale,
  searchAll,
  addStudent
};

// Exporto el objeto servicesAPI

export default servicesAPI;
