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
      const loginResponse = await api.post(url.ADMIN.LOGIN, formData,config);
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
        <div className="login-register" style={{
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            height: '100%',
            width: '100%',
            padding: '10% 0',
            position: 'fixed',
            backgroundImage: 'url(../assets/images/background/login-register.jpg)' }}>
            <div className="login-box card" style={{marginLeft:"580px",display:'inline-block'}}>
                <div className="card-body" style={{width:"400px",height:"455px", textAlign:"center"}}>
                    <form className="form-horizontal form-material" id="loginform" method='POST' onSubmit={handleSubmit}>
                        <h3 className="text-center m-b-20">Sign In</h3>
                        <div className="form-group ">
                            <div className="col-xs-12">
                                <input className="form-control" type="email"
                        name="email"
                        id="email"
                        onChange={handleChange} required="" placeholder="Email"/> </div>
                        </div>
                        {formErrors.email && <div classNameName="invalid-feedback">{formErrors.email}</div>}
                        <div className="form-group">
                            <div className="col-xs-12">
                                <input className="form-control" type="password"
                                name="password"
                                id="password"
                                onChange={handleChange} required="" placeholder="Password"/> </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                                <div className="d-flex no-block align-items-center">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input" id="customCheck1"/>
                                        <label className="form-check-label" for="customCheck1">Remember me</label>
                                    </div> 
                                    <div className="ms-auto">
                                        <a href="#" id="to-recover" className="text-muted"><i className="fas fa-lock m-r-5"></i> Forgot pwd?</a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group text-center">
                            <div className="col-xs-12 p-b-20">
                                <button className="btn w-100 btn-lg btn-info btn-rounded text-white" type="submit">Log In</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
                                <div className="social">
                                    <button className="btn  btn-facebook" data-bs-toggle="tooltip" title="Login with Facebook"> <i aria-hidden="true" className="fab fa-facebook-f"></i> </button>
                                    <button className="btn btn-googleplus" data-bs-toggle="tooltip" title="Login with Google"> <i aria-hidden="true" className="fab fa-google-plus-g"></i> </button>
                                </div>
                            </div>
                        </div>
                        <div className="form-group m-b-0">
                            <div className="col-sm-12 text-center">
                                Don't have an account? <a href="pages-register.html" className="text-info m-l-5"><b>Sign Up</b></a>
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