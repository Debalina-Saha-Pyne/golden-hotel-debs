import React from 'react'
import './Login.css';
import { useFormik } from 'formik';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";



let formValidate = (formvalue) => {

    const errors = {};

    let valideEmail = /^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,20})$/

    let validePassword = /^(?=.*[a-zA-Z0-9!@#$%&]).{4,15}$/


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


const Login  = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            checkbox: ''
        },

        validate: formValidate,
        onSubmit: (receivevalues) => {
            console.log("Received Values:", receivevalues);

            let uservalue={email:receivevalues.email,password:receivevalues.password}
            
        axios.post("https://nodeprojectapi.herokuapp.com/login",uservalue)
            .then(res=>{
                console.log("Data Submitted Succesfully",res.data);
                window.sessionStorage.setItem("TokenValue",res.data.data.token)
                alert("Data Submitted Succesfully ")

        
            })
            .catch(errors=>{
                console.log("Error To Submit Data",errors)
            })
    
        }
    })


  return (

    <>
        
   <form action="action_page.php" method="post" onSubmit={formik.handleSubmit}>

   <div className="login-banner">
      <img src='../../../../p_photo/page-banner.jpg'/>
  </div>
  
  <div className="container">

  <h1>Login</h1>
  <p>Please fill in this form to create an account.</p>
          <hr />

          <div className="custom-login">

    <label htmlFor="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Your Email Id" 
    name="email" required  value={formik.values.email}
     onChange={formik.handleChange}/>

    <label htmlFor="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password"
     name="password" required  value={formik.values.password}
      onChange={formik.handleChange}/>

    <button type="submit">Login</button>

    {/* <label>
      <input type="checkbox" checked="checked"
       name="remember"/> Remember me
    </label> */}

  </div>

  <div className="container">
    <Button type="button" className="cancelbtn">Cancel</Button>
    <span className="psw">Forgot <a href="#">password?</a></span>
  </div>
  
 </div>

</form>     
        
        </>
  )
}

export default Login