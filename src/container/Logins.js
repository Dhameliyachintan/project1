import React, { useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Logins(props) {
    const [userType, setUserType] = useState('Login')
    // const [reset, setReset] = useState(false)


    let schema = yup.object().shape({
        name: yup.string().required('enter email').email('enter valid email'),
        email: yup.string().required('please enter email'),
        phone: yup.string().required('please enter date'),
        date: yup.string().required('please enter date'),
        message: yup.string().required('please enter message'),
    })



    const formik = useFormik({
        initialValues: {
            email: '',
            phone: '',
            password: '',
            date: '',
            message: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <section id="appointment" className="appointment d-flex" >
            <div className="container">
                <div className='section-title'>
                </div>
                <Formik value={formik}>
                    <Form onSubmit={formik.handleSubmit} action method='post' role='form' className='php-email-form'>
                        <div className='row align-items-center justify-content-center'>
                            {
                                <div className="col-md-7 form-group">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        id="name"
                                        placeholder="Your Name"
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                        onBlur={formik.handleBlur}

                                    />

                                    {
                                        formik.errors.name && formik.touched.name ? <p>{formik.errors.name}</p> : ''
                                    }

                                    <div className="validate" />
                                </div>
                            }
                            <div className="col-md-7 form-group mt-3 mt-md-0">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                    onBlur={formik.handleBlur}
                                />
                                {
                                    formik.errors.email && formik.touched.email ? <p>{formik.errors.email}</p> : ''
                                }

                                <div className="validate" />
                            </div>
                            {
                                <div className="col-md-7 form-group mt-3 mt-md-0">
                                    <input
                                        type="phone"
                                        className="form-control"
                                        name="phone"
                                        id="phone"
                                        placeholder="Your phone"
                                        onChange={formik.handleChange}
                                        value={formik.values.phone}
                                        onBlur={formik.handleBlur}
                                    />
                                    {
                                        formik.errors.phone && formik.touched.phone ? <p>{formik.errors.phone}</p> : ''
                                    }

                                    <div className="validate" />
                                </div>
                            }
                            {
                                <div className="col-md-7 form-group mt-3 mt-md-0">
                                    <input
                                        type="data"
                                        className="form-control"
                                        name="data"
                                        id="data"
                                        placeholder="Your data"
                                        onChange={formik.handleChange}
                                        value={formik.values.data}
                                        onBlur={formik.handleBlur}
                                    />
                                    {
                                        formik.errors.data && formik.touched.data ? <p>{formik.errors.data}</p> : ''
                                    }

                                    <div className="validate" />
                                </div>
                            }
                            {
                                <div className="col-md-7 form-group mt-3 mt-md-0">
                                    <input
                                        type="message"
                                        className="form-control"
                                        name="message"
                                        id="message"
                                        placeholder="Your message"
                                        onChange={formik.handleChange}
                                        value={formik.values.message}
                                        onBlur={formik.handleBlur}
                                    />
                                    {
                                        formik.errors.message && formik.touched.message ? <p>{formik.errors.message}</p> : ''
                                    }

                                    <div className="validate" />
                                </div>
                            }
                            <div class="mb-3">
                                <div class="error-message"></div>
                            </div>
                            <div class="text-center"><button type="submit">Make an Appointment</button></div>
                        </div>
                    </Form>
                </Formik>
                <div>
                </div>
            </div>
        </section >
    );
}

export default Logins;