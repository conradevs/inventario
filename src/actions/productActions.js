import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_ERROR
} from '../types';

// Create new products
export function createNewProductAction (product) {
    return (dispatch) => {
        dispatch(addProduct());
        try {
            dispatch(addProductSucceed(product))
        } catch (error) {
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
const addProductError = () => ({
    type: ADD_PRODUCT_ERROR,
})