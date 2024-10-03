import React from "react";
import { Field, ErrorMessage } from "formik";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Switch } from "@mui/material";
import "./CustomDropdownWithSwitch.css";
import CircularProgress from "@mui/material/CircularProgress"; // MUI spinner

const CustomDropdownWithSwitch = ({ name, options, formikValues, isOpen, publishId, toggleDropdown, onSwitchChange, loading }) => {
  return (
    <div className="dropdown-wrapper-Switch">
      <button
        type="button"
        className="Switch-dropdown-toggle"
        onClick={toggleDropdown}
      >
        Select student
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      <div className={`dropdown-list ${isOpen ? "open" : ""}`}>
        {/* Display the loading spinner if data is being fetched */}
        {loading ? (
          <div className="spinner-container">
            <CircularProgress size={24} /> {/* Spinner from MUI */}
          </div>
        ) : (
          <Field name={name}>
            {({ field, form }) => (
              <div>
                {formikValues.map((option) => (
                  <div key={option.value} className="dropdown-item">
                    <span className="dropdown-item-label">{option.label}</span>

                    <Switch
                      checked={option.access_granted}
                      onChange={(event) => {
                        const newValue = event.target.checked;
                        const updatedOptions = formikValues.map((opt) =>
                          opt.value === option.value
                            ? { ...opt, access_granted: newValue }
                            : opt
                        );
                        form.setFieldValue(name, updatedOptions);
                        console.log(option.value, "option.value");

                        // Call parent handler to update state
                        onSwitchChange(option.value, newValue);
                      }}
                       size="small"
                      color="default" // You can set default to avoid the default color
                      sx={{
                        '& .MuiSwitch-switchBase.Mui-checked': {
                          color: 'green',
                        },
                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                          backgroundColor: 'green',
                        },
                        '& .MuiSwitch-switchBase': {
                          color: 'red',
                        },
                        '& .MuiSwitch-track': {
                          backgroundColor: 'red',
                        },
                        // transform: 'scale(0.8)', // Reduces the overall size
                        // '& .MuiSwitch-thumb': {
                        //   width: 20, // Thumb size
                        //   height: 20,
                        // },
                        // '& .MuiSwitch-track': {
                        //   width: 26, // Track width
                        //   height: 14, // Track height
                        // },
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </Field>
        )}
      </div>
      <ErrorMessage name={name} component="div" className="inputs-error-msg" />
    </div>
  );
};

export default CustomDropdownWithSwitch;
