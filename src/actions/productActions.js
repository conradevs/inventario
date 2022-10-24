import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR,
    START_PRODUCTS_DOWNLOAD,
    START_PRODUCTS_SUCCESS,
    START_PRODUCTS_ERROR,
    GET_PRODUCT_DELETE,
    PRODUCT_DELETED_SUCCESS,
    PRODUCT_DELETED_ERROR
} from '../types';

import axiosClient from '../config/axios';
import Swal from 'sweetalert2';

// Create new products
export function createNewProductAction (product) {
    return async(dispatch) => {
        dispatch(addProduct());
        try {
            // insert in API
            await axiosClient.post('/products',product);
            // if insert suceed, update state
            dispatch(addProductSucceed(product))
            // Alert
            Swal.fire(
                'Done',
                'Product added successfully',
                'success'
            )
        } catch (error) {
            console.log(error);
            // if theres an error change state
            dispatch(addProductError(true));
            
            // Error alert
            Swal.fire({
                icon: 'error',
                title: 'Something went wrong',
                text: 'There was an error, try again'
            })
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
});

// download products from database function
export function getProductsAction() {
    return async (dispatch) => {
        dispatch(downloadProducts());
        try {
            const response = await axiosClient.get('./products');
            dispatch(productsDowloaded(response.data));
        } catch (error) {
            dispatch(downloadProductsError())
        }
    }
}

const downloadProducts = () => ({
    type: START_PRODUCTS_DOWNLOAD,
    payload: true
})

const productsDowloaded = products => ({
    type: START_PRODUCTS_SUCCESS,
    payload:products
})

const downloadProductsError = () => ({
    type: START_PRODUCTS_ERROR,
    payload: true
})

// Select and delete product
export function deleteProductAction(id) {
    return async (dispatch) => {
        dispatch(getProductDelete());
    }
}

const getProductDelete = id => ({
    type: GET_PRODUCT_DELETE,
    payload: id
})