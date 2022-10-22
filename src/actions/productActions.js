import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from '../types';

import axiosClient from '../config/axios';

// Create new products
export function createNewProductAction (product) {
    return async(dispatch) => {
        dispatch(addProduct());
        try {
            // insert in API
            await axiosClient.post('/products',product);
            // if insert suceed, update state
            dispatch(addProductSucceed(product))
        } catch (error) {
            console.log(error);
            // if theres an error change state
            dispatch(addProductError(true));
        }
    }
}

const addProduct = () => ({
    type: ADD_PRODUCT,
    payload: true
})

// if product is saved successfully
const addProductSucceed = product => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})

// if there's an error
const addProductError = state => ({
    type: ADD_PRODUCT_ERROR,
    payload: state
})