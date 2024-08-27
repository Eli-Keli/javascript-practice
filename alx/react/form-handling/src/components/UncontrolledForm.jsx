
/*
Uncontrolled components maintain their own state within the DOM, using refs to access form values. This approach is more similar to traditional HTML form handling, but it may be less flexible for complex state and validation management.
*/

/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'

const UncontrolledForm = () => {
    const nameRef = useRef();
    const emailRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', nameRef.current.value);
        console.log('Email:', emailRef.current.value);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" ref={nameRef} />
            <input type="email" name="email" ref={emailRef} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default UncontrolledForm