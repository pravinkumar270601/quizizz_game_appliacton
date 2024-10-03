// // import React from 'react';
// // import { Box, CssBaseline } from '@mui/material';
// // import Sidebar from '../SideNav/Sidebar'; // Adjust the path as necessary
// // import Header from '../SideNav//Header'; // Adjust the path as necessary

// // const Layout = () => {
// //   return (
// //     <Box sx={{ display: 'flex', height: '100vh' }}>
// //       <CssBaseline />
// //       <Sidebar />
// //       <Box
// //         sx={{
// //           flexGrow: 1,
// //           display: 'flex',
// //           flexDirection: 'column',
// //           justifyContent:"space-between"
// //         }}
// //       >
// //         <Header />
// //         <Box
// //           component="main"
// //           sx={{ flexGrow: 1, p: 3 }}
// //         >
// //           {/* Main content goes here */}
// //           <p>Main content area</p>
// //         </Box>
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default Layout;



// import React from 'react';
// import { Box, CssBaseline, IconButton, useMediaQuery, useTheme } from '@mui/material';
// import Sidebar from '../SideNav/Sidebar'; // Adjust the path as necessary
// import Header from '../SideNav/Header'; // Adjust the path as necessary
// import MenuIcon from '@mui/icons-material/Menu';

// const Layout = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: 'flex', height: '100vh' }}>
//       <CssBaseline />
//       {/* Mobile Menu Icon */}
//       {isMobile && (
//         <IconButton
//           edge="start"
//           color="inherit"
//           aria-label="open drawer"
//           onClick={handleDrawerOpen}
//           sx={{ display: { sm: 'none' }, position: 'absolute', top: 16, left: 16 }}
//         >
//           <MenuIcon />
//         </IconButton>
//       )}
//       <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
//       <Box
//         sx={{
//           flexGrow: 1,
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: "space-between"
//         }}
//       >
//         <Header />
//         <Box
//           component="main"
//           sx={{ flexGrow: 1, p: 3 }}
//         >
//           {/* Main content goes here */}
//           <p>Main content area</p>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Layout;


import React, { useState } from 'react';
import { Box, CssBaseline, IconButton, useMediaQuery, useTheme } from '@mui/material';
import Sidebar from '../SideNav/Sidebar'; // Adjust the path as necessary
import Header from '../SideNav/Header'; // Adjust the path as necessary
import { Menu as MenuIcon } from '@mui/icons-material';
import { Route, Routes } from 'react-router-dom';
import SearchComponent from '../../Pages/Admin/SearchComponent';
import QuizEditor from '../../Pages/Admin/Create/QuizEditor';
import PublishContent from '../../Pages/Admin/PublishPage/PublishContent';
import MyLibrary from '../../Pages/Admin/MyLibrary/MyLibrary';
import StudentReport from '../../Pages/Admin/StudentReport/StudentReport';
import StudentWithPublishId from '../../Pages/Admin/StudentReport/StudentWithPublishId';
import UserReports from '../../Pages/Admin/UserReports/UserReports';

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuClick = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />
      <Sidebar open={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: "space-between"
        }}
      >
        <Header onMenuClick={handleMenuClick} isMobile={isMobile} />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 ,background:"rgb(242 242 242)"}}
        >
          {/* Main content goes here */}
         
          <Routes>

            
            <Route path='/' element={<SearchComponent />} />
            <Route path='/publish' element={<PublishContent />}/>
            {/* <Route path="/quizeditor" element={<QuizEditor />} /> */}
             <Route path="/mylibrary" element={<MyLibrary />} />
             <Route path="/student-report" element={<StudentReport />} />
             <Route path="/student-report/:publishId" element={<StudentWithPublishId />} />
             <Route path="/user-report" element={<UserReports />} />
          </Routes>
         

        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
