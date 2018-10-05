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

        //recover from asyncstorage to improve performance
        AsyncStorage.getItem('comicsList', (error, result) => {
            if(result && !error) {
                console.log('read from asyncstorage')
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
        Actions.pop()
    }
}