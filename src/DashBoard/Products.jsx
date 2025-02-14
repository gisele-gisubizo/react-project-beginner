import React from 'react';
import { services } from './Products';  // Make sure the services array is correctly imported
import { useParams } from 'react-router-dom';
import './DashBoard_styles/Products.css';  // Import necessary CSS


function Products() {
  const { id } = useParams();

  // Find the product by matching the id
  const viewProduct = services.find((product) => product.id === parseInt(id));

  if (!viewProduct) {
    return <h2 className="product-not-found">Product not found!</h2>;
  }

  return (
    <div className='product-details-container'>
      <h2 className='product-title'>Product Details</h2>
      
      <table className='product-details-table'>
        <tbody>
          <tr>
            <td><strong>ID</strong></td>
            <td>{viewProduct.id}</td>
          </tr>
          <tr>
            <td><strong>Name</strong></td>
            <td>{viewProduct.name}</td>
          </tr>
          <tr>
            <td><strong>Product Title</strong></td>
            <td>{viewProduct.productTitle}</td>
          </tr>
          <tr>
            <td><strong>Description</strong></td>
            <td>{viewProduct.description}</td>
          </tr>
          <tr>
            <td><strong>Product Add</strong></td>
            <td>{viewProduct.productAdd}</td>
          </tr>
          <tr>
            <td><strong>Additional Info</strong></td>
            <td>{viewProduct.add}</td>
          </tr>
          <tr>
            <td><strong>Image</strong></td>
            <td>
              <img src={viewProduct.image} alt={viewProduct.name} className="product-image" />
            </td>
          </tr>
        </tbody>
      </table>

      <button type='button' className='buy-product-button'>Buy</button>
    </div>
  );
}

export default Products;