
// import { RptLoadNoDropDownAction } from "../slices/Reports/RptLoadNoDropDown";
// import { CategoryTableGetAllAction } from "../Slices/MasterSlice/CategorySlice/CategoryTableGetAll";
import { DeletePublishByIdAction } from "../Slices/publish/DeletePublishById";
import { GetAllQuestionByPublishIdAction } from "../Slices/publish/GetAllQuestionByPublishId";
import { GetPublishByIdAction } from "../Slices/publish/GetPublishById";
import { GetPublishByUserIdAction } from "../Slices/publish/GetPublishByUserId";
import { PublishPostAction } from "../Slices/publish/PublishPost";
import { DeleteQuestionByIdAction } from "../Slices/QuestionEdit/DeleteQuestionById";
import { EditQuestionByIdAction } from "../Slices/QuestionEdit/EditQuestionById";
import { GetAllQuestionAction } from "../Slices/QuestionEdit/GetAllQuestion";
import { GetQuestionByIdAction } from "../Slices/QuestionEdit/GetQuestionById";
import { ImageUploadPostAction } from "../Slices/QuestionEdit/ImageUploadPost";
import { QuestionAudioPostAction } from "../Slices/QuestionEdit/QuestionAudioPost";
import { QuestionImageUploadAction } from "../Slices/QuestionEdit/QuestionImageUpload";
import { QuestionVideoPostAction } from "../Slices/QuestionEdit/QuestionVideoPost";
import { QuestionWithAnsPostAction } from "../Slices/QuestionEdit/QuestionWithAnsPost";
import { QuizzGamePlayQuestionAction } from "../Slices/QuizzPlay/QuizzGamePlayQuestion";
import { AdminLoginPostAction } from "../Slices/SignUpLoginAll/AdminLoginPost";
import { AdminSignUpPostAction } from "../Slices/SignUpLoginAll/AdminSignUpPost";
import { StudentSignUpPostAction } from "../Slices/SignUpLoginAll/StudentSignUpPost";
import { GetAllPublishesWithStudentAction } from "../Slices/Student/GetAllPublishesWithStudent";
import { StudentScorePostAction } from "../Slices/Student/StudentScorePost";
import { getAllStudentsAction } from "../Slices/Student/getAllStudents";
import { grantAccessToStudentAction } from "../Slices/Student/grantAccessToStudent";
import { StudentLoginPostAction } from "../Slices/SignUpLoginAll/StudentLoginPost";

const actions = {

  // ...RptLoadNoDropDownAction,
  // ...RptStatusDropDownAction,
  
  // ...CategoryTableGetAllAction,
  ...QuestionWithAnsPostAction,
  ...GetAllQuestionAction,
  ...ImageUploadPostAction,
 ...QuestionAudioPostAction,
 ...QuestionVideoPostAction,
 ...DeleteQuestionByIdAction,
 ...EditQuestionByIdAction,
 ...GetQuestionByIdAction,
 ...QuestionImageUploadAction,
 ...PublishPostAction,
 ...GetAllQuestionByPublishIdAction,
 ...GetPublishByIdAction,
 ...GetPublishByUserIdAction,
 ...QuizzGamePlayQuestionAction,
 ...DeletePublishByIdAction,
 ...GetAllPublishesWithStudentAction,
 ...StudentScorePostAction,

 ...StudentSignUpPostAction,
 ...StudentLoginPostAction,
 ...AdminSignUpPostAction,
 ...AdminLoginPostAction,
 ...getAllStudentsAction,
  ...grantAccessToStudentAction,
 
  



};

export default actions;
