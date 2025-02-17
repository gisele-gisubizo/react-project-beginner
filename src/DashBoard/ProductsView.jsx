import React from 'react'
import { services } from '../components/Shop'
import './DashBoard_styles/product.css';
function ProductsView() {
  return (
    <div className='products-content'>
        <div className="top"><h3>List of Products</h3></div>
        <div className='add-vendor'>
             <p >Add a product</p>
         </div>
         <div className='remove-vendor'>
             <p >Remove a product</p>
         </div>
         
        
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {services.map((service, index) =>(
                        <tr key={index}>
                            <td>{service.id}</td>
                            <td><img src={service.image} alt="" className='product-img' /> {service.name}</td>
                          
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ProductsView