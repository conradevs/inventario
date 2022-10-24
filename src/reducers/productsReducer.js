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

// Each reducer has its own state

const initialState = {
    products: [],
    error: null,
    loading: false,
    deleteProduct: null
}

export default function(state= initialState, action) {
    switch(action.type) {
        case START_PRODUCTS_DOWNLOAD:
        case ADD_PRODUCT:
            return {
                ...state,
                loading: action.payload
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products:[...state.products,action.payload]
            }
        case ADD_PRODUCT_ERROR:
        case START_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case START_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload
            }
        default:
            return state;
    }
}