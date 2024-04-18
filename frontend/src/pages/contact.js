import axios from 'axios';
import { Formik, Field, Form } from 'formik';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {
    Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';



const Contact = () => {

    const [data, setData] = useState([])
    const [initialValues, setInititalValues] = useState({
        fname: "",
        lname: "",
        mobile: ""
    })

    // console.log(initialValues);

    const getData = () => {
        axios.get("http://localhost:3000/contact/show")
            .then((res) => {
                console.log(res.data.data);
                setData(res.data.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        getData()
    }, [])

    const deleteHandler = (_id) => {
        // console.log("id=====",_id._id,typeof _id._id);
        // let test=Number(_id._id);
        // console.log(test, typeof test)
        axios.delete("http://localhost:3000/contact/delete/" + _id)
            .then((res) => {
                console.log(res, data);
                getData()

            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <div>
                <Navbar bg="dark" data-bs-theme="dark" className='justify'>
                    <Container className='container'>
                        <Nav.Link href="#signup" className='nav' as={Link} to="/">Signup</Nav.Link>
                        <Nav.Link href="#contact" className='nav' as={Link} to="/contact">Contact</Nav.Link>
                    </Container>
                </Navbar>
                <br />
                <br />

                <Formik
                    initialValues={initialValues}
                    enableReinitialize
                    onSubmit={async (values) => {

                        if (values._id) {
                            axios.patch("http://localhost:3000/contact/update/" + values._id, values)
                                .then((res) => {
                                    console.log(res);
                                    getData()
                                })
                                .catch((err) => {
                                    console.log(err);
                                })
                        } else {
                            axios.post("http://localhost:3000/contact/add", values)
                                .then((res) => {
                                    console.log(res.data);
                                    getData()
                                })
                                .catch((err) => {
                                    console.log(err);
                                })
                        }
                        setInititalValues({
                            fname: "",
                            lname: "",
                            mobile: ""
                        })
                    }}
                >

                    <div className='form'>
                        <Form>
                            <label htmlFor="fname" className='form2'>First Name</label>
                            <br />
                            <Field id="fname" name="fname" type="string" className='form3' />
                            <br />

                            <label htmlFor="lname" className='form2'>Last Name</label>
                            <br />
                            <Field id="lname" name="lname" type="string" className='form3' />
                            <br />


                            <label htmlFor="mobile" className='form2'>Mobile No</label>
                            <br />
                            <Field id="mobile" name="mobile" type="number" className='form3' />
                            <br />
                            <br />
                            <br />

                            <button type="submit" className='btn'>Submit</button>
                        </Form>
                    </div>

                </Formik>
                <table border={2}>
                    <tr>
                        <th>No.</th>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>mobileNo</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                    {
                        data.map((el, i) => {
                            return <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{el.fname}</td>
                                <td>{el.lname}</td>
                                <td>{el.mobile}</td>
                                <td><button onClick={() => deleteHandler(el._id)}>Delete</button></td>
                                <td><button onClick={() => setInititalValues(el)}>Edit</button></td>
                            </tr>
                        })
                    }
                </table>

                <br />
                <br />
                <br />


            </div>
        </>

    )
}

export default Contact;