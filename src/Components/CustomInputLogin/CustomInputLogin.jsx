import React, { useState } from "react";
import "./CustomInputLogin.css";
// import "../ComponentsCss/componet.css";
import { Field, ErrorMessage } from "formik";
import { colors } from "@mui/material";

const CustomInputLogin = ({ label, name,custPlaceholder,inputType, ...rest }) => {
  const validateInput = (value) => {
    let error;
    if (!value) {
      error =` Field is ${inputType === "text" ? "Required" : "Required"}`;
    } else if (inputType === "number" && isNaN(value)) {
      error = "Field is Required";
    
    }
    return error;
  };
  return (
    <div style={{ width: "95%" }}>
      <div style={{ width: "100%" }}>
        <div>
          <label
            htmlFor={name}
            className="input-heading12"
            style={{ fontSize: "16px", fontWeight: "700" }}
          >
            {label}
          </label>
        </div>
        <Field
          id={name}
          name={name}
          type={inputType}
          placeholder={`${custPlaceholder?custPlaceholder:"Enter Input"}`}
          // autoComplete="off" // Disable autofill 
          {...rest}
          className='custominput-field12'
        
          // validate={validateInput}
         
        />
        <ErrorMessage name={name} component="div" className="inputs-error-msg" style={{color:"red"}} />
      </div>
    </div>
  );
};

export default CustomInputLogin;
