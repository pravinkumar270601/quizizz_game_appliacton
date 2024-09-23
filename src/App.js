// // import logo from './logo.svg';
// // import './App.css';
// // import Sidebar from './Components/SideNav/Sidebar';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Header from './Components/SideNav/Header';
// // import Layout from './Components/Layout/Layout';
// // import QuizEditor from './Pages/Admin/Create/QuizEditor';

// // function App() {
// //   return (
// //     <div className="App">
// //       <Router>
// //         {/* <Sidebar /> */}
// //         {/* <Header /> */}
// //         <Layout />

// //         <Routes>
// //           {/* Your routes here */}
// //         </Routes>
// //         {/* <QuizEditor /> */}
// //       </Router>
// //     </div>
// //   );
// // }

// // export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Layout from './Components/Layout/Layout';
// import './App.css';
// import QuizEditor from './Pages/Admin/Create/QuizEditor';
// import CreateNewActivity from './Pages/Admin/Create/CreateNewActivity';
// import QuestionEditor from './Pages/Admin/Create/QuestionEditor';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import SaveQuestionView from './Pages/Admin/SaveQuestionView/SaveQuestionView';
// import MyLibrary from './Pages/Admin/MyLibrary/MyLibrary';
// import QuizPage from './Pages/Admin/QuizzPlay/QuizPage';
// import CountDown from './Pages/Admin/QuizzPlay/CountDown';

// const theme = createTheme();
// function App() {
//   return (
//     <div className="App">
//       <ThemeProvider theme={theme}>


//         <Router>
//           <Routes>
//             {/* Main layout which contains sidebar, header, etc. */}

//             <Route path="/*" element={<Layout />} />
//             {/* <Route path="/quizeditor" element={<QuizEditor />} /> */}
//             <Route path="/quizeditor" element={<CreateNewActivity />} />
//             <Route path="/question-editor" element={<QuestionEditor />} />
//             <Route path="/importworksheet" element={<QuizEditor />} />
//             <Route path="/savequetion" element={<SaveQuestionView />} />
//             <Route path="/playquizz" element={<QuizPage />} />
//             <Route path="/countdown" element={<CountDown />} />
           
//           </Routes>
//         </Router>
//       </ThemeProvider>
//     </div>
//   );
// }

// export default App;




import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import AdminLayout from './Pages/AdminLayout';
import UserLayout from './Pages/UserLayout';
import LoginSignupAll from './Components/SignupPages/LoginSignupAll';

const theme = createTheme();
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>

        <Router>
          <Routes>
            {/* Default to SignUp page */}
            <Route path="/" element={<LoginSignupAll />} />

            {/* Admin routes */}
            <Route path="/admin/*" element={<AdminLayout />} />

            {/* User routes */}
            <Route path="/user/*" element={<UserLayout />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
