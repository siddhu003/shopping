// import React from 'react'
import * as api from '../api'

export const fetchAllImages = () => async (dispatch) => {
    try {
        const { data } = await api.getAllImages();
        // console.log(data)
        dispatch({type: 'FETCH_ALL_IMAGES',payload:data})
    } catch (error) {
        console.log(error)
    }
}