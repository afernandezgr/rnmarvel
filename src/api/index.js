import axios from 'axios'
import * as Commons from '../commons'
export function configureAxios() {
    axios.defaults.baseURL = 'http://gateway.marvel.com';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Referer'] = Commons.MARVELREFERER;
}

export function fetchComics() {
    const url = '/v1/public/comics?format=hardcover&orderBy=-onsaleDate&apikey=' + Commons.MARVELAPIKEY
    console.log("URL: ", url)
    return axios.get(url)


}

export function postComic(data){
    //not impemented, not allowd in API Marvel
}