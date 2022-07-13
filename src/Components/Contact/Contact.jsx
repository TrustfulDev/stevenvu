import React from 'react';
import emailjs from 'emailjs-com';
import smile from '../../Assets/smile.jpg';
import './contact.css';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_9a1sxsr', 'portfolio_template', e.target, 'ncJtc-APNOsU2i8WZ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        
        e.target.reset();
    }

    return (
        <div className="contact-container" id="contact">
            <form className="contact-form-container" onSubmit={sendEmail}>
                <h1>Contact Me</h1>

                <input
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    required
                />

                <input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                />

                <textarea
                    id="message"
                    name="message"
                    placeholder="Something on your mind?"
                    rows='7'
                    required
                />

                <input className="submit-btn" type="submit" value="Send Message" />
            </form>

            <img src={smile} alt="Me smiling in airsoft gear" />
        </div>
    );
}

export default Contact;