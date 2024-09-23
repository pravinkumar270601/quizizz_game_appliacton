// import React, { useState, useEffect } from "react";
// import { Box, Typography, Paper, Button } from "@mui/material";
// import { ToastContainer, toast } from "react-toastify";
// import { IconButton, Tooltip } from "@mui/material";
// import SettingsIcon from "@mui/icons-material/Settings";
// import "./toastStyles.css";
// import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling
// import imageUrl from "../../../Assets/bg_image.jpg";
// import quizz_imge from "../../../Assets/publishImage.jpg";
// import { useSelector } from "react-redux";
// // import {setQuizPlayPublishId} from '../../../ReduxStore/Slices/QuizzPlay/quizplaypublishidSlice'

// import { useDispatch } from 'react-redux';
// import actions from '../../../ReduxStore/actions';
// import GameEndPage from "./GameEndPage";


// // Utility function to shuffle an array
// const shuffleArray = (array) => {
//   let shuffledArray = array.slice();
//   for (let i = shuffledArray.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
//   }
//   return shuffledArray;
// };

// // Function to shuffle questions and their options
// const shuffleQuizData = (data) => {
//   return data
//     .map((question) => ({
//       ...question,
//       options: shuffleArray(question.options),
//       correctAnswer: shuffleArray(question.correctAnswer),
//     }))
//     .sort(() => Math.random() - 0.5); // Shuffle questions themselves
// };
// const quizData = [
//   {
//     question_id: 6,
//     questionText: "Which is the longest river in the world?",
//     options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
//     correctAnswer: ["Nile"],
//     questionPoint: "5 points",
//     questionTiming: "30 seconds",
//     user_id: 1,
//   },
//   {
//     question_id: 7,
//     questionText: "Who painted the Mona Lisa?",
//     options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
//     correctAnswer: ["Leonardo da Vinci"],
//     questionPoint: "5 points",
//     questionTiming: "20 seconds",
//     user_id: 1,
//   },
//   {
//     question_id: 8,
//     questionText: "What is the smallest prime number?",
//     options: ["0", "1", "2", "3"],
//     correctAnswer: ["2"],
//     questionPoint: "5 points",
//     questionTiming: "15 seconds",
//     user_id: 1,
//   },
//   {
//     question_id: 9,
//     questionText: "In which year did the Titanic sink?",
//     options: ["1905", "1912", "1918", "1923"],
//     correctAnswer: ["1912"],
//     questionPoint: "5 points",
//     questionTiming: "25 seconds",
//     user_id: 1,
//   },
//   {
//     question_id: 10,
//     questionText: "What is the main ingredient in guacamole?",
//     options: ["Tomato", "Avocado", "Pepper", "Onion"],
//     correctAnswer: ["Avocado"],
//     questionPoint: "5 points",
//     questionTiming: "20 seconds",
//     user_id: 1,
//   },
// ];

// const optionBgColer = ["#4F75FF", "#00CCDD", "#FF9100", "#F05A7E", "#AD49E1"];

// const QuizPage = () => {
//   const dispatch = useDispatch()
//   const { QuizzGamePlayQuestion } = useSelector((state) => state?.QuizzGamePlayQuestion);
//   const quizplaypublishid = useSelector((state) => state.quizplaypublishid.quizPlayPublishId);
//   console.log(quizplaypublishid, "quizplaypublishidquizplaypublishid");
 

//    useEffect(() => {
//     const data = { data: {}, method: "get", apiName: `getAllQuestionAnswersByPublishId/${3}` };
//     // console.log("Dispatching LOCATIONMOVIEDROPDOWN action:", data);
//     dispatch(actions.QUIZZGAMEPLAYQUESTION(data));
//   },[quizplaypublishid])

//   const [quizzPlayData,setQuizzPlayData]=useState([])
//   console.log(quizzPlayData,"quizzPlayDataquizzPlayDataquizzPlayDataquizzPlayData")
//   useEffect(()=>{
//     console.log(QuizzGamePlayQuestion,"pravin is dubakurrrrrrr")
//     const quizzdata= QuizzGamePlayQuestion?.data?.map((data)=>{
//       return {
       
//           question_id: data.question_id,
//           questionText:data.questionText,
//           options: data.options,
//           correctAnswer: data.correctAnswer,
//           questionPoint: data.questionPoint,
//           questionTiming: data.questionTiming,
//           user_id: data.user_id,
//           questionImageUrl: data.questionImageUrl,
        
//       }
//     })
//     setQuizzPlayData(quizzdata)
//     console.log(quizzdata,"quizzdataquizzdataquizzdataquizzdataquizzdataquizzdataquizzdataquizzdata")

//   },[QuizzGamePlayQuestion?.data])

//   const [shuffledQuizData, setShuffledQuizData] = useState(
//     // shuffleQuizData(quizzPlayData)
//     shuffleQuizData(quizData)
    
//   );

  
  
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [isAnswered, setIsAnswered] = useState(false);
//   const [timer, setTimer] = useState(0);
//   const [score, setScore] = useState(0);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [highlightedCorrectAnswers, setHighlightedCorrectAnswers] = useState(
//     []
//   );
//   const [highlightedIncorrectAnswers, setHighlightedIncorrectAnswers] =
//     useState([]);
  
//   const currentQuestion = shuffledQuizData[currentQuestionIndex];
//   const {
//     questionText,
//     options,
//     correctAnswer,
//     questionPoint,
//     questionTiming,
//   } = currentQuestion;
//   const initialTime = parseInt(questionTiming.split(" ")[0]);

//   useEffect(() => {
//     setSelectedOptions([]);
//     setIsAnswered(false);
//     setHighlightedCorrectAnswers([]);
//     setHighlightedIncorrectAnswers([]);

//     let timeInSeconds = initialTime;
//     setTimer(timeInSeconds);

//     const countdown = setInterval(() => {
//       setTimer((prevTimer) => {
//         if (prevTimer <= 1) {
//           clearInterval(countdown);
//           goToNextQuestion();
//         }
//         return prevTimer - 1;
//       });
//     }, 1000);

//     return () => clearInterval(countdown);
//   }, [currentQuestionIndex]);

//   const goToNextQuestion = () => {
//     if (currentQuestionIndex < shuffledQuizData.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       setQuizCompleted(true);
//     }
//   };

//   const handleOptionSelect = (option) => {
//     if (correctAnswer.length === 1) {
//       // Single selection mode
//       setSelectedOptions([option]);
//       setTimeout(() => checkAnswer([option]), 500);
//     } else {
//       // Multiple selection mode with limit to correctAnswer length
//       if (selectedOptions.includes(option)) {
//         // If option is already selected, deselect it
//         setSelectedOptions(selectedOptions.filter((opt) => opt !== option));
//       } else if (selectedOptions.length < correctAnswer.length) {
//         // Add the option if the number of selected options is less than the number of correct answers
//         setSelectedOptions([...selectedOptions, option]);
//         if (selectedOptions.length + 1 === correctAnswer.length) {
//           // Auto-check if the user has selected all correct options
//           setTimeout(() => checkAnswer([...selectedOptions, option]), 500);
//         }
//       } else {
//         // Prevent selecting more options than allowed
//         toast.info("You can only select up to the number of correct answers", {
//           className: "cust-toast cust-toast-info", // Apply info style
//           position: "bottom-center",
//           autoClose: 1000,
//           hideProgressBar: true,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       }
//     }
//   };

//   const checkAnswer = (selected) => {
//     setIsAnswered(true);
//     const isCorrect =
//       correctAnswer.length === selected.length &&
//       correctAnswer.every((answer) => selected.includes(answer));

//     if (isCorrect) {
//       let points = parseInt(questionPoint.split(" ")[0]);
//       setScore(score + points);
//       setHighlightedCorrectAnswers(correctAnswer);
//       toast.success("Correct Answer!", {
//         className: "cust-toast cust-toast-success", // Apply success style
//         position: "bottom-center",
//         autoClose: 1000,
//         hideProgressBar: true,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//     } else {
//       setHighlightedCorrectAnswers(correctAnswer);
//       setHighlightedIncorrectAnswers(selected);
//       toast.error("Incorrect Answer", {
//         className: "cust-toast cust-toast-error", // Apply error style
//         position: "bottom-center",
//         autoClose: 1000,
//         hideProgressBar: true,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//     }

//     setTimeout(goToNextQuestion, 2000);
//   };

//   const timeProgress = (timer / initialTime) * 100;

//   if (quizCompleted) {
//     return (
//       // <Box
//       //   sx={{
//       //     width: "100%",
//       //     height: "100%",
//       //     display: "flex",
//       //     justifyContent: "center",
//       //     alignItems: "center",
//       //   }}
//       // >
//       //   <Typography variant="h4" sx={{ color: "black" }}>
//       //     Quiz Completed! Your Total Score: {score}
//       //   </Typography>
//       //   <ToastContainer />
//       // </Box>
//       <GameEndPage />
//     );
//   }

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         minHeight: "100vh",
//         backgroundImage: `url(${imageUrl})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* --------------- */}
//       <Box sx={{ padding: "0 0 10px" }}>
//         <Box
//           component="header"
//           sx={{
//             zIndex: 101,
//             p: 2,
//             backgroundColor: "rgba(0,0,0,0.5)",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//           }}
//         >
//           {/* Actions */}
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//             }}
//           >
//             <Tooltip title="Leaderboard">
//               <Button
//                 variant="contained"
//                 sx={{
//                   width: { xs: 48, sm: 88 },
//                   height: { xs: 36, sm: 40 },
//                   marginTop: "10px",
//                   marginRight: "20px",
//                   display: "flex",
//                   justifyContent: "space-between",
//                   background: "linear-gradient(to bottom, #ffeb3b, #ffb300)",
//                   borderRadius: 2,
//                   color: "white",
//                   "&:hover": {
//                     filter: "brightness(1.25)",
//                   },
//                   "&:active": {
//                     filter: "brightness(0.75)",
//                   },
//                 }}
//               >
//                 <Box
//                   sx={{
//                     height: 16,
//                     width: 16,
//                     backgroundColor: "transparent",
//                   }}
//                 >
//                   <img
//                     src="https://cf.quizizz.com/join/img/gameplay-leaderboard/rank_pill_badge.svg"
//                     alt="Rank Badge"
//                     style={{ display: "block", width: "100%" }}
//                   />
//                 </Box>
//                 <span>-</span>
//               </Button>
//             </Tooltip>

//             <Box
//               sx={{
//                 width: "100px",
//                 height: "43px",
//                 backgroundColor: "rgba(255, 255, 255, 0.2)",
//                 borderRadius: "4px",
//                 overflow: "hidden",
//                 position: "relative",
//                 marginTop: "7.5px",
//               }}
//             >
//               <Box
//                 sx={{
//                   height: "100%",
//                   width: `${100 - timeProgress}%`,
//                   backgroundColor: "rgba(255, 255, 255, 0.5)",
//                   transition: "width 1s linear",
//                 }}
//               >
//                 <Box
//                   sx={{
//                     color: "white",
//                     fontSize: "22px",
//                     fontWeight: "500",
//                     position: "absolute",
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                     top: "50%",
//                     transform: "translate(-50%, -50%)",
//                     height: "auto",
//                     width: "auto",
//                   }}
//                 >
//                   Time
//                 </Box>
//               </Box>
//             </Box>
//           </Box>

//           {/* Settings Button */}
//           <IconButton
//             aria-label="settings"
//             sx={{
//               backgroundColor: "rgba(255,255,255,0.1)",
//               "&:hover": {
//                 backgroundColor: "rgba(255,255,255,0.2)",
//               },
//               width: 40,
//               height: 40,
//             }}
//           >
//             <SettingsIcon />
//           </IconButton>
//         </Box>

//         <Paper
//           sx={{
//             width: { sm: "60%", xs: "100%" },
//             maxHeight: "100%",
//             backgroundColor: "rgba(33, 33, 33, 0.5)",
//             border: "1px solid rgba(255, 255, 255, 0.1)",
//             borderRadius: "8px",
//             position: "relative",
//             overflow: "hidden",
//             padding: { xs: 4, sm: 6 },
//             margin: "30px auto 50px",
//           }}
//         >
//           <Box sx={{ textAlign: "center" }}>
//             <Typography
//               variant="h4"
//               sx={{ fontWeight: "bold", color: "white" }}
//             >
//               <div
//                 style={{
//                   width: "auto",
//                   objectFit: "cover",
//                   display: "flex",
//                   alignItems: "center",
//                 }}
//               >
//                 <div
//                   style={{
//                     marginRight: "30px",
//                   }}
//                 >
//                   <img
//                     src={quizz_imge}
//                     alt="Quiz"
//                     style={{
//                       height: "100px",
//                       width: "auto",
//                       objectFit: "cover",
//                     }}
//                   />
//                 </div>
//                 <div>{questionText}</div>
//               </div>
//             </Typography>
//           </Box>
//         </Paper>

//         <Box
//           sx={{
//             display: "flex",
//             width: "100%",
//             gap: 3,
//             margin: "0 auto",
//             justifyContent: "center",
//             flexWrap: "wrap", // Allow wrapping to multiple lines
//           }}
//         >
//           {options.map((option, index) => {
//             let backgroundColor = "transparent";
//             if (isAnswered) {
//               if (highlightedCorrectAnswers.includes(option)) {
//                 backgroundColor = "green";
//               } else if (highlightedIncorrectAnswers.includes(option)) {
//                 backgroundColor = "red";
//               }
//             } else {
//               backgroundColor = selectedOptions.includes(option)
//                 ? " rgb(255,255,255,.7)"
//                 : optionBgColer[index % optionBgColer.length];
//             }

//             return (
//               <Button
//                 key={index}
//                 variant="contained"
//                 onClick={() => handleOptionSelect(option)}
//                 sx={{
//                   p: 1,
//                   flex: 1,
//                   maxWidth: "25%",
//                   height: "220px",
//                   bgcolor: backgroundColor,
//                   color: backgroundColor === "transparent" ? "white" : "white",
//                   "&:hover": {
//                     bgcolor: backgroundColor,
//                   },
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                   }}
//                 >
//                   <div>
//                     <img
//                       src={quizz_imge}
//                       alt="Quiz"
//                       style={{
//                         height: "85px",
//                         width: "auto",
//                         objectFit: "cover",
//                       }}
//                     />
//                   </div>
//                   <div
//                     style={{
//                       background: "rgb(255,255,255,.3)",
//                       flex: 1,
//                       // maxWidth: "200%",
//                       color: "white",
//                       fontSize: "18px",
//                       fontWeight: "700",
//                     }}
//                   >
//                     {option}
//                   </div>
//                 </div>
//               </Button>
//             );
//           })}
//         </Box>

//         {/* Toast Container */}
//         <ToastContainer
//           position="bottom-center"
//           autoClose={2000}
//           hideProgressBar={true}
//           closeOnClick
//           pauseOnHover
//           draggable
//           progress={undefined}
//           className="cust-ToastContainer"
//         />
//       </Box>
//     </Box>
//   );
// };

// export default QuizPage;



// ----------------------------------------


import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { IconButton, Tooltip } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import "./toastStyles.css";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling
import imageUrl from "../../../Assets/bg_image.jpg";
import { useSelector } from "react-redux";
import { logDOM } from "@testing-library/react";
import GameEndPage from "./GameEndPage";
// import quizz_imge from "./image/narroto.jpg";

// Utility function to shuffle an array
const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

// Function to shuffle questions and their options
const shuffleQuizData = (data) => {
  return data
    .map((question) => ({
      ...question,
      options: shuffleArray(JSON.parse(question.options)), // Parse options from string
      correctAnswer: shuffleArray(JSON.parse(question.correctAnswer)), // Parse correct answers from string
    }))
    .sort(() => Math.random() - 0.5); // Shuffle questions themselves
};

const QuizPage = () => {
  const [shuffledQuizData, setShuffledQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timer, setTimer] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [highlightedCorrectAnswers, setHighlightedCorrectAnswers] = useState(
    []
  );
  const [highlightedIncorrectAnswers, setHighlightedIncorrectAnswers] =
    useState([]);
  const optionBgColer = ["#4F75FF", "#00CCDD", "#FF9100", "#F05A7E", "#AD49E1"];
  const  quizplaypublishid  = useSelector((state) => state?.quizplaypublishid.quizPlayPublishId);
  // const {quizplaypublishid}  = useSelector((state) => state?.quizPlayPublishId);

  console.log(quizplaypublishid,"out side ");
  
  useEffect(() => {
    // Fetch quiz data from API
    const fetchQuizData = async () => {
      console.log(quizplaypublishid,"quizplaypublishidquizplay");
      
      const response = await fetch(
        `http://localhost:4000/api/v1/getAllQuestionAnswersByPublishId/${quizplaypublishid}`
      );
      const result = await response.json();
      if (result.Status) {
        setShuffledQuizData(shuffleQuizData(result.data));
      } else {
        toast.error("Failed to load quiz data");
      }
    };
    fetchQuizData();
  }, [quizplaypublishid]);

  useEffect(() => {
    if (shuffledQuizData.length > 0) {
      const currentQuestion = shuffledQuizData[currentQuestionIndex];
      const initialTime = parseInt(
        currentQuestion.questionTiming.replace('"',"").split(" ")[0]
      );

      setSelectedOptions([]);
      setIsAnswered(false);
      setHighlightedCorrectAnswers([]);
      setHighlightedIncorrectAnswers([]);

      setTimer(initialTime);

      const countdown = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer <= 1) {
            clearInterval(countdown);
            goToNextQuestion();
          }
          return prevTimer - 1;
        });
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [currentQuestionIndex, shuffledQuizData]);

  const goToNextQuestion = () => {
    if (currentQuestionIndex < shuffledQuizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };
  console.log("this is my component render check");

  const handleOptionSelect = (option) => {
    console.log(option, "myyy");

    const currentQuestion = shuffledQuizData[currentQuestionIndex];

    const correctAnswer = currentQuestion.correctAnswer.map(
      (text) => text.text
    );
    console.log(correctAnswer, "my correctAnswer");

    if (correctAnswer.length === 1) {
      setSelectedOptions([option]);
      setTimeout(() => checkAnswer([option]), 500);
    } else {
      console.log(selectedOptions.includes(option), "selectedOptions");

      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter((opt) => opt !== option));
      } else if (selectedOptions.length < correctAnswer.length) {
        setSelectedOptions([...selectedOptions, option]);
        if (selectedOptions.length + 1 === correctAnswer.length) {
          setTimeout(() => checkAnswer([...selectedOptions, option]), 500);
        }
      } else {
        toast.info("You can only select up to the number of correct answers", {
          className: "cust-toast cust-toast-info",
          position: "bottom-center",
          autoClose: 1000,
        });
      }
    }
  };

  const checkAnswer = (selected) => {
    const currentQuestion = shuffledQuizData[currentQuestionIndex];
    console.log(currentQuestion, "currentQuestioncurrentQuestion");

    const correctAnswer = currentQuestion.correctAnswer.map(
      (text) => text.text
    );

    setIsAnswered(true);
    const isCorrect =
      correctAnswer.length === selected.length &&
      correctAnswer.every((answer) => selected.includes(answer));

    if (isCorrect) {
      console.log(currentQuestion, "currentQuestion");
      console.log(currentQuestion.questionPoint.split(" "), "noraml");

      console.log(JSON.parse(currentQuestion.questionPoint), "json");

      let points = parseInt(
        currentQuestion.questionPoint.replace('"', "").split(" ")[0]
      );
      // let points = parseInt(questionPoint.split(" ")[0]);
      console.log(points, "pointspoints");

      setScore(score + points);
      setHighlightedCorrectAnswers(correctAnswer);
      toast.success("Correct Answer!", {
        className: "cust-toast cust-toast-success",
        position: "bottom-center",
        autoClose: 1000,
      });
    } else {
      setHighlightedCorrectAnswers(correctAnswer);
      setHighlightedIncorrectAnswers(selected);
      toast.error("Incorrect Answer", {
        className: "cust-toast cust-toast-error",
        position: "bottom-center",
        autoClose: 1000,
      });
    }

    setTimeout(goToNextQuestion, 2000);
  };


 
  const timeProgress =
    timer > 0
      ? (timer /
          (shuffledQuizData.length > 0
            ? parseInt(
                shuffledQuizData[currentQuestionIndex].questionTiming
                  .replace('"', "")
                  .split(" ")[0]
              )
            : 1)) *
        100
      : 0;

  console.log(parseInt(shuffledQuizData),"shuffledQuizData");

  if (quizCompleted) {
    return (
      // <Box
      //   sx={{
      //     width: "100%",
      //     height: "100%",
      //     display: "flex",
      //     justifyContent: "center",
      //     alignItems: "center",
      //   }}
      // >
      //   <Typography variant="h4" sx={{ color: "black" }}>
      //     Quiz Completed! Your Total Score: {score}
      //   </Typography>
      //   <ToastContainer />
      // </Box>
      <GameEndPage score={score}  quizplaypublishid={quizplaypublishid}/>
    );
  }

  // Check if currentQuestion is defined
  const currentQuestion = shuffledQuizData[currentQuestionIndex];
  if (!currentQuestion) {
    return (
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" sx={{ color: "black" }}>
          Loading Question...
        </Typography>
        <ToastContainer />
      </Box>
    );
  }

  const {
    questionText,
    options,
    questionImageUrl,
    correctAnswer,
    questionPoint,
    questionTiming,
  } = currentQuestion;

  // console.log(questionImageUrl,"questionImageUrl");

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box sx={{ padding: "0 0 10px" }}>
        <Box
          component="header"
          sx={{
            zIndex: 101,
            p: 2,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Actions */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Tooltip title="Leaderboard">
              <Button
                variant="contained"
                sx={{
                  width: { xs: 48, sm: 88 },
                  height: { xs: 36, sm: 40 },
                  marginTop: "10px",
                  marginRight: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  background: "linear-gradient(to bottom, #ffeb3b, #ffb300)",
                  borderRadius: 2,
                  color: "white",
                  "&:hover": {
                    filter: "brightness(1.25)",
                  },
                  "&:active": {
                    filter: "brightness(0.75)",
                  },
                }}
              >
                <Box
                  sx={{ height: 16, width: 16, backgroundColor: "transparent" }}
                >
                  <img
                    src="https://cf.quizizz.com/join/img/gameplay-leaderboard/rank_pill_badge.svg"
                    alt="Rank Badge"
                    style={{ display: "block", width: "100%" }}
                  />
                </Box>
                <span>-</span>
              </Button>
            </Tooltip>

            <Box
              sx={{
                width: "120px",
                height: "43px",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                borderRadius: "4px",
                overflow: "hidden",
                position: "relative",
                marginTop: "7.5px",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width: `${100 - timeProgress}%`,
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  // position: "absolute",
                  // top: 0,
                  // left: 0,
                  transition: "width 1s linear",
                }}
              >
                <Box
                  sx={{
                    color: "white",
                    fontSize: "17px",
                    fontWeight: "500",
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    height: "auto",
                    width: "100%",
                  }}
                >
                  {timer} seconds
                </Box>
              </Box>
            </Box>
          </Box>

          <IconButton
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              color: "white",
            }}
          >
            <SettingsIcon />
          </IconButton>
        </Box>
      </Box>

      <Paper
        sx={{
          width: { sm: "60%", xs: "100%" },
          maxHeight: "100%",
          backgroundColor: "rgba(33, 33, 33, 0.5)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "8px",
          position: "relative",
          overflow: "hidden",
          padding: { xs: 4, sm: 6 },
          margin: "30px auto 50px",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "white" }}>
            <div
              style={{
                width: "auto",
                objectFit: "cover",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <div
                style={{
                  marginRight: "30px",
                }}
              >
                <img
                  src={quizz_imge}
                  alt="Quiz"
                  style={{
                    height: "100px",
                    width: "auto",
                    objectFit: "cover",
                  }}
                />
              </div> */}
              <div>{questionText}</div>
            </div>
          </Typography>
        </Box>
      </Paper>

      {/* <Box
        sx={{
          display: "flex",
          width: "100%",
          gap: 3,
          margin: "0 auto",
          justifyContent: "center",
          flexWrap: "wrap", // Allow wrapping to multiple lines
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 3,
            width: "80%",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
          }}
        >
          <Box>
            {options.map((option, index) => (
              <Button
                key={index}
                variant={
                  selectedOptions.includes(option) ? "contained" : "outlined"
                }
                onClick={() => handleOptionSelect(option)}
                sx={{
                  width: "100%",
                  marginBottom: 1,
                  backgroundColor: highlightedCorrectAnswers.includes(option)
                    ? "green"
                    : highlightedIncorrectAnswers.includes(option)
                    ? "red"
                    : "inherit",
                }}
              >
                {option}
              </Button>
            ))}
          </Box>
        </Paper>
      </Box> */}

      <Box
        sx={{
          display: "flex",
          width: "100%",
          gap: 3,
          margin: "0 auto",
          justifyContent: "center",
          flexWrap: "wrap", // Allow wrapping to multiple lines
        }}
      >
        {options.map((option, index) => {
          let backgroundColor = "transparent";
          if (isAnswered) {
            if (highlightedCorrectAnswers.includes(option)) {
              backgroundColor = "green";
            } else if (highlightedIncorrectAnswers.includes(option)) {
              backgroundColor = "red";
            }
          } else {
            backgroundColor = selectedOptions.includes(option)
              ? " rgb(255,255,255,.7)"
              : optionBgColer[index % optionBgColer.length];
          }

          return (
            <Button
              key={index}
              variant="contained"
              onClick={() => handleOptionSelect(option)}
              sx={{
                p: 1,
                flex: 1,
                maxWidth: "25%",
                height: "220px",
                bgcolor: backgroundColor,
                color: backgroundColor === "transparent" ? "white" : "white",
                "&:hover": {
                  bgcolor: backgroundColor,
                },
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* <div>
                  <img
                    src={quizz_imge}
                    alt="Quiz"
                    style={{
                      height: "85px",
                      width: "auto",
                      objectFit: "cover",
                    }}
                  />
                </div> */}
                <div
                  style={{
                    background: "rgb(255,255,255,.3)",
                    flex: 1,
                    // maxWidth: "200%",
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "700",
                  }}
                >
                  {option}
                </div>
              </div>
            </Button>
          );
        })}
      </Box>

      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        closeOnClick
        pauseOnHover
        draggable
        progress={undefined}
        className="cust-ToastContainer"
      />
    </Box>
  );
};

export default QuizPage;