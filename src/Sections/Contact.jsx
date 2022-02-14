import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
    const [data, setData] = useState({
        subject: '',
        name: '',
        email: '',
        message: '',
    });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_pti1ir9',
                'template_2b8n4qt',
                e.target,
                'user_h3yP82CcUFoUeRlHzQYrM'
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <>
            <section id="contact" className="contact-form-container">
                <h1 className="section-title">Contact</h1>
                <form onSubmit={sendEmail}>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                    ></input>

                    <input
                        type="email"
                        placeholder="Email Address"
                        size="30"
                        required
                    ></input>

                    <textarea
                        id="subject"
                        name="subject"
                        placeholder="Message"
                        required
                    ></textarea>

                    <input type="submit" value="Send"></input>
                </form>
            </section>
        </>
    );
};

export default Contact;
