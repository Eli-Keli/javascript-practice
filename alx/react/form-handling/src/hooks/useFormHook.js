
/*
Custom form hooks can abstract form logic and validation, making forms easier to manage and reuse. By creating reusable hooks, you can simplify form handling across your application.
*/

import { useState } from 'react';

const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValues => ({ ...prevValues, [name]: value }));
    };

    const resetForm = () => setValues(initialValues);

    return {
        values,
        handleChange,
        resetForm
    };
};

export default useForm;