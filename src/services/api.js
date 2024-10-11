import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://rocketnotes-api-9rg7.onrender.com' // se não funcionar, botar localhost/
})