
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
          Admin
        </Button>
        <Button variant={!isAdmin ? "contained" : "outlined"} onClick={handleUserClick}>
          User
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

// // Admin Login Form
// const AdminLogin = ({ onToggleForm }) => {
//   const navigate = useNavigate();



//   const AdminLoginSubmit = (values, { resetForm }) => {
//     console.log("Admin Login Values:", values);
//     const dispatch = useDispatch();
//     const { AdminLoginPost } = useSelector((state) => state?.AdminLoginPost);



//     useEffect(() => {

//       // console.log(StudentLoginPost?.message,"StudentLoginPost?.message.....")


//       if (AdminLoginPost?.message === "Login successful") {

//         dispatch(setInitialStateOfAdminLoginPost())
//         navigate('/admin');
//       }

//     }, [AdminLoginPost, navigate, dispatch]);

//     const data3 = {
//       data: { ...values },
//       method: "post",
//       apiName: "staffLogin",
//     };
//     dispatch(actions.ADMINLOGINPOST(data3));

//     resetForm();
//     // goToAdminPage();
//   }


//   return (
//     <Formik
//       initialValues={{ emailOrPhone: '', password: '' }}
//       validationSchema={Yup.object({
//         emailOrPhone: Yup.string()
//           .required('Required')
//           .test('is-email-or-phone', 'Invalid email or phone number', function (value) {
//             const isEmail = Yup.string().email().isValidSync(value);
//             const isPhone = /^[0-9]+$/.test(value); // Basic phone number validation
//             return isEmail || isPhone;
//           }),
//         password: Yup.string().required('Required'),
//       })}
//       onSubmit={AdminLoginSubmit}
//     >
//       {({ errors, touched, handleChange, setFieldValue }) => (
//         <Form>
//           <Box>
//             <h2 style={{ textAlign: "center", fontSize: "25px", marginTop: "0", marginBottom: "30px" }}>ADMIN LOGIN</h2>
//             <CustomInputLogin
//               name="emailOrPhone"
//               label="Email"
//               custPlaceholder="Enter email"
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
//             <p style={{ textAlign: "center" }}>
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

const AdminLogin = ({ onToggleForm }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { AdminLoginPost } = useSelector((state) => state?.AdminLoginPost);
  console.log(AdminLoginPost?.message,"messssageeeeeeeeeee")

  useEffect(() => {
    if (AdminLoginPost?.message==="Login successful") {
    dispatch(setInitialStateOfAdminLoginPost());
    navigate('/admin');
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
        .required('Required'),

      password: Yup.string().required('Required'),
    })}
    onSubmit={AdminLoginSubmit}
  >
    {({ errors, touched, handleChange, setFieldValue }) => (
      <Form>
        <Box>
          <h2 style={{ textAlign: "center", fontSize: "25px", marginTop: "0", marginBottom: "30px" }}>ADMIN LOGIN</h2>
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
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={Yup.object({
        username: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required'),
      })}
      onSubmit={AdminSignupSubmit}
    >
      {({ errors, touched, handleChange, setFieldValue }) => (
        <Form>
          <Box>
            <h2 style={{ textAlign: "center", fontSize: "25px", marginTop: "0", marginBottom: "30px" }}>ADMIN SIGNUP</h2>
            <CustomInputLogin
              name="username"
              label="User Name"
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
        </Form>
      )}
    </Formik>
  );
};




const UserLogin = ({ onToggleForm }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { StudentLoginPost } = useSelector((state) => state?.StudentLoginPost);

  // const goToUserPage = () => {
  //   // console.log(StudentLoginPost?.Message,'messagessss')
  //   // if (StudentLoginPost?.Message === "Login successful") {
  //     navigate('/user');
  //   // }
  // };




  useEffect(() => {
    console.log(StudentLoginPost, "StudentLoginPost");
    // console.log(StudentLoginPost?.message,"StudentLoginPost?.message.....")

    if (StudentLoginPost?.message === "Login successful") {
      dispatch(setInitialStateOfStudentLoginPost())
      navigate('/user');
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
          .required('Required')
          .test('is-email-or-phone', 'Invalid email or phone number', function (value) {
            const isEmail = Yup.string().email().isValidSync(value);
            const isPhone = /^[0-9]+$/.test(value); // Basic phone number validation
            return isEmail || isPhone;
          }),
        password: Yup.string().required('Required'),
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
              USER LOGIN
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
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required'),
        phone_number: Yup.string().required('Required'),// add validation for phonenumber
        student_name: Yup.string().required('Required')
      })}
      onSubmit={(values, { resetForm }) => {
        handleUserSignUp(values)
        console.log('User Signup Values:', values);
        resetForm()
        return <UserLogin />
      }}
    >
      {({ errors, touched, handleChange, setFieldValue }) => (
        <Form>
          <Box>
            <h2 style={{ textAlign: "center", fontSize: "25px", marginTop: "0", marginBottom: "30px" }}>USER SIGNUP</h2>

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
        </Form>
      )}
    </Formik>
  );
};

export default LoginSignupAll;
