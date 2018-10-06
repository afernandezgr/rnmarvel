import * as types from './types'
import { Actions } from 'react-native-router-flux'
import { AsyncStorage } from 'react-native'

function setFetching(value) {
    return {
        type: types.COMICS_SET_FETCHING,
        value: value
    }
}
export function setList(value) {
    return {
        type: types.COMICS_UPDATE_LIST,
        value,
    }
}
export function setItem(value) {
    return {
        type: types.COMICS_SET_ITEM,
        value
    }
}
export function fetchComicsList() {
    return (dispatch, getState, api) => {

        //recover from asyncstorage to improve performance during firt run
        AsyncStorage.getItem('comicsList', (error, result) => {
            if(result && !error) {
                console.log('Read from asyncstorage')
                const comicsList = JSON.parse(result)
                dispatch(setList(comicsList))
            } else {
                dispatch(setFetching(true))
            }
        })

        api
            .fetchComics()
            .then(res => {
                console.log("fetchComicsList res: ", res)
                dispatch(setFetching(false))
                dispatch(setList(res.data.data.results))
                AsyncStorage.setItem('comicsList', JSON.stringify(res.data.data.results))
            })
            .catch(err => {
                dispatch(setFetching(false))
                console.log("fetchComicsList error: ", err)
            })
    }
}

export function postComic(data) {
    

    return (dispatch, getState, api) => {

       //Persistance vía API not allow by Marvel API
       //Below I show the method we could use to persist the info regarded in the form
       /*  const comic = getState().comicsList.comic
        if (!data || !comic){
            return
        }
        dispatch(SetFetching(true))
        const comicData = {
            ...data,
            comic: comic.id
        }
        api
            .postComic(comicData)
            .then( res => {
                dispatch(setSetching(false))
                dispatch(fetchComicsList())
                Actions.pop()
            }).catch ( err => {
                dispatch(setFetching(false))
                console.log("postComic err:", err)
            })
        */
    
        //We just pop the view because persistante it's not allowed in the API used in the app, Marvel
        Actions.pop()
    }
}