/* eslint-disable no-unused-vars */
import React from 'react'
import useForm from '../hooks/useFormHook';

const CustomHookForm = () => {
    const { values, handleChange, resetForm } = useForm({ name: '', email: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        resetForm();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default CustomHookForm