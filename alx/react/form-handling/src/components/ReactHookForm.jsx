
/*
React Hook Form is another powerful library for managing forms in React. It leverages hooks to provide a simpler and more performant form handling solution.

Advantages of React Hook Form: - Performance optimization by reducing re-renders - Minimal API for ease of use - Integrates well with React’s functional components
*/

import { useForm } from 'react-hook-form';

const ReactHookForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('name', { required: 'Name is required' })} />
            {errors.name && <span>{errors.name.message}</span>}
            <input type="email" {...register('email', { required: 'Email is required' })} />
            {errors.email && <span>{errors.email.message}</span>}
            <button type="submit">Submit</button>
        </form>
    );
};

export default ReactHookForm;