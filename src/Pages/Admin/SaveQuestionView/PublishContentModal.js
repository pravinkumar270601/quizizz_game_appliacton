import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
  Typography,
  Switch,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Grid,
  Tooltip,
  Container,
  Grid2,
} from "@mui/material";
import {
  Close as CloseIcon,
  Info,
  AccessTime,
  Label,
} from "@mui/icons-material";
import { LuRectangleHorizontal } from "react-icons/lu";
import { Formik, Form, Field } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";

import {
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Box,
} from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import BookIcon from "@mui/icons-material/MenuBook";
import SchoolIcon from "@mui/icons-material/School";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Select as FormikSelect } from "formik-material-ui";
import CustomDropdownMui from "../../../Components/CustomDropDown/CustomDropdown";
import CustomInput from "../../../Components/CustomInput2/CustomInput";
import ImageUploadInput from "../../../Components/ImageUploadInput/ImageUploadInput";
import { useDispatch, useSelector } from "react-redux";
import { WiStars } from "react-icons/wi";
import { Add as AddIcon } from "@mui/icons-material";
import CustImageUploadInput from "../../../Components/ImageUploadInput/CustImageUploadInput";
import actions from "../../../ReduxStore/actions/index";


import {
  Subject,
  Grade,
  Language,
  Visibility,
} from "../../../Components/CustomDropDown/DropdownEntrys";
import { useNavigate } from "react-router-dom";

const PublishContentModal = ({ open, onClose }) => {
  const navigate = useNavigate()
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(4, "Name should be at least 4 characters long")
      .required("Name is required"),
    subject: Yup.string().required("Please select the subject"),
    grade: Yup.string().required("Please select the grade"),
  });

  const dispatch = useDispatch();

  const { PublishPost } = useSelector((state) => state?.PublishPost);
  console.log(PublishPost, " PublishPost");

const [publishCreateId,setPublishCreateId] = useState()
console.log(publishCreateId,"publishCreateId");

  useEffect(() => {
    console.log(PublishPost.data.publish_id, "PublishPost.dataPublishPost.data");
    setPublishCreateId(PublishPost?.data?.publish_id)

  }, [PublishPost])

  const { GetAllQuestion } = useSelector((state) => state?.GetAllQuestion);
  // console.log(GetAllQuestion.data.question_id, "question_ids")

  // const handleSubmit = (values, { setSubmitting, resetForm }) => {
  //   console.log(values, "publish submit fuction");
  //   // const question_ids=GetAllQuestion.data.question_id.map(id)={

  //   // }
  //   // if (GetAllQuestion?.data?.question_id) {
  //   //   const question_ids = [];
  //   //   GetAllQuestion.data.question_id.forEach(id => question_ids.push(id));

  //   //   console.log(question_ids, "question_ids")
  //   // }
  //   let question_ids = [];
  //   if (GetAllQuestion?.data?.question_id) {
  //     question_ids = GetAllQuestion.data.question_id.map(id => id);
  //     console.log(question_ids, "question_ids");
  //   } else {
  //     console.log("question_ids not available yet.");
  //   }
  //   const data1 = {
  //     data: { ...values, "staff_id": 1, "question_ids": [45] }, // Pass FormData object here
  //     method: "post",
  //     apiName: "publishCreate",
  //   };


  //   dispatch(actions.PUBLISHPOST(data1));
  //   // Reset the form
  //   resetForm();
  //   setSubmitting(false);
  //   console.log(PublishPost, " subbb PublishPost");
  //   navigate("/publish")
  // };

  // const { GetAllQuestion, loading } = useSelector((state) => state?.GetAllQuestion);
  const [questionIds, setQuestionIds] = useState([]);
  // const { GetAllQuestion, loading } = useSelector((state) => state?.GetAllQuestion);
  const { DeleteQuestionById } = useSelector((state) => state?.DeleteQuestionById);
  const { QuestionWithAnsPost } = useSelector((state) => state?.QuestionWithAnsPost);

  // useEffect to update questionIds when GetAllQuestion changes
  useEffect(() => {
    // console.log(GetAllQuestion.data.question_id,"question_ids updated in useEffect");
    if (GetAllQuestion?.data) {

      console.log("question_ids updated in useEffect111");

      const ids = GetAllQuestion?.data?.map((data) => {
        return data.question_id
      });

      console.log(ids, "idsidsidsidsidsidsidsids");


      setQuestionIds(ids);

    }
  }, [GetAllQuestion, QuestionWithAnsPost.data.question_id, DeleteQuestionById, PublishPost]);




  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log(values, "publish submit function");

    // If still loading, prevent submission
    // if (loading) {
    //   console.log("Data is still loading, please wait...");
    //   return; // Prevent form submission until data is available
    // }

    // let question_ids = [];
    // if (GetAllQuestion?.data?.question_id) {
    //   question_ids = GetAllQuestion.data.question_id.map(id => id);
    //   console.log(question_ids, "question_ids");
    // } else {
    //   console.log("question_ids not available yet.");
    // }

    //   let question_ids = [];
    //   if (GetAllQuestion?.data?.question_id) {
    //     question_ids = GetAllQuestion.data.question_id.map(id => id);
    //     console.log(question_ids, "question_ids");
    //   } else {
    //     console.log("question_ids not available yet.");
    //   }

    //   const data1 = {
    //     data: { 
    //       ...values, 
    //       "staff_id": 1, 
    //       "question_ids": question_ids.length > 0 ? question_ids : [45] // Use default [45] if no question_ids available
    //     },
    //     method: "post",
    //     apiName: "publishCreate",
    //   };

    //   dispatch(actions.PUBLISHPOST(data1));

    //   // Reset the form
    //   resetForm();
    //   setSubmitting(false);
    //   console.log("Published successfully");

    //   // Navigate to another page
    //   navigate("/publish");
    // };


    // Handle form submission

    console.log(values, "publish submit function");

    // Prepare data for dispatch
    const data1 = {
      data: {
        ...values,
        "staff_id": 1,
        "question_ids": questionIds// Use default [45] if no question_ids available
      },
      method: "post",
      apiName: "publishCreate",
    };

    dispatch(actions.PUBLISHPOST(data1));

    // Reset the form
    resetForm();
    setSubmitting(false);
    console.log("Published successfully");

    // Navigate to another page
    navigate("/admin/publish");
  };


  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      sx={{
        overflowX: "auto",
        width: "100%",
        "& .MuiPaper-root": {
          maxWidth: "650px",
          "& .MuiDialog-paper": {
            overflowY: "visible",
            width: "70%",
            maxWidth: "300px",
            margin: "auto",
            borderRadius: 2,
            background: "white",
          },
        },
        "& .MuiDialog-container": {
          height: "auto",
        },
        "& .MuiDialog-paper": { borderRadius: 2 },
      }}
    >
      <IconButton
        aria-label="Close"
        onClick={() => {
          onClose();
        }}
        sx={{ position: "absolute", top: 8, right: 8, color: "text.secondary" }}
      >
        <CloseIcon />
      </IconButton>

      <DialogTitle sx={{ display: "flex", alignItems: "center" }}>
        <Grid
          item
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "rgb(237 230 246)",
            color: "rgb(136 84 192)",
            marginRight: 1,
          }}
        >
          <WiStars style={{ fontSize: "40px" }} />
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", fontSize: "17px" }}
          >
            Great, you're almost done
          </Typography>

          <Typography variant="p" sx={{ fontSize: "17px" }}>
            Review quiz settings and you’re good to go
          </Typography>
        </Grid>
      </DialogTitle>
      <DialogContent dividers sx={{ padding: 0 }}>
        <Formik
          initialValues={{
            name: "",
            subject: "",
            grade: "",
            language: "",
            visibilityType: "",
            imageUrl: "",
          }}
          //   validationSchema={validationSchema}
          onSubmit={handleSubmit}
        //   innerRef={formikRef}
        >
          {({ isSubmitting, resetForm, setFieldValue }) => (
            <Form>
              <Container>
                <Grid container>
                  <Grid item xs={6}>

                    <CustomInput
                      label="name"
                      name="name"
                      inputType={"text"}
                      custPlaceholder="untitled Quiz"
                    />

                    <CustomDropdownMui
                      label="subject"
                      name="subject"
                      options={Subject}
                      custPlaceholder="Select relevent subject"
                    //   setFieldValue={setFieldValue}
                    //   selectmovieIdfn={selectmovieIdfn}
                    />


                    <CustomDropdownMui
                      label="grade"
                      name="grade"
                      options={Grade}
                      custPlaceholder="Select relevent Grade"
                    //   setFieldValue={setFieldValue}
                    //   selectmovieIdfn={selectmovieIdfn}
                    />


                    <CustomDropdownMui
                      label="language"
                      name="language"
                      options={Language}
                      custPlaceholder="Select relevent Language"
                    //   setFieldValue={setFieldValue}
                    //   selectmovieIdfn={selectmovieIdfn}
                    />



                    <CustomDropdownMui
                      label="visibilityType"
                      name="visibilityType"
                      options={Visibility}
                      custPlaceholder="Select relevent Visibility"
                    //   setFieldValue={setFieldValue}
                    //   selectmovieIdfn={selectmovieIdfn}
                    />
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {/* Updated Image Upload Input */}

                    <CustImageUploadInput
                      label="Add cover image"
                      name="imageUrl"
                      isSubmitting={isSubmitting}
                    />
                  </Grid>
                </Grid>
                <DialogActions sx={{ padding: 2, paddingRight: 4 }}>
                  <Button
                    onClick={() => {
                      onClose();
                    }}
                    variant="text"
                    sx={{
                      background: "rgb(249 249 249)",
                      color: "black",
                      "&:hover": {
                        backgroundColor: "rgb(249 249 249)",
                        color: "black",
                      },
                    }}
                  >
                    Cancel
                  </Button>

                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      background: "rgb(136 84 192)",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "rgb(136 84 192)",
                        color: "white",
                      },
                    }}
                  >
                    Publish
                  </Button>
                </DialogActions>
              </Container>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default PublishContentModal;
