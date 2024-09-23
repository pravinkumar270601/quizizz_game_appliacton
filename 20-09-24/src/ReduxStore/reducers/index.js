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
  QuizzGamePlayQuestion:QuizzGamePlayQuestionSlice,


});

const store = configureStore({
  reducer,
});
export default store;
