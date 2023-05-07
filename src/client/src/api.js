import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080/'
}) 

export default class Rotas {
    get(url, data) {
        return api.get(url, data)
    }

    post(url, data) {
        console.log(data)
        return api.post(url, data)
    }

    patch(url, data, id){
        const patchUrl = `${url}/${id}` 
        return api.patch(patchUrl, data)
    }

    delete(url, id) {
        const DeleteUrl = `${url}/${id}` 
        return api.delete(DeleteUrl)
    }
}

