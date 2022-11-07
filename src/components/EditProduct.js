import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { editProductAction } from '../actions/productActions';
import {useNavigate} from 'react-router-dom';

const NewProduct = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // New product state
    const [product,saveProduct] = useState({
        name: '',
        price: ''
    });

    // Product for edition
    const productEdit = useSelector(state => state.products.productEdit);
    
    // refresh state automatically
    useEffect ( () => {
        saveProduct(productEdit);
    },[productEdit])

    // Read data from edition form
    const onChangeEditForm = e => {
        saveProduct({
            ...product,
            [e.target.name] : e.target.value
        })
    };

    const {name, price} = product;

    const submitEditProduct = e => {
        e.preventDefault();
        dispatch(editProductAction(product));
        navigate('/');
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card mt-4">
                    <div className='card-body'>
                        <h2 className="text-center mb-4 font-weight-bold">
                            Edit Product
                        </h2>
                        <form
                            onSubmit={submitEditProduct}
                        >
                            <div className='form-group'>
                                <label>Product Name</label>
                                <input
                                    type='text'
                                    className="form-control"
                                    placeholder='Product Name'
                                    name='name'
                                    value={name}
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
                                    onChange={onChangeEditForm}
                                ></input>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NewProduct;