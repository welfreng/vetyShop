import axios from 'axios';

import { ALL_PRODUCTS_REQUEST,
     ALL_PRODUCTS_SUCCESS,
     ALL_PRODUCTS_FAIL,
     PRODUCTS_DETAILS_REQUEST,
     PRODUCTS_DETAILS_SUCCESS,
     PRODUCTS_DETAILS_FAIL,
     CLEAR_ERRORS
     } from '../constants/productConstants';

     export const getProducts = () => async(dispatch)=>{
        try {
            dispatch({type: ALL_PRODUCTS_REQUEST})

            //aqui se comunica con la ruta y devuelve lo solicitado en un json
            const {data} = await axios.get('api/productos') 

            dispatch({
                type:ALL_PRODUCTS_SUCCESS,
                payload:data
            })
        }catch(error){
            dispatch({
                type:ALL_PRODUCTS_FAIL,
                payload:error.response.data.message
            })
        }
     }

     //ver detalles del producto
     export const getProductDetails = (id) => async(dispatch)=>{
        try {
            dispatch({type: PRODUCTS_DETAILS_REQUEST})

            //aqui se comunica con la ruta y devuelve lo solicitado en un json
            const {data} = await axios.get(`api/producto/:${id}`)
 

            dispatch({
                type:PRODUCTS_DETAILS_SUCCESS,
                payload:data.product
            })
        }catch(error){
            dispatch({
                type:PRODUCTS_DETAILS_FAIL,
                payload:error.response.data.message
            })
        }
     }


     //clear error
     export const clearErrors = ()=> async(dispatch)=>{
        dispatch({
            type: CLEAR_ERRORS
        })
     }