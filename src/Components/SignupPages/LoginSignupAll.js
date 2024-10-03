
// import React, { useState } from 'react';
// import { Button, TextField, Box } from '@mui/material';
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import CustomInputLogin from '../CustomInputLogin/CustomInputLogin';
// import bg_image from "../Assets/bg_image.jpg"

// function LoginSignupAll() {
//   const [isAdmin, setIsAdmin] = useState(true);
//   const [isLogin, setIsLogin] = useState(true);

//   const handleAdminClick = () => {
//     setIsAdmin(true);
//     setIsLogin(true); // Reset to login form when switching
//   };

//   const handleUserClick = () => {
//     setIsAdmin(false);
//     setIsLogin(true); // Reset to login form when switching
//   };

//   const handleToggleForm = () => {
//     setIsLogin(!isLogin); // Toggle between Login and Signup form
//   };

//   return (
//     <div className="App"

//     style={{
//         backgroundImage: `url(${bg_image})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center'
//     }}>
//       <Box display="flex" justifyContent="center" mb={3}>
//         <Button variant={isAdmin ? "contained" : "outlined"} onClick={handleAdminClick}>
//           Admin
//         </Button>
//         <Button variant={!isAdmin ? "contained" : "outlined"} onClick={handleUserClick}>
//           User
//         </Button>
//       </Box>

//       {isAdmin ? (
//         isLogin ? <AdminLogin onToggleForm={handleToggleForm} /> : <AdminSignup onToggleForm={handleToggleForm} />
//       ) : (
//         isLogin ? <UserLogin onToggleForm={handleToggleForm} /> : <UserSignup onToggleForm={handleToggleForm} />
//       )}
//     </div>
//   );
// }

// // Admin Login Form
// const AdminLogin = ({ onToggleForm }) => {
//   return (
//     <Formik
//       initialValues={{ username: '', password: '' }}
//       validationSchema={Yup.object({
//         username: Yup.string().required('Required'),
//         password: Yup.string().required('Required'),
//       })}
//       onSubmit={(values,{resetForm}) => {
//         console.log('Admin Login Values:', values);
//         resetForm()
//       }}
//     >
//       {({ errors, touched, handleChange, setFieldValue }) => (
//         <Form>
//           <Box sx={{ maxWidth: 300, mx: 'auto' }}>
//             <h2 style={{textAlign:"center"}}>Admin Login</h2>
//             <CustomInputLogin
//               name="username"
//               label="User Name"
//               custPlaceholder="Enter user name"
//               inputType="text"

//             />

//             <CustomInputLogin
//               name="password"
//               label="Password"
//               custPlaceholder="Enter password"
//               inputType="password"

//             />
//             <Button fullWidth variant="contained" type="submit">
//               Login
//             </Button>
//             <p style={{textAlign:"center"}}>
//               Not registered?{' '}
//               <a href="#signup" onClick={onToggleForm}>
//                 Signup here
//               </a>
//             </p>
//           </Box>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// // Admin Signup Form
// const AdminSignup = ({ onToggleForm }) => {
//   return (
//     <Formik
//       initialValues={{ username: '', email: '', password: '' }}
//       validationSchema={Yup.object({
//         username: Yup.string().required('Required'),
//         email: Yup.string().email('Invalid email').required('Required'),
//         password: Yup.string().required('Required'),
//       })}
//       onSubmit={(values,{resetForm}) => {
//         console.log('Admin Signup Values:', values);
//         resetForm()
//       }}
//     >
//       {({ errors, touched, handleChange, setFieldValue }) => (
//         <Form>
//           <Box sx={{ maxWidth: 300, mx: 'auto' }}>
//             <h2 style={{textAlign:"center"}}>Admin Signup</h2>

//             <CustomInputLogin
//               name="username"
//               label="User Name"
//               custPlaceholder="Enter user name"
//               inputType="text"

//             />
//             <CustomInputLogin
//               name="email"
//               label="email"
//               custPlaceholder="Enter email"
//               inputType="email"

//             />

//             <CustomInputLogin
//               name="password"
//               label="Password"
//               custPlaceholder="Enter Password"
//               inputType="password"

//             />
//             <Button fullWidth variant="contained" type="submit">
//               Signup
//             </Button>
//             <p style={{textAlign:"center"}}>
//               Already have an account?{' '}
//               <a href="#login" onClick={onToggleForm}>
//                 Login here
//               </a>
//             </p>
//           </Box>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// // User Login Form
// const UserLogin = ({ onToggleForm }) => {
//   return (
//     <Formik
//       initialValues={{ email: '', password: '' }}
//       validationSchema={Yup.object({
//         email: Yup.string().email('Invalid email').required('Required'),
//         password: Yup.string().required('Required'),
//       })}
//       onSubmit={(values,{resetForm}) => {
//         console.log('User Login Values:', values);
//         resetForm()
//       }}
//     >
//       {({ errors, touched, handleChange, setFieldValue }) => (
//         <Form>
//           <Box sx={{ maxWidth: 300, mx: 'auto' }}>
//             <h2 style={{textAlign:"center"}}>User Login</h2>

//             <CustomInputLogin
//               name="email"
//               label="email"
//               custPlaceholder="Enter email"
//               inputType="email"

//             />

//             <CustomInputLogin
//               name="password"
//               label="Password"
//               custPlaceholder="Enter password"
//               inputType="password"

//             />
//             <Button fullWidth variant="contained" type="submit">
//               Login
//             </Button>
//             <p style={{textAlign:"center"}}>
//               Not registered?{' '}
//               <a href="#signup" onClick={onToggleForm}>
//                 Signup here
//               </a>
//             </p>
//           </Box>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// // User Signup Form
// const UserSignup = ({ onToggleForm }) => {
//   return (
//     <Formik
//       initialValues={{ email: '', password: '' }}
//       validationSchema={Yup.object({
//         email: Yup.string().email('Invalid email').required('Required'),
//         password: Yup.string().required('Required'),
//       })}
//       onSubmit={(values,{resetForm}) => {
//         console.log('User Signup Values:', values);
//         resetForm()
//       }}
//     >
//       {({ errors, touched, handleChange, setFieldValue }) => (
//         <Form>
//           <Box sx={{ maxWidth: 300, mx: 'auto' }}>
//             <h2 style={{textAlign:"center"}}>User Signup</h2>
//             <CustomInputLogin
//               name="email"
//               label="email"
//               custPlaceholder="Enter email"
//               inputType="email"

//             />
//             <CustomInputLogin
//               name="password"
//               label="Password"
//               custPlaceholder="Enter password"
//               inputType="password"

//             />
//             <Button fullWidth variant="contained" type="submit">
//               Signup
//             </Button>
//             <p style={{textAlign:"center"}}>
//               Already have an account?{' '}
//               <a href="#login" onClick={onToggleForm}>
//                 Login here
//               </a>
//             </p>
//           </Box>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default LoginSignupAll;




import React, { useEffect, useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import CustomInputLogin from '../CustomInputLogin/CustomInputLogin';
import bg_image from "../../Assets/bg_image.jpg"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import actions from "../../ReduxStore/actions/index";
import { setInitialStateOfStudentLoginPost } from '../../ReduxStore/Slices/SignUpLoginAll/StudentLoginPost'
import { setInitialStateOfAdminLoginPost } from '../../ReduxStore/Slices/SignUpLoginAll/AdminLoginPost';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify"
import { setInitialStateOfAdminSignUpPost } from '../../ReduxStore/Slices/SignUpLoginAll/AdminSignUpPost';
import { setInitialStateOfStudentSignUpPost } from '../../ReduxStore/Slices/SignUpLoginAll/StudentSignUpPost';










function LoginSignupAll() {
  const [isAdmin, setIsAdmin] = useState(true);
  const [isLogin, setIsLogin] = useState(true);

  const dispatch = useDispatch();
  const { QuestionWithAnsPost } = useSelector((state) => state?.QuestionWithAnsPost);


  const handleAdminClick = () => {
    setIsAdmin(true);
    setIsLogin(true); // Reset to login form when switching
  };

  const handleUserClick = () => {
    setIsAdmin(false);
    setIsLogin(true); // Reset to login form when switching
  };

  const handleToggleForm = () => {
    setIsLogin(!isLogin); // Toggle between Login and Signup form
  };
  const navigate = useNavigate();

  // Handle button clicks to navigate to admin or user page
  const goToAdminPage = () => navigate('/admin');
  const goToUserPage = () => navigate('/user');

  return (
    <div className="App"
      style={{
        backgroundImage: `url(${bg_image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
      }}>

      {/* Buttons in the top-right corner */}
      <Box
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          display: 'flex',
          gap: 2,
        }}>
        <Button variant={isAdmin ? "contained" : "outlined"} onClick={handleAdminClick}>
          Staff
        </Button>
        <Button variant={!isAdmin ? "contained" : "outlined"} onClick={handleUserClick}>
          Student
        </Button>
      </Box>

      {/* Form box */}
      <Box
       
        sx={{
          width: '40%',
          //   maxWidth: 400,

          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
          border: '1px solid #ccc', // Custom border
          minHeight: "60vh",
          maxHeight: "100%"



        }}>

        {isAdmin ? (
          isLogin ? <AdminLogin onToggleForm={handleToggleForm} /> : <AdminSignup onToggleForm={handleToggleForm} />
        ) : (
          isLogin ? <UserLogin onToggleForm={handleToggleForm} /> : <UserSignup onToggleForm={handleToggleForm} />
        )}

      </Box>
    </div>
  );
}


const AdminLogin = ({ onToggleForm }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { AdminLoginPost } = useSelector((state) => state?.AdminLoginPost);
  console.log(AdminLoginPost?.message, "messssageeeeeeeeeee")

  useEffect(() => {
    if (AdminLoginPost?.message === "Login successful") {
      sessionStorage.setItem('sessionStaffId', AdminLoginPost?.data.staff.staff_id);
      sessionStorage.setItem('sessionStaffName', AdminLoginPost?.data.staff.staff_name);
      toast.success("Login Successfully")
      // console.log( AdminLoginPost?.data.staff.staff_id,"sesstion")
      dispatch(setInitialStateOfAdminLoginPost());
      setTimeout(() => navigate('/admin'), 1500)
      // navigate('/admin');
    }
    else if (AdminLoginPost?.message === "staff not found!") {
      toast.error("staff not found!")
      dispatch(setInitialStateOfAdminLoginPost());

    }
  }, [AdminLoginPost, navigate, dispatch]);

  const AdminLoginSubmit = (values, { resetForm }) => {
    console.log("Admin Login Values:", values);

    const data3 = {
      data: { ...values },
      method: "post",
      apiName: "staffLogin",
    };
    dispatch(actions.ADMINLOGINPOST(data3));

    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}  // Updated to use `email`
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email format')
          .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, 'Must be a valid Gmail address')
          .required('Email Required'),

        password: Yup.string().required('Password Required'),
      })}
      onSubmit={AdminLoginSubmit}
    >
      {({ errors, touched, handleChange, setFieldValue }) => (
        <Form>
          <Box >
            <h2 style={{ textAlign: "center", fontSize: "25px", marginTop: "0", marginBottom: "30px" }}>STAFF LOGIN</h2>
            <CustomInputLogin
              name="email"  // Update name to `email`
              label="Email or Phone"
              custPlaceholder="Enter email or phone"
              inputType="text"
            />
            <CustomInputLogin
              name="password"
              label="Password"
              custPlaceholder="Enter password"
              inputType="password"
            />
            <Button fullWidth variant="contained" type="submit">
              Login
            </Button>
            <p style={{ textAlign: "center" }}>
              Not registered?{' '}
              <a href="#signup" onClick={onToggleForm}>
                Signup here
              </a>
            </p>
          </Box>
          <ToastContainer
            position="top-right" // or "top-center", "bottom-left", etc.
            autoClose={1500} // Auto close duration in ms
            hideProgressBar={false} // Hide or show progress bar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </Form>
      )}
    </Formik>
  );
};


// Admin Signup Form
const AdminSignup = ({ onToggleForm }) => {
  const dispatch = useDispatch();
  const { AdminSignUpPost } = useSelector((state) => state?.AdminSignUpPost);

  console.log(AdminSignUpPost, "AdminSignUpPost");

  useEffect(() => {
    if (AdminSignUpPost?.message === "Staff registered successfully") {
      toast.success("Signup Successfully")
      dispatch(setInitialStateOfAdminSignUpPost())
      setTimeout(() => onToggleForm(), 1500)
      // navigate('/admin');
    } else if (AdminSignUpPost?.message === "Email is already in use. Please use a different email.") {

      toast.error("Email is already exists")
      dispatch(setInitialStateOfAdminSignUpPost())
    }

  }, [AdminSignUpPost?.data]);


  const AdminSignupSubmit = (values, { resetForm }) => {
    console.log("AdminSignupSubmit-value", values);

    const data3 = {
      data: { ...values },
      method: "post",
      apiName: "staffSignup",
    };
    dispatch(actions.ADMINSIGNUPPOST(data3));
    resetForm();
  };
  return (
    <Formik
      initialValues={{ staff_name: '', email: '', password: '' }}
      validationSchema={Yup.object({
        staff_name: Yup.string().required('Staff name Required'),
        email: Yup.string()
          .email('Invalid email format')
          .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, 'Must be a valid Gmail address')
          .required('Email Required'),
        password: Yup.string().required('Password Required'),
      })}
      onSubmit={AdminSignupSubmit}
    >
      {({ errors, touched, handleChange, setFieldValue }) => (
        <Form>
          <Box>
            <h2 style={{ textAlign: "center", fontSize: "25px", marginTop: "0", marginBottom: "30px" }}>SATFF SIGNUP</h2>
            <CustomInputLogin
              name="staff_name"
              label="Staff Name"
              custPlaceholder="Enter user name"
              inputType="text"
            />
            <CustomInputLogin
              name="email"
              label="email"
              custPlaceholder="Enter email"
              inputType="email"
            />
            <CustomInputLogin
              name="password"
              label="Password"
              custPlaceholder="Enter Password"
              inputType="password"
            />
            <Button fullWidth variant="contained" type="submit">
              Signup
            </Button>
            <p style={{ textAlign: "center" }}>
              Already have an account?{' '}
              <a href="#login" onClick={onToggleForm}>
                Login here
              </a>
            </p>
          </Box>
          <ToastContainer
            position="top-right" // or "top-center", "bottom-left", etc.
            autoClose={1500} // Auto close duration in ms
            hideProgressBar={false} // Hide or show progress bar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </Form>
      )}
    </Formik>
  );
};




const UserLogin = ({ onToggleForm }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { StudentLoginPost } = useSelector((state) => state?.StudentLoginPost);


  useEffect(() => {
    console.log(StudentLoginPost, "StudentLoginPost");
    // console.log(StudentLoginPost?.message,"StudentLoginPost?.message.....")

    if (StudentLoginPost?.message === "Login successful") {
      sessionStorage.setItem('sessionStudentId', StudentLoginPost?.data.student.student_id);
      sessionStorage.setItem('sessionStudentName', StudentLoginPost?.data.student.student_name);
      console.log(StudentLoginPost?.data.student.student_name, "StudentLoginPost?.data.student.student_name");

      toast.success("Login successful")
      dispatch(setInitialStateOfStudentLoginPost())

      setTimeout(() => navigate('/user'), 1500)
    } else if (StudentLoginPost?.message === "Invalid email/phone or password") {

      dispatch(setInitialStateOfStudentLoginPost())
      toast.error("Invalid email/phone")

    }
    else if (StudentLoginPost?.message === "Invalid password") {

      dispatch(setInitialStateOfStudentLoginPost())
      toast.error("Invalid password")

    }

  }, [StudentLoginPost, navigate, dispatch]);

  // setInitialStateOfStudentLoginPost




  const handleLogin = (values) => {
    const data3 = {
      data: values,
      method: "post",
      apiName: "studentLogin",
    };
    dispatch(actions.STUDENTLOGINPOST(data3));
  };

  return (
    <Formik
      initialValues={{ emailOrPhone: '', password: '' }}
      validationSchema={Yup.object({
        emailOrPhone: Yup.string()
          .required('Email or phone is required')
          .test('is-email-or-phone', 'Invalid email or phone number', function (value) {
            const isEmail = Yup.string().email().isValidSync(value);
            const isPhone = /^[0-9]{10}$/.test(value); // Basic phone number validation (allows 10 to 15 digits)

            if (isEmail) {
              // If it's a valid email, check if it's a Gmail address
              return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value) || this.createError({ message: 'Must be a valid Gmail address' });
            }
            return isPhone || this.createError({ message: 'Invalid phone number' });
          }),
        password: Yup.string().required('Password Required'),
      })}
      onSubmit={(values, { resetForm }) => {
        handleLogin(values);
        console.log('User Login Values:', values);
        // resetForm();
        // goToUserPage();
      }}
    >
      {({ errors, touched, handleChange, setFieldValue }) => (
        <Form>
          <Box>
            <h2 style={{ textAlign: "center", fontSize: "25px", marginTop: "0", marginBottom: "30px" }}>
              STUDENT LOGIN
            </h2>

            <CustomInputLogin
              name="emailOrPhone"
              label="Email or Phone"
              custPlaceholder="Enter email or phone"
              inputType="text" // Changed to text to accept both email and phone
            />
            <CustomInputLogin
              name="password"
              label="Password"
              custPlaceholder="Enter password"
              inputType="password"
            />
            <Button fullWidth variant="contained" type="submit">
              Login
            </Button>
            <p style={{ textAlign: "center" }}>
              Not registered?{' '}
              <a href="#signup" onClick={onToggleForm}>
                Signup here
              </a>
            </p>
          </Box>
          <ToastContainer
            position="top-right" // or "top-center", "bottom-left", etc.
            autoClose={5000} // Auto close duration in ms
            hideProgressBar={false} // Hide or show progress bar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </Form>
      )}
    </Formik>
  );
};



// User Signup Form
const UserSignup = ({ onToggleForm }) => {
  const dispatch = useDispatch();
  const { StudentSignUpPost } = useSelector((state) => state?.StudentSignUpPost);
  console.log(StudentSignUpPost, "StudentSignUpPostStudentSignUpPost")


  useEffect(() => {
    if (StudentSignUpPost?.message === "Student registered successfully") {
      toast.success("Signup Successfully")
      dispatch(setInitialStateOfStudentSignUpPost())
      // navigate('/admin');
      setTimeout(() => onToggleForm(), 1500)

    }
    else if (StudentSignUpPost?.message === "Email and phone number already in use") {
      toast.error("Email or phone number already exists")
      dispatch(setInitialStateOfStudentSignUpPost())

    }

  }, [StudentSignUpPost?.data]);

  const handleUserSignUp = (values) => {
    const data3 = {
      data: values,
      method: "post",
      apiName: "studentSignup",
    };
    dispatch(actions.STUDENTSIGNUPPOST(data3));

  }
  return (
    <Formik
      initialValues={{ email: '', password: '', student_name: '', phone_number: '' }}
      validationSchema={Yup.object({
        email: Yup.string()
          .email('Invalid email format')
          .matches(/^[a-zA-Z0-9._%+-]+@gmail\.com$/, 'Must be a valid Gmail address')
          .required('Email Required'),
        password: Yup.string()
          .required('Password Required'),
        phone_number: Yup.string()
          .required('phone number Required')
          .matches(
            /^[0-9]{10}$/,
            'Phone number must be between 10 digits'
          ),
        student_name: Yup.string()
          .required('student name Required'),
      })}
      onSubmit={(values, { resetForm }) => {
        handleUserSignUp(values)
        console.log('User Signup Values:', values);
        resetForm()
        return <UserLogin />
      }}
    >
      {({ errors, touched, handleChange, setFieldValue }) => (
        <Form autocomplete="off" >
          <Box>
            <h2 style={{ textAlign: "center", fontSize: "25px", marginTop: "0", marginBottom: "30px" }}>STUDENT SIGNUP</h2>

            <CustomInputLogin
              name="student_name"
              label="Name"
              custPlaceholder="Enter name"
              inputType="text"
            />

            <CustomInputLogin
              name="email"
              label="Email"
              custPlaceholder="Enter email"
              inputType="email"
            />
            <CustomInputLogin
              name="phone_number"
              label="Phone Number"
              custPlaceholder="Enter phone number"
              inputType="number"
            />
            <CustomInputLogin
              name="password"
              label="Password"
              custPlaceholder="Enter password"
              inputType="password"

            />
            <Button fullWidth variant="contained" type="submit">
              Signup
            </Button>
            <p style={{ textAlign: "center" }}>
              Already have an account?{' '}
              <a href="#login" onClick={onToggleForm}>
                Login here
              </a>
            </p>
          </Box>
          <ToastContainer
            position="top-right" // or "top-center", "bottom-left", etc.
            autoClose={1500} // Auto close duration in ms
            hideProgressBar={false} // Hide or show progress bar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </Form>
      )}
    </Formik>
  );
};

export default LoginSignupAll;
