
import React, { useState } from "react";
import axios from "axios";

const RegisterForm = (props) => {
  
    const [confirmReg, setConfirmReg] = useState("");
    const [errors, setErrors] = useState({});
  
    // saving form inputs
    const [user, setUser] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  
    const handleChange = (e) => {
      setUser({
        ...user,
        [e.target.name]: e.target.value,
      });
    };
  
    const register = (e) => {
      e.preventDefault();
  
      axios
        .post("http://localhost:8000/api/users/register", user, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          setUser({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
          setConfirmReg("Thank you for Registering, Proceed to Login!");
          setErrors({});
        })
        .catch((err) => {
          console.log(err);
          setErrors(err.response.data.errors);
        });
    };

 
  

  return (
    <div>
        <div>
            
        </div>
    </div>
  );
};

export default RegisterForm;