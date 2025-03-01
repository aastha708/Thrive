import './Contact.css'
import React from 'react';
import Swal from 'sweetalert2'


export default function Contact()
{
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "bb570256-17ba-446b-a53c-05e3b7fd48f4");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        } else {
            Swal.fire({
                title: "The Internet?",
                text: "That thing is still around?",
                icon: "question"
              });
        }
      };


    return(
        <section className="contact">
            <form onSubmit={onSubmit}>
                <h2>Contact Form</h2>
                <div className='input-box'>
                    <label>Full Name</label>
                    <input type="text" className='field' placeholder='Enter your name' name='name' required/>
                </div>
                <div className='input-box'>
                    <label>Email Address</label>
                    <input type="email" className='field' placeholder='Enter your email' name='email' required/>
                </div>
                <div className='input-box'>
                    <label>Your Message</label>
                    <textarea className='field mess' placeholder='Enter your message' name='message' required></textarea>
                </div>
                <button type='submit'>Send Message</button>
                
            </form>
        </section>

    )
    
}