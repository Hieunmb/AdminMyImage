import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import api from '../../services/api';
import url from '../../services/url';
function Login(){
    const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
});
const [formErrors, setFormErrors] = useState({
  email: "",
  password: "",
});
const handleTogglePassword = () => {
  setShowPassword(!showPassword);
};
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
  setFormErrors({ ...formErrors, [name]: "" });
};
const validateForm = () => {
  let valid = true;
  const newErrors = {};

  if (!formData.email) {
      newErrors.email = "Please enter your email address.";
      valid = false;
  }

  if (!formData.password) {
      newErrors.password = "Please enter your password.";
      valid = false;
  } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      valid = false;
  } else if (formData.password.length > 50) {
      newErrors.password = "Password must be less than 50 characters.";
      valid = false;
  }

  setFormErrors(newErrors);
  return valid;
};
const handleSubmit = async (e) => {
  e.preventDefault();
  if (validateForm()) {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const loginResponse = await api.post(url.USER.LOGIN, formData,config);
        const token = loginResponse.data.token;
        localStorage.setItem("accessToken", token);
        navigate("/");
    } catch (error) {
      setFormErrors({
        email: "Invalid email or password.",
        password: "Invalid email or password.",
      });
    }
  }
};
    return(
        <section id="wrapper">
        <div class="login-register" style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            height: '100%',
            width: '100%',
            padding: '10% 0',
            position: 'fixed',
            backgroundImage: 'url(../assets/images/background/login-register.jpg)' }}>
            <div class="login-box card" style={{marginLeft:"580px",display:'inline-block'}}>
                <div class="card-body" style={{width:"400px",height:"455px", textAlign:"center"}}>
                    <form class="form-horizontal form-material" id="loginform" method='POST' onSubmit={handleSubmit}>
                        <h3 class="text-center m-b-20">Sign In</h3>
                        <div class="form-group ">
                            <div class="col-xs-12">
                                <input class="form-control" type="email"
                        name="email"
                        id="email"
                        onChange={handleChange} required="" placeholder="Username"/> </div>
                        </div>
                        {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                        <div class="form-group">
                            <div class="col-xs-12">
                                <input class="form-control" type="password"
                                name="password"
                                id="password"
                                onChange={handleChange} required="" placeholder="Password"/> </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-12">
                                <div class="d-flex no-block align-items-center">
                                    <div class="form-check">
                                        <input type="checkbox" class="form-check-input" id="customCheck1"/>
                                        <label class="form-check-label" for="customCheck1">Remember me</label>
                                    </div> 
                                    <div class="ms-auto">
                                        <a href="#" id="to-recover" class="text-muted"><i class="fas fa-lock m-r-5"></i> Forgot pwd?</a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group text-center">
                            <div class="col-xs-12 p-b-20">
                                <button class="btn w-100 btn-lg btn-info btn-rounded text-white" type="submit">Log In</button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
                                <div class="social">
                                    <button class="btn  btn-facebook" data-bs-toggle="tooltip" title="Login with Facebook"> <i aria-hidden="true" class="fab fa-facebook-f"></i> </button>
                                    <button class="btn btn-googleplus" data-bs-toggle="tooltip" title="Login with Google"> <i aria-hidden="true" class="fab fa-google-plus-g"></i> </button>
                                </div>
                            </div>
                        </div>
                        <div class="form-group m-b-0">
                            <div class="col-sm-12 text-center">
                                Don't have an account? <a href="pages-register.html" class="text-info m-l-5"><b>Sign Up</b></a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Login;