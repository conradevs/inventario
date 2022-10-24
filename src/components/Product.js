import React from 'react'
import {Link} from 'react-router-dom'
import { deleteProductAction } from '../actions/productActions'

// Redux
import { useDispatch } from 'react-redux'
const Product = ({product}) => {
    const {name,price,id} = product
    
    const dispatch = useDispatch();

    // Delete confirmation
    const productDeleteConfirmation = id => {
        // ask user

        // send to action
        dispatch(deleteProductAction(id));
    }
    
    return ( 
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold"> ${price}</span></td>
            <td>
                <Link to={`/products/edit/${id}`}
                    className= "btn btn-primary mr-2"
                >
                    Edit
                </Link>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => productDeleteConfirmation(id)}
                >Delete</button>
            </td>
        </tr>
    );
}
 
export default Product;