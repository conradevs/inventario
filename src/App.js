import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Products from './components/Products'
import NewProduct from './components/NewProduct'
import EditProduct from './components/EditProduct'


function App() {
  return (
    <>  
      <BrowserRouter>
      <Header/>
      <div className= "container">
          <Routes>
            <Route path="/" element={<Products/>} />
            <Route path="/Products/new" element={<NewProduct/>} />
            <Route path="/Products/edit/:id" element={<EditProduct/>} />
          </Routes>
      </div>
      </BrowserRouter>
    </>
    );
}

export default App;
