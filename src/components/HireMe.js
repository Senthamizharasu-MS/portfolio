import React from 'react';

const HireMe = () => {
    return (
        <div>
            <h1>Hire Me</h1>
            <p>I am a skilled developer with experience in React JS and other technologies. I am available for freelance work and would love to help you with your project. Please fill out the form below to get in touch with me.</p>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <br />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HireMe;
