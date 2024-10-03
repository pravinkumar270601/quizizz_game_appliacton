import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';


import QuestionWithAnsPostSlice from '../Slices/QuestionEdit/QuestionWithAnsPost';
import GetAllQuestionSlice from "../Slices/QuestionEdit/GetAllQuestion"
import ImageUploadPostSlice from '../Slices/QuestionEdit/ImageUploadPost';
import QuestionAudioPostSlice from "../Slices/QuestionEdit/QuestionAudioPost"
import QuestionVideoPostSlice from '../Slices/QuestionEdit/QuestionVideoPost';
import DeleteQuestionByIdSlice from '../Slices/QuestionEdit/DeleteQuestionById';
import EditQuestionByIdSlice from '../Slices/QuestionEdit/EditQuestionById';
import GetQuestionByIdSlice from '../Slices/QuestionEdit/GetQuestionById';
import QuestionImageUploadSlice from '../Slices/QuestionEdit/QuestionImageUpload';
import PublishPostSlice from '../Slices/publish/PublishPost';
import GetAllQuestionByPublishIdSlice from '../Slices/publish/GetAllQuestionByPublishId';
import GetPublishByIdSlice from '../Slices/publish/GetPublishById';
import GetPublishByUserIdSlice from '../Slices/publish/GetPublishByUserId';
import quizplaypublishidReducer from "../Slices/QuizzPlay/quizplaypublishidSlice";
import QuizzGamePlayQuestionSlice from '../Slices/QuizzPlay/QuizzGamePlayQuestion';
import DeletePublishByIdSlice from '../Slices/publish/DeletePublishById';
import GetAllPublishesWithStudentSlice from '../Slices/Student/GetAllPublishesWithStudent';
import StudentScorePostSlice from '../Slices/Student/StudentScorePost';
import AdminLoginPostSlice from '../Slices/SignUpLoginAll/AdminLoginPost';
import StudentSignUpPostSlice from '../Slices/SignUpLoginAll/StudentSignUpPost';
import AdminSignUpPostSlice from '../Slices/SignUpLoginAll/AdminSignUpPost';
// import AdminLoginPostSlice from '../Slices/SignUpLoginAll/AdminLoginPost';
import getAllStudentsSlice from '../Slices/Student/getAllStudents' 
import grantAccessToStudentSlice from '../Slices/Student/grantAccessToStudent';
import StudentLoginPostSlice from '../Slices/SignUpLoginAll/StudentLoginPost';
import GetStudentInfoByPublishIdSlice from '../Slices/StudentInfo/GetStudentInfoByPublishId';
import GrantAccessToMultiStudentPostSlice from '../Slices/Student/GrantAccessToMultiStudentPost';
import RevokeAccessToMultiStudentPostSlice from '../Slices/Student/RevokeAccessToStudentPost';
import UserReportGetAllStudentSlice from '../Slices/StudentInfo/UserReportGetAllStudent';

const reducer = combineReducers({



  QuestionWithAnsPost: QuestionWithAnsPostSlice,
  GetAllQuestion: GetAllQuestionSlice,
  ImageUploadPost: ImageUploadPostSlice,
  QuestionAudioPost: QuestionAudioPostSlice,
  QuestionVideoPost: QuestionVideoPostSlice,
  DeleteQuestionById: DeleteQuestionByIdSlice,
  EditQuestionById: EditQuestionByIdSlice,
  GetQuestionById: GetQuestionByIdSlice,
  QuestionImageUpload: QuestionImageUploadSlice,
  PublishPost: PublishPostSlice,
  GetAllQuestionByPublishId: GetAllQuestionByPublishIdSlice,
  GetPublishById: GetPublishByIdSlice,
  GetPublishByUserId: GetPublishByUserIdSlice,
  quizplaypublishid: quizplaypublishidReducer,
  QuizzGamePlayQuestion: QuizzGamePlayQuestionSlice,
  DeletePublishById: DeletePublishByIdSlice,
  GetAllPublishesWithStudent: GetAllPublishesWithStudentSlice,
  StudentScorePost: StudentScorePostSlice,

  StudentSignUpPost: StudentSignUpPostSlice,
  StudentLoginPost: StudentLoginPostSlice,
  AdminSignUpPost: AdminSignUpPostSlice,
  AdminLoginPost: AdminLoginPostSlice,
  getAllStudents: getAllStudentsSlice,
  grantAccessToStudent: grantAccessToStudentSlice,
  GetStudentInfoByPublishId:GetStudentInfoByPublishIdSlice,
  GrantAccessToMultiStudentPost:GrantAccessToMultiStudentPostSlice,
  RevokeAccessToMultiStudentPost:RevokeAccessToMultiStudentPostSlice,
  UserReportGetAllStudent:UserReportGetAllStudentSlice,


});

const store = configureStore({
  reducer,
});
export default store;
