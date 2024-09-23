
import React, { useState } from 'react';
import { Box, CssBaseline, IconButton, useMediaQuery, useTheme } from '@mui/material';
// import Sidebar from '../SideNav/Sidebar'; // Adjust the path as necessary
// import Header from '../SideNav/Header'; // Adjust the path as necessary
import { Menu as MenuIcon } from '@mui/icons-material';
import { Route, Routes } from 'react-router-dom';

import UserSidenav from '../UserSidebar/UserSidenav';
import SearchComponent from '../../../Pages/Admin/SearchComponent';
import Header from '../../SideNav/Header';
import UserWelcomePage from '../../../Pages/User/UserWelcomePage';
import UserPuBlishPage from '../../../Pages/User/UserPuBlishPage.js/UserPuBlishPage';
import PendingPage from '../../../Pages/User/UserPuBlishPage.js/PendingPage';
import CompletedPage from '../../../Pages/User/UserPuBlishPage.js/CompletedPage';

const UserLayoutSide = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuClick = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />
      <UserSidenav open={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
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
          sx={{ flexGrow: 1, background: "rgb(242 242 242)" }}
        >
          {/* Main content goes here */}

          <Routes>


            <Route path='/' element={<UserWelcomePage />} />

            <Route path='/publish' element={<UserPuBlishPage />} />
            {/* <Route path='/publish' element={<PublishContent />}/> */}

            {/* <Route path="/mylibrary" element={<MyLibrary />} /> */}
            <Route path="/completed-quizz" element={< CompletedPage />} />
            <Route path="/pending-quizz" element={< PendingPage />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default UserLayoutSide;
