import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api-gaapo-i2ddno6wla-uw.a.run.app/',
    timeout: 120000,
    headers: { 'Content-type': 'application/json', Accept: 'application/json' },
}) 

export default class Rotas {
    get(url, data) {
        return api.get(url, data)
    }

    post(url, data) {
        console.log(data)
        return api.post(url, data)
    }

    patch(url, data){
        return api.patch(url, data)
    }

    delete(url, id) {
        const DeleteUrl = `${url}/${id}` 
        return api.delete(DeleteUrl)
    }
}

