import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080'
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

