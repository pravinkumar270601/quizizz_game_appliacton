import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserSidenav from '../Components/UserLayouts/UserSidebar/UserSidenav';
import UserLayoutSide from '../Components/UserLayouts/UserLayoutside/UserLayoutSide';
import CountDown from './User/QuizzPlay/CountDown';
import QuizPage from "../Pages/User/QuizzPlay/QuizPage"
import CompletedPage from './User/UserPuBlishPage.js/CompletedPage';

const UserLayout = () => {
  return (
    <Routes>
      <Route path="/*" element= {<UserLayoutSide />}/>
      <Route path="/countdown" element= {<CountDown />}/>
      <Route path="/quizplay" element= {<QuizPage />}/>

      
  
      {/* Add more user-specific routes here */}
    </Routes>
  );
};

export default UserLayout;
