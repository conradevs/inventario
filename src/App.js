import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Products from './components/Products'
import NewProduct from './components/NewProduct'
import EditProduct from './components/EditProduct'

// Redux
import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <>  
      <BrowserRouter>
        <Provider store={store}>
          <Header/>
          <div className= "container mt-5">
              <Routes>
                <Route path="/" element={<Products/>} />
                <Route path="/Products/new" element={<NewProduct/>} />
                <Route path="/Products/edit/:id" element={<EditProduct/>} />
              </Routes>
          </div>
        </Provider>
      </BrowserRouter>
    </>
    );
}

export default App;
