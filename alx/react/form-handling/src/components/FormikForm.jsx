
/*
Formik is a popular React library for building forms with ease. It simplifies form state management, validation, and submission handling.

Advantages of Formik: - Easy form state management and validation - Built-in support for various validation libraries (e.g., Yup) - Well-documented and widely used
*/

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required')
});

const FormikForm = () => (
    <Formik
        initialValues={{ name: '', email: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
            console.log(values);
        }}
    >
        {() => (
            <Form>
                <Field type="text" name="name" />
                <ErrorMessage name="name" component="div" />
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                <button type="submit">Submit</button>
            </Form>
        )}
    </Formik>
);

export default FormikForm;