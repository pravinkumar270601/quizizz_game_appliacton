
// import { RptLoadNoDropDownAction } from "../slices/Reports/RptLoadNoDropDown";
// import { CategoryTableGetAllAction } from "../Slices/MasterSlice/CategorySlice/CategoryTableGetAll";
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
 
  



};

export default actions;
