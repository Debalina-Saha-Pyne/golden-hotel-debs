import React from 'react'
import './Register.css';
import { Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import axios from 'axios'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

let formValidate = (formvalue) => {

  const errors = {};

  let valideEmail = /^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$/

  let valideFName = /^[a-zA-Z].{3,40}$/;

  let valideLName = /^[a-zA-Z].{2,40}$/;

  let validePassword = /^(?=.*[a-zA-Z0-9!@#$%&]).{4,15}$/


  if (!formvalue.fname) {
    errors.fname = "Please Enter Your Full Name";
  }
  else if (!valideFName.test(formvalue.fname)) {
    errors.fname = " Incorrect Use Name Please Check It";
  }


  if (!formvalue.lname) {
    errors.lname = "Please Enter Your Full Name";
  }
  else if (!valideLName.test(formvalue.lname)) {
    errors.lname = " Incorrect Use Name Please Check It";
  }



  if (!formvalue.email) {
    errors.email = "Please Enter Your Valied Email Id";
  }
  else if (!valideEmail.test(formvalue.email)) {
    errors.email = "Invalied Email Id Please Check It";
  }


  if (!formvalue.password) {
    errors.password = "Please Enter Your Correct Password";
  }
  else if (!validePassword.test(formvalue.password)) {
    errors.password = "Invalied Password Please Check It";
  }
  console.log("Error:", errors);
  return errors;
}



const Register = () => {

  let navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      fname: '',
      lname: '',
      email: '',
      password: ''
    },

    validate: formValidate,
    onSubmit: (receivevalues) => {
      console.log("Received Values:", receivevalues);

      axios.post("https://nodeprojectapi.herokuapp.com/register", receivevalues)
        .then(res => {
          console.log("Data Submitted Succesfully", res);
           
        

          alert("Register Data Submitted Succesfully ")
          navigate('/login')
  
        })
        .catch(errors => {
          console.log("Error To Submit Data", errors)
        })

    }
  })

  return (
    <>

      <form action="action_page.php" onSubmit={formik.handleSubmit}>

      <div className="banner">
          <img src='../../../../p_photo/banner2.jpg' />
        </div>


        <div className="container">

          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <div className="custom-login">

          <label htmlFor="fname"><b>First Name</b></label>
          <input type="text" placeholder="Enter Your First Name" 
          name="fname" id="fname" required value={formik.values.fname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />
          {formik.touched.fname && formik.errors.fname ? (<span>{formik.errors.fname}</span>) : null}

          <label htmlFor="lname"><b>Last Name</b></label>
          <input type="text" placeholder="Enter Your Last Name"
           name="lname" id="lname" required value={formik.values.lname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />
          {formik.touched.lname && formik.errors.lname ? (<span>{formik.errors.lname}</span>) : null}

          <label htmlFor="email"><b>Email</b></label>
          <input type="text" placeholder="Enter Email"
           name="email" id="email" required value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />
          {formik.touched.email && formik.errors.email ? (<span>{formik.errors.email}</span>) : null}


          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password"
           name="password" id="psw" required value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />
          {formik.touched.password && formik.errors.password ? (<span>{formik.errors.password}</span>) : null}
          <hr />

          
          <label htmlFor="psw-repeat"><b>Repeat Password</b></label>
          <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />


          <p>By creating an account you agree to our <a href="#" className='aa'>Terms & Privacy</a>.</p>

          <Button type="submit" className="registerbtn"
           disabled={!(formik.isValid && formik.dirty)}> <Link to={`/login`}></Link>Register</Button>
        </div>

        </div>
     
        <div className="container signin">
          <p>Already have an account? <Link to={`/login`}>Login</Link></p>
        </div>

      </form>


    </>
  )
}

export default Register