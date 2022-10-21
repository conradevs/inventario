import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
// Redux actions
import {createNewProductAction} from '../actions/productActions';

const NewProduct = () => {

    // component State
    const [name,saveName] = useState('');
    const [price,savePrice] = useState(0);
    
    // using useDispatch creates function
    const dispatch = useDispatch();
    
    // calling action from productAction
    const addProduct = product => dispatch(createNewProductAction(product));

    // When submit
    const submitNewProduct = e => {
        e.preventDefault();
        
        // validate form
        if(name.trim() === '' || price <= 0) {
            return;
        }
        // check for errors

        // create new product
        addProduct({name,price});
    }
    return (
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card mt-4">
                        <div className='card-body'>
                            <h2 className="text-center mb-4 font-weight-bold">
                                Add New Product
                            </h2>
                            <form
                                onSubmit={submitNewProduct}
                            >
                                <div className='form-group'>
                                    <label>Product Name</label>
                                    <input
                                        type='text'
                                        className="form-control"
                                        placeholder='Product Name'
                                        name='name'
                                        value={name}
                                        onChange={e => saveName(e.target.value)}
                                    ></input>
                                </div>
                                <div className='form-group'>
                                    <label>Price</label>
                                    <input
                                        type='number'
                                        className="form-control"
                                        placeholder='Price'
                                        name='price'
                                        value={price}
                                        onChange={e => savePrice(Number(e.target.value))}
                                    ></input>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                                >
                                    Add Product
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
}
 
export default NewProduct;