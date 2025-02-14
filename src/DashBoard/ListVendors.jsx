import React from 'react'
import { vendorShop } from '../components/Vendors'
import { IoIosSearch } from "react-icons/io";
function ListVendors() {
  return (
    <div  className='products-content'>
       
         <div className="top">
         <div className='listVendors-box'><input type="text"placeholder='search' className='listVendors-input'/> <IoIosSearch className='listVendor-search'/> </div>
            <h3>List of Vendors</h3>
         
         </div>
         <div className='add-vendor'>
             <p >Add a Vendor</p>
         </div>
  <div className="table-container">
      <table>
      <thead className='table-tittle'>
        <tr>
        <th>ID</th>
        <th>STORE</th>
        <th>ADDRESS</th>
        <th>PHONE</th>
        <th>ADDRESS</th>
      
        <th>ACTION</th>
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
                               
                                <td> {vendor.icons}</td>
      
                            </tr>
                        ))}
                    </tbody>
      </table>
  </div>

    </div>
  )
}

export default ListVendors