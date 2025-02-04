import React from "react"
import '../styles/contact.css'
import '@fontsource/poppins'
import '@fontsource/montserrat'
import '@fontsource/open-sans'



function Contact(){

    return(

        <div className="contact-container">
        <div className="contact-form">
          <h1>Leave Us a Message</h1>
          <form>
            {/* Name Section */}
            <div className="form-group name-group">
              <label>
                Name <span className="required">*</span>
              </label>
              <div className="name-inputs">
                <input type="text" placeholder="First" />
                <input type="text" placeholder="Last" />
              </div>
            </div>
  
            {/* Email Section */}
            <div className="form-group">
              <label>
                Email <span className="required">*</span>
              </label>
              <input type="email"  />
            </div>
  
            {/* Message Section */}
            <div className="form-group">
              <label>Comment or Message</label>
              <textarea ></textarea>
            </div>
  
            <button type="submit">Submit</button>
          </form>
        </div>
  
        {/* Store Information */}
        <div className="store-info">
          <h2>Our Store</h2>
          <p>501-521 Fashion Ave, New York, NY 10018, USA</p>
          <p>PHONE: +1 212 244 2681</p>
          <p>E-MAIL: office@example.org</p>
  
          <h2>Store Hours</h2>
          <p>Sun: Closed</p>
          <p>Mon to Sat: 10 AM – 5:30 PM</p>
        </div>
      </div>
    );
  }
  
    

export default Contact;