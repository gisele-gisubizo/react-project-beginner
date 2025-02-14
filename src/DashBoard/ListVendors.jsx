import React from 'react'
import { vendorShop } from '../components/Vendors'
function ListVendors() {
  return (
    <div  className='products-content'>
         <div className="top"><h3>List of Products</h3></div>
  <div className="table-container">
      <table>
      <thead className='table-tittle'>
        <tr>
        <th>Vendor id</th>
        <th>Vendor store name</th>
        <th>Address</th>
        <th>Phone Number</th>
        <th>country</th>
        <th>rates</th>
        </tr>
      </thead>
      
      <tbody>
                        {vendorShop.map((vendor, index) =>(
                            <tr key={index}>
                                <td>{vendor.id}</td>
                                <td> {vendor.store}</td>
                                <td> {vendor.address}</td>
                                <td> {vendor.Phone}</td>
                                <td> {vendor.country}</td>
                                <td> {vendor.rates}</td>
      
                            </tr>
                        ))}
                    </tbody>
      </table>
  </div>

    </div>
  )
}

export default ListVendors