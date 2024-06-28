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

const searchFemale = async () => {
  try {
    const response = await api.get('/students', { params: { gender: 'femenino' } });
    return response.data;
  } catch (error) {
    console.error("Error fetching female students:", error);
    throw error;
  }
};

// Se crea un objeto donde se guardan las funciones para exportarlas y poder usarlas en otros archivos

const servicesAPI = {
  searchMale,
  searchFemale
};

// Exporto el objeto servicesAPI

export default servicesAPI;
