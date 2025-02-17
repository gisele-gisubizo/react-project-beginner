import React from 'react'
import { customers } from '../components/Shop'
import { IoIosSearch } from "react-icons/io";

 

function Contacts(){

return(

<div className='products-content'>
         
         <div className="top">
         <div className='listVendors-box'><input type="text"placeholder='search' className='listVendors-input'/> <IoIosSearch className='listVendor-search'/> </div>
            <h3>List of Customers</h3>
         
         </div>

       
  <div className="table-container">
      <table>
      <thead className='table-tittle'>
        <tr>
        <th>ID</th>
        <th>Names</th>
        <th>Order</th>
        <th>Contact</th>
        <th>Address</th>
      
        
        </tr>
      </thead>
      
      <tbody>
                        {customers.map((customer, index) =>(
                            <tr key={index}>
                                <td>{customer.id}</td>
                                <td> {customer.names}</td>
                                <td> {customer.order}</td>
                                <td> {customer.contact}</td>
                                <td> {customer.address}</td>
                               
      
                            </tr>
                        ))}
                    </tbody>
      </table>
  </div>

    </div>
)
}

export default Contacts
