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

    delete(url, id) {
        const DeleteUrl = `${url}/${id}` 
        return api.delete(DeleteUrl)
    }
}


/**
 * 
 * public static get(url: string, id: string = '', payload: any = {}): Promise<AxiosResponse> {
    const config = {
      params: payload.params,
      paramsSerializer: (data: any) => stringify(data),
    };
    return new Promise<AxiosResponse>((resolve) => {
      resolve(api.get(`${url}/${id}`, config));
    });
  }
 */