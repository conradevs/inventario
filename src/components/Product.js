import React from 'react'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2';
// Redux
import { useDispatch } from 'react-redux'
import { deleteProductAction, getProductEdit } from '../actions/productActions'

const Product = ({product}) => {
    const {name,price,id} = product
    
    const dispatch = useDispatch();
    const navigate = useNavigate(); // set history for redirection

    // Delete confirmation
    const productDeleteConfirmation = id => {
        // ask user
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
          }).then((result) => {
            if (result.isConfirmed) {
                // send to action
                dispatch(deleteProductAction(id));
            }
          })

    }
    // function for programmed redirect
    const redirectEdit = product => {
        dispatch(getProductEdit(product));
        navigate(`/products/edit/${product.id }`);
    }
    return ( 
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold"> ${price}</span></td>
            <td>
                <button
                    type="button"
                    onClick={() => redirectEdit(product)}
                    className= "btn btn-primary mr-2"
                >
                    Edit
                </button>
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