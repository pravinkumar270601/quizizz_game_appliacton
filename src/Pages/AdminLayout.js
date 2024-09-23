import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Components/Layout/Layout';
import CreateNewActivity from '../Pages/Admin/Create/CreateNewActivity';
import QuestionEditor from '../Pages/Admin/Create/QuestionEditor';
import SaveQuestionView from '../Pages/Admin/SaveQuestionView/SaveQuestionView';
import QuizPage from './Admin/QuizzPlay/QuizPage';
import CountDown from './Admin/QuizzPlay/CountDown';
import QuizEditor from './Admin/Create/QuizEditor';

const AdminLayout = () => {
  return (
    <Routes>
      {/* Main layout which contains sidebar, header, etc. */}
      <Route path="/*" element={<Layout />} />
      <Route path="/quizeditor" element={<CreateNewActivity />} />
      <Route path="/question-editor" element={<QuestionEditor />} />
      <Route path="/importworksheet" element={<QuizEditor />} />
      <Route path="/savequetion" element={<SaveQuestionView />} />
      <Route path="/playquizz" element={<QuizPage />} />
      <Route path="/countdown" element={<CountDown />} />
    </Routes>
  );
};

export default AdminLayout;
