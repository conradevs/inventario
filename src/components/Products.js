import React, {useEffect} from 'react';
// Redux
import {useSelector, useDispatch} from 'react-redux'
import { getProductsAction } from '../actions/productActions';
import Product from './Product'
const Products = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        //API request
        const loadProducts = () => dispatch(getProductsAction());
        loadProducts();
    },[])

    // Get state
    const products = useSelector(state => state.products.products);
    const error = useSelector(state => state.products.error);
    const loading = useSelector(state => state.products.loading);
    
    return (
        <>
            <h2 className='text-center my-5'>Product List</h2>
            {error ? <p className='font-weight-bold alert alert-danger text-center mt-4'>Something went wrong</p>: null}
            {loading ? <p className='text-center'>Loading...</p>: null}
            <table className='table table-striped'>
                <thead>
                <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Price</th>
                    <th scope='col'>Options</th>
                </tr>
                </thead>
                <tbody>
                    {products.length === 0 ? 'There are no products' : (
                        products.map(product => (
                            <Product
                                key={product.id}
                                product={product}
                            
                            />
                        ))
                    )}
                </tbody>
            </table>
        </>
    );
}
 
export default Products;