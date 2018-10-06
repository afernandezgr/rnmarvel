import axios from 'axios'
import * as Commons from '../commons'
export function configureAxios() {
    axios.defaults.baseURL = 'http://gateway.marvel.com';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Referer'] = Commons.MARVELREFERER;
}

export function fetchComics() {
    const url = '/v1/public/comics?format=hardcover&orderBy=-onsaleDate&limit=' + Commons.PAGESIZE + '&apikey=' + Commons.MARVELAPIKEY
    console.log("URL: ", url)
    return axios.get(url)


}

export function postComic(data) {
    //not allowd in API Marvel

    //will be similar to this, fake method

    /* const url = '/v1/public/comics/${data.id}?apikey=' + Commons.MARVELAPIKEY
    return axios.post(url, data)
    .then((response) => {
        return response.data
    }).catch((error) => {
        throw error
    }); */
}