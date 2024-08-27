
/*
Controlled components in React are those where form data is managed by the component’s state. This approach provides full control over form data, making it easier to implement validation, conditional rendering, and other dynamic behaviors.
*/

/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const ControlledForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default ControlledForm