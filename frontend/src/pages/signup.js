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



const Signup = () => {

  const [data, setData] = useState([])
  const [initialValues, setInititalValues] = useState({
    "name": "",
    "email": "",
    "password": ""
  })

  console.log(initialValues);

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

              axios.post("http://localhost:3000/user/add", values)
                .then((res) => {
                  console.log(res);
                  // getData()
                })
                .catch((err) => {
                  console.log(err);
                })
            
            setInititalValues({
              "name": "",
              "email": "",
              "password": ""
            })
          }}
        >

          <div className='form'>
            <Form>
              <label htmlFor="name" className='form2'>Name</label>
              <br />
              <Field id="name" name="name" type="string" className='form3' placeholder="Jane" />
              <br />
              <br />
              <br />

              <label htmlFor="email" className='form2'>Email</label>
              <br />
              <Field id="email" name="email" type="email" className='form3' placeholder="jane@acme.com" />
              <br />
              <br />
              <br />

              <label htmlFor="password" className='form2'>password</label>
              <br />
              <Field id="password" name="password" type="password" className='form3' />
              <br />
              <br />
              <br />

              <button type="submit" className='btn'>Submit</button>
            </Form>
          </div>

        </Formik>

        <br />
        <br />
        <br />


      </div>
    </>

  )
}

export default Signup;