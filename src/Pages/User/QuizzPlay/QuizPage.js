// // // // import React, { useState, useEffect } from "react";
// // // // import { Box, Typography, Paper, Button } from "@mui/material";
// // // // import { ToastContainer, toast } from "react-toastify";
// // // // import { IconButton, Tooltip } from "@mui/material";
// // // // import SettingsIcon from "@mui/icons-material/Settings";
// // // // import "./toastStyles.css";
// // // // import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling
// // // // import imageUrl from "../../../Assets/bg_image.jpg";
// // // // import quizz_imge from "../../../Assets/publishImage.jpg";
// // // // import { useSelector } from "react-redux";
// // // // // import {setQuizPlayPublishId} from '../../../ReduxStore/Slices/QuizzPlay/quizplaypublishidSlice'

// // // // import { useDispatch } from 'react-redux';
// // // // import actions from '../../../ReduxStore/actions';
// // // // import GameEndPage from "./GameEndPage";


// // // // // Utility function to shuffle an array
// // // // const shuffleArray = (array) => {
// // // //   let shuffledArray = array.slice();
// // // //   for (let i = shuffledArray.length - 1; i > 0; i--) {
// // // //     const j = Math.floor(Math.random() * (i + 1));
// // // //     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
// // // //   }
// // // //   return shuffledArray;
// // // // };

// // // // // Function to shuffle questions and their options
// // // // const shuffleQuizData = (data) => {
// // // //   return data
// // // //     .map((question) => ({
// // // //       ...question,
// // // //       options: shuffleArray(question.options),
// // // //       correctAnswer: shuffleArray(question.correctAnswer),
// // // //     }))
// // // //     .sort(() => Math.random() - 0.5); // Shuffle questions themselves
// // // // };
// // // // const quizData = [
// // // //   {
// // // //     question_id: 6,
// // // //     questionText: "Which is the longest river in the world?",
// // // //     options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
// // // //     correctAnswer: ["Nile"],
// // // //     questionPoint: "5 points",
// // // //     questionTiming: "30 seconds",
// // // //     user_id: 1,
// // // //   },
// // // //   {
// // // //     question_id: 7,
// // // //     questionText: "Who painted the Mona Lisa?",
// // // //     options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
// // // //     correctAnswer: ["Leonardo da Vinci"],
// // // //     questionPoint: "5 points",
// // // //     questionTiming: "20 seconds",
// // // //     user_id: 1,
// // // //   },
// // // //   {
// // // //     question_id: 8,
// // // //     questionText: "What is the smallest prime number?",
// // // //     options: ["0", "1", "2", "3"],
// // // //     correctAnswer: ["2"],
// // // //     questionPoint: "5 points",
// // // //     questionTiming: "15 seconds",
// // // //     user_id: 1,
// // // //   },
// // // //   {
// // // //     question_id: 9,
// // // //     questionText: "In which year did the Titanic sink?",
// // // //     options: ["1905", "1912", "1918", "1923"],
// // // //     correctAnswer: ["1912"],
// // // //     questionPoint: "5 points",
// // // //     questionTiming: "25 seconds",
// // // //     user_id: 1,
// // // //   },
// // // //   {
// // // //     question_id: 10,
// // // //     questionText: "What is the main ingredient in guacamole?",
// // // //     options: ["Tomato", "Avocado", "Pepper", "Onion"],
// // // //     correctAnswer: ["Avocado"],
// // // //     questionPoint: "5 points",
// // // //     questionTiming: "20 seconds",
// // // //     user_id: 1,
// // // //   },
// // // // ];

// // // // const optionBgColer = ["#4F75FF", "#00CCDD", "#FF9100", "#F05A7E", "#AD49E1"];

// // // // const QuizPage = () => {
// // // //   const dispatch = useDispatch()
// // // //   const { QuizzGamePlayQuestion } = useSelector((state) => state?.QuizzGamePlayQuestion);
// // // //   const quizplaypublishid = useSelector((state) => state.quizplaypublishid.quizPlayPublishId);
// // // //   console.log(quizplaypublishid, "quizplaypublishidquizplaypublishid");


// // // //    useEffect(() => {
// // // //     const data = { data: {}, method: "get", apiName: `getAllQuestionAnswersByPublishId/${3}` };
// // // //     // console.log("Dispatching LOCATIONMOVIEDROPDOWN action:", data);
// // // //     dispatch(actions.QUIZZGAMEPLAYQUESTION(data));
// // // //   },[quizplaypublishid])

// // // //   const [quizzPlayData,setQuizzPlayData]=useState([])
// // // //   console.log(quizzPlayData,"quizzPlayDataquizzPlayDataquizzPlayDataquizzPlayData")
// // // //   useEffect(()=>{
// // // //     console.log(QuizzGamePlayQuestion,"pravin is dubakurrrrrrr")
// // // //     const quizzdata= QuizzGamePlayQuestion?.data?.map((data)=>{
// // // //       return {

// // // //           question_id: data.question_id,
// // // //           questionText:data.questionText,
// // // //           options: data.options,
// // // //           correctAnswer: data.correctAnswer,
// // // //           questionPoint: data.questionPoint,
// // // //           questionTiming: data.questionTiming,
// // // //           user_id: data.user_id,
// // // //           questionImageUrl: data.questionImageUrl,

// // // //       }
// // // //     })
// // // //     setQuizzPlayData(quizzdata)
// // // //     console.log(quizzdata,"quizzdataquizzdataquizzdataquizzdataquizzdataquizzdataquizzdataquizzdata")

// // // //   },[QuizzGamePlayQuestion?.data])

// // // //   const [shuffledQuizData, setShuffledQuizData] = useState(
// // // //     // shuffleQuizData(quizzPlayData)
// // // //     shuffleQuizData(quizData)

// // // //   );



// // // //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// // // //   const [selectedOptions, setSelectedOptions] = useState([]);
// // // //   const [isAnswered, setIsAnswered] = useState(false);
// // // //   const [timer, setTimer] = useState(0);
// // // //   const [score, setScore] = useState(0);
// // // //   const [quizCompleted, setQuizCompleted] = useState(false);
// // // //   const [highlightedCorrectAnswers, setHighlightedCorrectAnswers] = useState(
// // // //     []
// // // //   );
// // // //   const [highlightedIncorrectAnswers, setHighlightedIncorrectAnswers] =
// // // //     useState([]);

// // // //   const currentQuestion = shuffledQuizData[currentQuestionIndex];
// // // //   const {
// // // //     questionText,
// // // //     options,
// // // //     correctAnswer,
// // // //     questionPoint,
// // // //     questionTiming,
// // // //   } = currentQuestion;
// // // //   const initialTime = parseInt(questionTiming.split(" ")[0]);

// // // //   useEffect(() => {
// // // //     setSelectedOptions([]);
// // // //     setIsAnswered(false);
// // // //     setHighlightedCorrectAnswers([]);
// // // //     setHighlightedIncorrectAnswers([]);

// // // //     let timeInSeconds = initialTime;
// // // //     setTimer(timeInSeconds);

// // // //     const countdown = setInterval(() => {
// // // //       setTimer((prevTimer) => {
// // // //         if (prevTimer <= 1) {
// // // //           clearInterval(countdown);
// // // //           goToNextQuestion();
// // // //         }
// // // //         return prevTimer - 1;
// // // //       });
// // // //     }, 1000);

// // // //     return () => clearInterval(countdown);
// // // //   }, [currentQuestionIndex]);

// // // //   const goToNextQuestion = () => {
// // // //     if (currentQuestionIndex < shuffledQuizData.length - 1) {
// // // //       setCurrentQuestionIndex(currentQuestionIndex + 1);
// // // //     } else {
// // // //       setQuizCompleted(true);
// // // //     }
// // // //   };

// // // //   const handleOptionSelect = (option) => {
// // // //     if (correctAnswer.length === 1) {
// // // //       // Single selection mode
// // // //       setSelectedOptions([option]);
// // // //       setTimeout(() => checkAnswer([option]), 500);
// // // //     } else {
// // // //       // Multiple selection mode with limit to correctAnswer length
// // // //       if (selectedOptions.includes(option)) {
// // // //         // If option is already selected, deselect it
// // // //         setSelectedOptions(selectedOptions.filter((opt) => opt !== option));
// // // //       } else if (selectedOptions.length < correctAnswer.length) {
// // // //         // Add the option if the number of selected options is less than the number of correct answers
// // // //         setSelectedOptions([...selectedOptions, option]);
// // // //         if (selectedOptions.length + 1 === correctAnswer.length) {
// // // //           // Auto-check if the user has selected all correct options
// // // //           setTimeout(() => checkAnswer([...selectedOptions, option]), 500);
// // // //         }
// // // //       } else {
// // // //         // Prevent selecting more options than allowed
// // // //         toast.info("You can only select up to the number of correct answers", {
// // // //           className: "cust-toast cust-toast-info", // Apply info style
// // // //           position: "bottom-center",
// // // //           autoClose: 1000,
// // // //           hideProgressBar: true,
// // // //           closeOnClick: true,
// // // //           pauseOnHover: true,
// // // //           draggable: true,
// // // //           progress: undefined,
// // // //         });
// // // //       }
// // // //     }
// // // //   };

// // // //   const checkAnswer = (selected) => {
// // // //     setIsAnswered(true);
// // // //     const isCorrect =
// // // //       correctAnswer.length === selected.length &&
// // // //       correctAnswer.every((answer) => selected.includes(answer));

// // // //     if (isCorrect) {
// // // //       let points = parseInt(questionPoint.split(" ")[0]);
// // // //       setScore(score + points);
// // // //       setHighlightedCorrectAnswers(correctAnswer);
// // // //       toast.success("Correct Answer!", {
// // // //         className: "cust-toast cust-toast-success", // Apply success style
// // // //         position: "bottom-center",
// // // //         autoClose: 1000,
// // // //         hideProgressBar: true,
// // // //         closeOnClick: true,
// // // //         pauseOnHover: true,
// // // //         draggable: true,
// // // //         progress: undefined,
// // // //       });
// // // //     } else {
// // // //       setHighlightedCorrectAnswers(correctAnswer);
// // // //       setHighlightedIncorrectAnswers(selected);
// // // //       toast.error("Incorrect Answer", {
// // // //         className: "cust-toast cust-toast-error", // Apply error style
// // // //         position: "bottom-center",
// // // //         autoClose: 1000,
// // // //         hideProgressBar: true,
// // // //         closeOnClick: true,
// // // //         pauseOnHover: true,
// // // //         draggable: true,
// // // //         progress: undefined,
// // // //       });
// // // //     }

// // // //     setTimeout(goToNextQuestion, 2000);
// // // //   };

// // // //   const timeProgress = (timer / initialTime) * 100;

// // // //   if (quizCompleted) {
// // // //     return (
// // // //       // <Box
// // // //       //   sx={{
// // // //       //     width: "100%",
// // // //       //     height: "100%",
// // // //       //     display: "flex",
// // // //       //     justifyContent: "center",
// // // //       //     alignItems: "center",
// // // //       //   }}
// // // //       // >
// // // //       //   <Typography variant="h4" sx={{ color: "black" }}>
// // // //       //     Quiz Completed! Your Total Score: {score}
// // // //       //   </Typography>
// // // //       //   <ToastContainer />
// // // //       // </Box>
// // // //       <GameEndPage />
// // // //     );
// // // //   }

// // // //   return (
// // // //     <Box
// // // //       sx={{
// // // //         width: "100%",
// // // //         minHeight: "100vh",
// // // //         backgroundImage: `url(${imageUrl})`,
// // // //         backgroundSize: "cover",
// // // //         backgroundPosition: "center",
// // // //         backgroundRepeat: "no-repeat",
// // // //       }}
// // // //     >
// // // //       {/* --------------- */}
// // // //       <Box sx={{ padding: "0 0 10px" }}>
// // // //         <Box
// // // //           component="header"
// // // //           sx={{
// // // //             zIndex: 101,
// // // //             p: 2,
// // // //             backgroundColor: "rgba(0,0,0,0.5)",
// // // //             display: "flex",
// // // //             justifyContent: "space-between",
// // // //             alignItems: "center",
// // // //           }}
// // // //         >
// // // //           {/* Actions */}
// // // //           <Box
// // // //             sx={{
// // // //               display: "flex",
// // // //               justifyContent: "center",
// // // //               alignItems: "center",
// // // //             }}
// // // //           >
// // // //             <Tooltip title="Leaderboard">
// // // //               <Button
// // // //                 variant="contained"
// // // //                 sx={{
// // // //                   width: { xs: 48, sm: 88 },
// // // //                   height: { xs: 36, sm: 40 },
// // // //                   marginTop: "10px",
// // // //                   marginRight: "20px",
// // // //                   display: "flex",
// // // //                   justifyContent: "space-between",
// // // //                   background: "linear-gradient(to bottom, #ffeb3b, #ffb300)",
// // // //                   borderRadius: 2,
// // // //                   color: "white",
// // // //                   "&:hover": {
// // // //                     filter: "brightness(1.25)",
// // // //                   },
// // // //                   "&:active": {
// // // //                     filter: "brightness(0.75)",
// // // //                   },
// // // //                 }}
// // // //               >
// // // //                 <Box
// // // //                   sx={{
// // // //                     height: 16,
// // // //                     width: 16,
// // // //                     backgroundColor: "transparent",
// // // //                   }}
// // // //                 >
// // // //                   <img
// // // //                     src="https://cf.quizizz.com/join/img/gameplay-leaderboard/rank_pill_badge.svg"
// // // //                     alt="Rank Badge"
// // // //                     style={{ display: "block", width: "100%" }}
// // // //                   />
// // // //                 </Box>
// // // //                 <span>-</span>
// // // //               </Button>
// // // //             </Tooltip>

// // // //             <Box
// // // //               sx={{
// // // //                 width: "100px",
// // // //                 height: "43px",
// // // //                 backgroundColor: "rgba(255, 255, 255, 0.2)",
// // // //                 borderRadius: "4px",
// // // //                 overflow: "hidden",
// // // //                 position: "relative",
// // // //                 marginTop: "7.5px",
// // // //               }}
// // // //             >
// // // //               <Box
// // // //                 sx={{
// // // //                   height: "100%",
// // // //                   width: `${100 - timeProgress}%`,
// // // //                   backgroundColor: "rgba(255, 255, 255, 0.5)",
// // // //                   transition: "width 1s linear",
// // // //                 }}
// // // //               >
// // // //                 <Box
// // // //                   sx={{
// // // //                     color: "white",
// // // //                     fontSize: "22px",
// // // //                     fontWeight: "500",
// // // //                     position: "absolute",
// // // //                     left: "50%",
// // // //                     transform: "translateX(-50%)",
// // // //                     top: "50%",
// // // //                     transform: "translate(-50%, -50%)",
// // // //                     height: "auto",
// // // //                     width: "auto",
// // // //                   }}
// // // //                 >
// // // //                   Time
// // // //                 </Box>
// // // //               </Box>
// // // //             </Box>
// // // //           </Box>

// // // //           {/* Settings Button */}
// // // //           <IconButton
// // // //             aria-label="settings"
// // // //             sx={{
// // // //               backgroundColor: "rgba(255,255,255,0.1)",
// // // //               "&:hover": {
// // // //                 backgroundColor: "rgba(255,255,255,0.2)",
// // // //               },
// // // //               width: 40,
// // // //               height: 40,
// // // //             }}
// // // //           >
// // // //             <SettingsIcon />
// // // //           </IconButton>
// // // //         </Box>

// // // //         <Paper
// // // //           sx={{
// // // //             width: { sm: "60%", xs: "100%" },
// // // //             maxHeight: "100%",
// // // //             backgroundColor: "rgba(33, 33, 33, 0.5)",
// // // //             border: "1px solid rgba(255, 255, 255, 0.1)",
// // // //             borderRadius: "8px",
// // // //             position: "relative",
// // // //             overflow: "hidden",
// // // //             padding: { xs: 4, sm: 6 },
// // // //             margin: "30px auto 50px",
// // // //           }}
// // // //         >
// // // //           <Box sx={{ textAlign: "center" }}>
// // // //             <Typography
// // // //               variant="h4"
// // // //               sx={{ fontWeight: "bold", color: "white" }}
// // // //             >
// // // //               <div
// // // //                 style={{
// // // //                   width: "auto",
// // // //                   objectFit: "cover",
// // // //                   display: "flex",
// // // //                   alignItems: "center",
// // // //                 }}
// // // //               >
// // // //                 <div
// // // //                   style={{
// // // //                     marginRight: "30px",
// // // //                   }}
// // // //                 >
// // // //                   <img
// // // //                     src={quizz_imge}
// // // //                     alt="Quiz"
// // // //                     style={{
// // // //                       height: "100px",
// // // //                       width: "auto",
// // // //                       objectFit: "cover",
// // // //                     }}
// // // //                   />
// // // //                 </div>
// // // //                 <div>{questionText}</div>
// // // //               </div>
// // // //             </Typography>
// // // //           </Box>
// // // //         </Paper>

// // // //         <Box
// // // //           sx={{
// // // //             display: "flex",
// // // //             width: "100%",
// // // //             gap: 3,
// // // //             margin: "0 auto",
// // // //             justifyContent: "center",
// // // //             flexWrap: "wrap", // Allow wrapping to multiple lines
// // // //           }}
// // // //         >
// // // //           {options.map((option, index) => {
// // // //             let backgroundColor = "transparent";
// // // //             if (isAnswered) {
// // // //               if (highlightedCorrectAnswers.includes(option)) {
// // // //                 backgroundColor = "green";
// // // //               } else if (highlightedIncorrectAnswers.includes(option)) {
// // // //                 backgroundColor = "red";
// // // //               }
// // // //             } else {
// // // //               backgroundColor = selectedOptions.includes(option)
// // // //                 ? " rgb(255,255,255,.7)"
// // // //                 : optionBgColer[index % optionBgColer.length];
// // // //             }

// // // //             return (
// // // //               <Button
// // // //                 key={index}
// // // //                 variant="contained"
// // // //                 onClick={() => handleOptionSelect(option)}
// // // //                 sx={{
// // // //                   p: 1,
// // // //                   flex: 1,
// // // //                   maxWidth: "25%",
// // // //                   height: "220px",
// // // //                   bgcolor: backgroundColor,
// // // //                   color: backgroundColor === "transparent" ? "white" : "white",
// // // //                   "&:hover": {
// // // //                     bgcolor: backgroundColor,
// // // //                   },
// // // //                 }}
// // // //               >
// // // //                 <div
// // // //                   style={{
// // // //                     display: "flex",
// // // //                     flexDirection: "column",
// // // //                   }}
// // // //                 >
// // // //                   <div>
// // // //                     <img
// // // //                       src={quizz_imge}
// // // //                       alt="Quiz"
// // // //                       style={{
// // // //                         height: "85px",
// // // //                         width: "auto",
// // // //                         objectFit: "cover",
// // // //                       }}
// // // //                     />
// // // //                   </div>
// // // //                   <div
// // // //                     style={{
// // // //                       background: "rgb(255,255,255,.3)",
// // // //                       flex: 1,
// // // //                       // maxWidth: "200%",
// // // //                       color: "white",
// // // //                       fontSize: "18px",
// // // //                       fontWeight: "700",
// // // //                     }}
// // // //                   >
// // // //                     {option}
// // // //                   </div>
// // // //                 </div>
// // // //               </Button>
// // // //             );
// // // //           })}
// // // //         </Box>

// // // //         {/* Toast Container */}
// // // //         <ToastContainer
// // // //           position="bottom-center"
// // // //           autoClose={2000}
// // // //           hideProgressBar={true}
// // // //           closeOnClick
// // // //           pauseOnHover
// // // //           draggable
// // // //           progress={undefined}
// // // //           className="cust-ToastContainer"
// // // //         />
// // // //       </Box>
// // // //     </Box>
// // // //   );
// // // // };

// // // // export default QuizPage;



// // // // ----------------------------------------


// // // import React, { useState, useEffect } from "react";
// // // import { Box, Typography, Paper, Button } from "@mui/material";
// // // import { ToastContainer, toast } from "react-toastify";
// // // import { IconButton, Tooltip } from "@mui/material";
// // // import SettingsIcon from "@mui/icons-material/Settings";
// // // import "./toastStyles.css";
// // // import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling
// // // import imageUrl from "../../../Assets/bg_image.jpg";
// // // import { useSelector } from "react-redux";
// // // import { logDOM } from "@testing-library/react";
// // // import GameEndPage from "./GameEndPage";
// // // // import quizz_imge from "./image/narroto.jpg";

// // // // Utility function to shuffle an array
// // // const shuffleArray = (array) => {
// // //   let shuffledArray = array.slice();
// // //   for (let i = shuffledArray.length - 1; i > 0; i--) {
// // //     const j = Math.floor(Math.random() * (i + 1));
// // //     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
// // //   }
// // //   return shuffledArray;
// // // };

// // // // Function to shuffle questions and their options
// // // const shuffleQuizData = (data) => {
// // //   return data
// // //     .map((question) => ({
// // //       ...question,
// // //       options: shuffleArray(JSON.parse(question.options)), // Parse options from string
// // //       correctAnswer: shuffleArray(JSON.parse(question.correctAnswer)), // Parse correct answers from string
// // //     }))
// // //     .sort(() => Math.random() - 0.5); // Shuffle questions themselves
// // // };

// // // const QuizPage = () => {
// // //   const [shuffledQuizData, setShuffledQuizData] = useState([]);
// // //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// // //   const [selectedOptions, setSelectedOptions] = useState([]);
// // //   const [isAnswered, setIsAnswered] = useState(false);
// // //   const [timer, setTimer] = useState(0);
// // //   const [score, setScore] = useState(0);
// // //   const [quizCompleted, setQuizCompleted] = useState(false);
// // //   const [highlightedCorrectAnswers, setHighlightedCorrectAnswers] = useState(
// // //     []
// // //   );
// // //   const [highlightedIncorrectAnswers, setHighlightedIncorrectAnswers] =
// // //     useState([]);
// // //   const optionBgColer = ["#4F75FF", "#00CCDD", "#FF9100", "#F05A7E", "#AD49E1"];
// // //   const  quizplaypublishid  = useSelector((state) => state?.quizplaypublishid.quizPlayPublishId);
// // //   // const {quizplaypublishid}  = useSelector((state) => state?.quizPlayPublishId);

// // //   console.log(quizplaypublishid,"out side ");

// // //   useEffect(() => {
// // //     // Fetch quiz data from API
// // //     const fetchQuizData = async () => {
// // //       console.log(quizplaypublishid,"quizplaypublishidquizplay");

// // //       const response = await fetch(
// // //         `http://localhost:4000/api/v1/getAllQuestionAnswersByPublishId/${quizplaypublishid}`
// // //       );
// // //       const result = await response.json();
// // //       if (result.Status) {
// // //         setShuffledQuizData(shuffleQuizData(result.data));
// // //       } else {
// // //         toast.error("Failed to load quiz data");
// // //       }
// // //     };
// // //     fetchQuizData();
// // //   }, [quizplaypublishid]);

// // //   useEffect(() => {
// // //     if (shuffledQuizData.length > 0) {
// // //       const currentQuestion = shuffledQuizData[currentQuestionIndex];
// // //       const initialTime = parseInt(
// // //         currentQuestion.questionTiming.replace('"',"").split(" ")[0]
// // //       );

// // //       setSelectedOptions([]);
// // //       setIsAnswered(false);
// // //       setHighlightedCorrectAnswers([]);
// // //       setHighlightedIncorrectAnswers([]);

// // //       setTimer(initialTime);

// // //       const countdown = setInterval(() => {
// // //         setTimer((prevTimer) => {
// // //           if (prevTimer <= 1) {
// // //             clearInterval(countdown);
// // //             goToNextQuestion();
// // //           }
// // //           return prevTimer - 1;
// // //         });
// // //       }, 1000);

// // //       return () => clearInterval(countdown);
// // //     }
// // //   }, [currentQuestionIndex, shuffledQuizData]);

// // //   const goToNextQuestion = () => {
// // //     if (currentQuestionIndex < shuffledQuizData.length - 1) {
// // //       setCurrentQuestionIndex(currentQuestionIndex + 1);
// // //     } else {
// // //       setQuizCompleted(true);
// // //     }
// // //   };
// // //   console.log("this is my component render check");

// // //   const handleOptionSelect = (option) => {
// // //     console.log(option, "myyy");

// // //     const currentQuestion = shuffledQuizData[currentQuestionIndex];

// // //     const correctAnswer = currentQuestion.correctAnswer.map(
// // //       (text) => text.text
// // //     );
// // //     console.log(correctAnswer, "my correctAnswer");

// // //     if (correctAnswer.length === 1) {
// // //       setSelectedOptions([option]);
// // //       setTimeout(() => checkAnswer([option]), 500);
// // //     } else {
// // //       console.log(selectedOptions.includes(option), "selectedOptions");

// // //       if (selectedOptions.includes(option)) {
// // //         setSelectedOptions(selectedOptions.filter((opt) => opt !== option));
// // //       } else if (selectedOptions.length < correctAnswer.length) {
// // //         setSelectedOptions([...selectedOptions, option]);
// // //         if (selectedOptions.length + 1 === correctAnswer.length) {
// // //           setTimeout(() => checkAnswer([...selectedOptions, option]), 500);
// // //         }
// // //       } else {
// // //         toast.info("You can only select up to the number of correct answers", {
// // //           className: "cust-toast cust-toast-info",
// // //           position: "bottom-center",
// // //           autoClose: 1000,
// // //         });
// // //       }
// // //     }
// // //   };

// // //   const checkAnswer = (selected) => {
// // //     const currentQuestion = shuffledQuizData[currentQuestionIndex];
// // //     console.log(currentQuestion, "currentQuestioncurrentQuestion");

// // //     const correctAnswer = currentQuestion.correctAnswer.map(
// // //       (text) => text.text
// // //     );

// // //     setIsAnswered(true);
// // //     const isCorrect =
// // //       correctAnswer.length === selected.length &&
// // //       correctAnswer.every((answer) => selected.includes(answer));

// // //     if (isCorrect) {
// // //       console.log(currentQuestion, "currentQuestion");
// // //       console.log(currentQuestion.questionPoint.split(" "), "noraml");

// // //       console.log(JSON.parse(currentQuestion.questionPoint), "json");

// // //       let points = parseInt(
// // //         currentQuestion.questionPoint.replace('"', "").split(" ")[0]
// // //       );
// // //       // let points = parseInt(questionPoint.split(" ")[0]);
// // //       console.log(points, "pointspoints");

// // //       setScore(score + points);
// // //       setHighlightedCorrectAnswers(correctAnswer);
// // //       toast.success("Correct Answer!", {
// // //         className: "cust-toast cust-toast-success",
// // //         position: "bottom-center",
// // //         autoClose: 1000,
// // //       });
// // //     } else {
// // //       setHighlightedCorrectAnswers(correctAnswer);
// // //       setHighlightedIncorrectAnswers(selected);
// // //       toast.error("Incorrect Answer", {
// // //         className: "cust-toast cust-toast-error",
// // //         position: "bottom-center",
// // //         autoClose: 1000,
// // //       });
// // //     }

// // //     setTimeout(goToNextQuestion, 2000);
// // //   };



// // //   const timeProgress =
// // //     timer > 0
// // //       ? (timer /
// // //           (shuffledQuizData.length > 0
// // //             ? parseInt(
// // //                 shuffledQuizData[currentQuestionIndex].questionTiming
// // //                   .replace('"', "")
// // //                   .split(" ")[0]
// // //               )
// // //             : 1)) *
// // //         100
// // //       : 0;

// // //   console.log(parseInt(shuffledQuizData),"shuffledQuizData");

// // //   if (quizCompleted) {
// // //     return (
// // //       // <Box
// // //       //   sx={{
// // //       //     width: "100%",
// // //       //     height: "100%",
// // //       //     display: "flex",
// // //       //     justifyContent: "center",
// // //       //     alignItems: "center",
// // //       //   }}
// // //       // >
// // //       //   <Typography variant="h4" sx={{ color: "black" }}>
// // //       //     Quiz Completed! Your Total Score: {score}
// // //       //   </Typography>
// // //       //   <ToastContainer />
// // //       // </Box>
// // //       <GameEndPage score={score}  quizplaypublishid={quizplaypublishid}/>
// // //     );
// // //   }

// // //   // Check if currentQuestion is defined
// // //   const currentQuestion = shuffledQuizData[currentQuestionIndex];
// // //   if (!currentQuestion) {
// // //     return (
// // //       <Box
// // //         sx={{
// // //           width: "100%",
// // //           height: "100%",
// // //           display: "flex",
// // //           justifyContent: "center",
// // //           alignItems: "center",
// // //         }}
// // //       >
// // //         <Typography variant="h4" sx={{ color: "black" }}>
// // //           Loading Question...
// // //         </Typography>
// // //         <ToastContainer />
// // //       </Box>
// // //     );
// // //   }

// // //   const {
// // //     questionText,
// // //     options,
// // //     questionImageUrl,
// // //     correctAnswer,
// // //     questionPoint,
// // //     questionTiming,
// // //   } = currentQuestion;

// // //   // console.log(questionImageUrl,"questionImageUrl");

// // //   return (
// // //     <Box
// // //       sx={{
// // //         width: "100%",
// // //         minHeight: "100vh",
// // //         backgroundImage: `url(${imageUrl})`,
// // //         backgroundSize: "cover",
// // //         backgroundPosition: "center",
// // //         backgroundRepeat: "no-repeat",
// // //       }}
// // //     >
// // //       <Box sx={{ padding: "0 0 10px" }}>
// // //         <Box
// // //           component="header"
// // //           sx={{
// // //             zIndex: 101,
// // //             p: 2,
// // //             backgroundColor: "rgba(0,0,0,0.5)",
// // //             display: "flex",
// // //             justifyContent: "space-between",
// // //             alignItems: "center",
// // //           }}
// // //         >
// // //           {/* Actions */}
// // //           <Box
// // //             sx={{
// // //               display: "flex",
// // //               justifyContent: "center",
// // //               alignItems: "center",
// // //             }}
// // //           >
// // //             <Tooltip title="Leaderboard">
// // //               <Button
// // //                 variant="contained"
// // //                 sx={{
// // //                   width: { xs: 48, sm: 88 },
// // //                   height: { xs: 36, sm: 40 },
// // //                   marginTop: "10px",
// // //                   marginRight: "20px",
// // //                   display: "flex",
// // //                   justifyContent: "space-between",
// // //                   background: "linear-gradient(to bottom, #ffeb3b, #ffb300)",
// // //                   borderRadius: 2,
// // //                   color: "white",
// // //                   "&:hover": {
// // //                     filter: "brightness(1.25)",
// // //                   },
// // //                   "&:active": {
// // //                     filter: "brightness(0.75)",
// // //                   },
// // //                 }}
// // //               >
// // //                 <Box
// // //                   sx={{ height: 16, width: 16, backgroundColor: "transparent" }}
// // //                 >
// // //                   <img
// // //                     src="https://cf.quizizz.com/join/img/gameplay-leaderboard/rank_pill_badge.svg"
// // //                     alt="Rank Badge"
// // //                     style={{ display: "block", width: "100%" }}
// // //                   />
// // //                 </Box>
// // //                 <span>-</span>
// // //               </Button>
// // //             </Tooltip>

// // //             <Box
// // //               sx={{
// // //                 width: "120px",
// // //                 height: "43px",
// // //                 backgroundColor: "rgba(255, 255, 255, 0.2)",
// // //                 borderRadius: "4px",
// // //                 overflow: "hidden",
// // //                 position: "relative",
// // //                 marginTop: "7.5px",
// // //               }}
// // //             >
// // //               <Box
// // //                 sx={{
// // //                   height: "100%",
// // //                   width: `${100 - timeProgress}%`,
// // //                   backgroundColor: "rgba(255, 255, 255, 0.5)",
// // //                   // position: "absolute",
// // //                   // top: 0,
// // //                   // left: 0,
// // //                   transition: "width 1s linear",
// // //                 }}
// // //               >
// // //                 <Box
// // //                   sx={{
// // //                     color: "white",
// // //                     fontSize: "17px",
// // //                     fontWeight: "500",
// // //                     position: "absolute",
// // //                     left: "50%",
// // //                     transform: "translateX(-50%)",
// // //                     top: "50%",
// // //                     transform: "translate(-50%, -50%)",
// // //                     height: "auto",
// // //                     width: "100%",
// // //                   }}
// // //                 >
// // //                   {timer} seconds
// // //                 </Box>
// // //               </Box>
// // //             </Box>
// // //           </Box>

// // //           <IconButton
// // //             sx={{
// // //               backgroundColor: "rgba(255, 255, 255, 0.2)",
// // //               color: "white",
// // //             }}
// // //           >
// // //             <SettingsIcon />
// // //           </IconButton>
// // //         </Box>
// // //       </Box>

// // //       <Paper
// // //         sx={{
// // //           width: { sm: "60%", xs: "100%" },
// // //           maxHeight: "100%",
// // //           backgroundColor: "rgba(33, 33, 33, 0.5)",
// // //           border: "1px solid rgba(255, 255, 255, 0.1)",
// // //           borderRadius: "8px",
// // //           position: "relative",
// // //           overflow: "hidden",
// // //           padding: { xs: 4, sm: 6 },
// // //           margin: "30px auto 50px",
// // //         }}
// // //       >
// // //         <Box sx={{ textAlign: "center" }}>
// // //           <Typography variant="h4" sx={{ fontWeight: "bold", color: "white" }}>
// // //             <div
// // //               style={{
// // //                 width: "auto",
// // //                 objectFit: "cover",
// // //                 display: "flex",
// // //                 alignItems: "center",
// // //                 justifyContent: "center",
// // //               }}
// // //             >
// // //               {/* <div
// // //                 style={{
// // //                   marginRight: "30px",
// // //                 }}
// // //               >
// // //                 <img
// // //                   src={quizz_imge}
// // //                   alt="Quiz"
// // //                   style={{
// // //                     height: "100px",
// // //                     width: "auto",
// // //                     objectFit: "cover",
// // //                   }}
// // //                 />
// // //               </div> */}
// // //               <div>{questionText}</div>
// // //             </div>
// // //           </Typography>
// // //         </Box>
// // //       </Paper>

// // //       {/* <Box
// // //         sx={{
// // //           display: "flex",
// // //           width: "100%",
// // //           gap: 3,
// // //           margin: "0 auto",
// // //           justifyContent: "center",
// // //           flexWrap: "wrap", // Allow wrapping to multiple lines
// // //         }}
// // //       >
// // //         <Paper
// // //           elevation={3}
// // //           sx={{
// // //             padding: 3,
// // //             width: "80%",
// // //             backgroundColor: "rgba(255, 255, 255, 0.7)",
// // //           }}
// // //         >
// // //           <Box>
// // //             {options.map((option, index) => (
// // //               <Button
// // //                 key={index}
// // //                 variant={
// // //                   selectedOptions.includes(option) ? "contained" : "outlined"
// // //                 }
// // //                 onClick={() => handleOptionSelect(option)}
// // //                 sx={{
// // //                   width: "100%",
// // //                   marginBottom: 1,
// // //                   backgroundColor: highlightedCorrectAnswers.includes(option)
// // //                     ? "green"
// // //                     : highlightedIncorrectAnswers.includes(option)
// // //                     ? "red"
// // //                     : "inherit",
// // //                 }}
// // //               >
// // //                 {option}
// // //               </Button>
// // //             ))}
// // //           </Box>
// // //         </Paper>
// // //       </Box> */}

// // //       <Box
// // //         sx={{
// // //           display: "flex",
// // //           width: "100%",
// // //           gap: 3,
// // //           margin: "0 auto",
// // //           justifyContent: "center",
// // //           flexWrap: "wrap", // Allow wrapping to multiple lines
// // //         }}
// // //       >
// // //         {options.map((option, index) => {
// // //           let backgroundColor = "transparent";
// // //           if (isAnswered) {
// // //             if (highlightedCorrectAnswers.includes(option)) {
// // //               backgroundColor = "green";
// // //             } else if (highlightedIncorrectAnswers.includes(option)) {
// // //               backgroundColor = "red";
// // //             }
// // //           } else {
// // //             backgroundColor = selectedOptions.includes(option)
// // //               ? " rgb(255,255,255,.7)"
// // //               : optionBgColer[index % optionBgColer.length];
// // //           }

// // //           return (
// // //             <Button
// // //               key={index}
// // //               variant="contained"
// // //               onClick={() => handleOptionSelect(option)}
// // //               sx={{
// // //                 p: 1,
// // //                 flex: 1,
// // //                 maxWidth: "25%",
// // //                 height: "220px",
// // //                 bgcolor: backgroundColor,
// // //                 color: backgroundColor === "transparent" ? "white" : "white",
// // //                 "&:hover": {
// // //                   bgcolor: backgroundColor,
// // //                 },
// // //               }}
// // //             >
// // //               <div
// // //                 style={{
// // //                   display: "flex",
// // //                   flexDirection: "column",
// // //                 }}
// // //               >
// // //                 {/* <div>
// // //                   <img
// // //                     src={quizz_imge}
// // //                     alt="Quiz"
// // //                     style={{
// // //                       height: "85px",
// // //                       width: "auto",
// // //                       objectFit: "cover",
// // //                     }}
// // //                   />
// // //                 </div> */}
// // //                 <div
// // //                   style={{
// // //                     background: "rgb(255,255,255,.3)",
// // //                     flex: 1,
// // //                     // maxWidth: "200%",
// // //                     color: "white",
// // //                     fontSize: "18px",
// // //                     fontWeight: "700",
// // //                   }}
// // //                 >
// // //                   {option}
// // //                 </div>
// // //               </div>
// // //             </Button>
// // //           );
// // //         })}
// // //       </Box>

// // //       <ToastContainer
// // //         position="bottom-center"
// // //         autoClose={2000}
// // //         hideProgressBar={true}
// // //         closeOnClick
// // //         pauseOnHover
// // //         draggable
// // //         progress={undefined}
// // //         className="cust-ToastContainer"
// // //       />
// // //     </Box>
// // //   );
// // // };

// // // export default QuizPage;







// // import React, { useState, useEffect } from "react";
// // import { Box, Typography, Paper, Button } from "@mui/material";
// // import { ToastContainer, toast } from "react-toastify";
// // import { IconButton, Tooltip } from "@mui/material";
// // import SettingsIcon from "@mui/icons-material/Settings";
// // import "./toastStyles.css";
// // import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling
// // import imageUrl from "../../../Assets/bg_image.jpg";
// // import { useSelector } from "react-redux";
// // import { logDOM } from "@testing-library/react";
// // import GameEndPage from "./GameEndPage";
// // import { adminUrl as baseUrl } from "../../../constants";
// // // import quizz_imge from "./image/narroto.jpg";

// // // Utility function to shuffle an array
// // const shuffleArray = (array) => {
// //   let shuffledArray = array.slice();
// //   for (let i = shuffledArray.length - 1; i > 0; i--) {
// //     const j = Math.floor(Math.random() * (i + 1));
// //     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
// //   }
// //   return shuffledArray;
// // };

// // // Function to shuffle questions and their options

// // const shuffleQuizData = (data) => {
// //   return data
// //     .map((question) => ({
// //       ...question,
// //       options: shuffleArray(JSON.parse(question.options)), // Parse options from string
// //       correctAnswer: shuffleArray(JSON.parse(question.correctAnswer)), // Parse correct answers from string
// //       // optionsImageUrl:shuffleArray(JSON.parse(question.optionsImageUrl))
// //     }))
// //     .sort(() => Math.random() - 0.5); // Shuffle questions themselves
// // };

// // const QuizPage = () => {
// //   const [shuffledQuizData, setShuffledQuizData] = useState([]);
// //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// //   const [selectedOptions, setSelectedOptions] = useState([]);
// //   const [isAnswered, setIsAnswered] = useState(false);
// //   const [timer, setTimer] = useState(0);
// //   const [score, setScore] = useState(0);
// //   const [quizCompleted, setQuizCompleted] = useState(false);
// //   const [highlightedCorrectAnswers, setHighlightedCorrectAnswers] = useState(
// //     []
// //   );

// //   console.log(selectedOptions, "selectedOptionsselectedOptionsselectedOptionsselectedOptions")


// //   console.log(shuffledQuizData, "shuffledQuizDatashuffledQuizDatashuffledQuizData")

// //   const [highlightedIncorrectAnswers, setHighlightedIncorrectAnswers] =
// //     useState([]);
// //   const optionBgColer = ["#4F75FF", "#00CCDD", "#FF9100", "#F05A7E", "#AD49E1"];
// //   const quizplaypublishid = useSelector((state) => state?.quizplaypublishid.quizPlayPublishId);
// //   // const {quizplaypublishid}  = useSelector((state) => state?.quizPlayPublishId);

// //   console.log(quizplaypublishid, "out side ");

// //   useEffect(() => {
// //     // Fetch quiz data from API
// //     const fetchQuizData = async () => {
// //       console.log(quizplaypublishid, "quizplaypublishidquizplay");

// //       const response = await fetch(
// //         `http://localhost:4000/api/v1/getAllQuestionAnswersByPublishId/${quizplaypublishid}`
// //       );
// //       const result = await response.json();
// //       if (result.Status) {
// //         setShuffledQuizData(shuffleQuizData(result.data));
// //       } else {
// //         toast.error("Failed to load quiz data");
// //       }
// //     };
// //     fetchQuizData();
// //   }, [quizplaypublishid]);

// //   useEffect(() => {
// //     if (shuffledQuizData.length > 0) {
// //       const currentQuestion = shuffledQuizData[currentQuestionIndex];
// //       const initialTime = parseInt(
// //         currentQuestion.questionTiming.replace('"', "").split(" ")[0]
// //       );

// //       setSelectedOptions([]);
// //       setIsAnswered(false);
// //       setHighlightedCorrectAnswers([]);
// //       setHighlightedIncorrectAnswers([]);

// //       setTimer(initialTime);

// //       const countdown = setInterval(() => {
// //         setTimer((prevTimer) => {
// //           if (prevTimer <= 1) {
// //             clearInterval(countdown);
// //             goToNextQuestion();
// //           }
// //           return prevTimer - 1;
// //         });
// //       }, 1000);

// //       return () => clearInterval(countdown);
// //     }
// //   }, [currentQuestionIndex, shuffledQuizData]);

// //   const goToNextQuestion = () => {
// //     if (currentQuestionIndex < shuffledQuizData.length - 1) {
// //       setCurrentQuestionIndex(currentQuestionIndex + 1);
// //     } else {
// //       setQuizCompleted(true);
// //     }
// //   };
// //   console.log("this is my component render check");

// //   const handleOptionSelect = (option) => {
// //     const currentQuestion = shuffledQuizData[currentQuestionIndex];
// //     const correctAnswer = currentQuestion.correctAnswer.map(
// //       (answer) => answer.text || answer.image
// //     );

// //     if (correctAnswer.length === 1) {
// //       const selectedOption = option.image || option.text; // extract relevant property
// //       setSelectedOptions([selectedOption]);
// //       setTimeout(() => checkAnswer([selectedOption]), 500);
// //     } else {
// //       const selectedOption = option.image || option.text; // extract relevant property
// //       if (selectedOptions.includes(selectedOption)) {
// //         setSelectedOptions(selectedOptions.filter((opt) => opt !== selectedOption));
// //       } else if (selectedOptions.length < correctAnswer.length) {
// //         setSelectedOptions([...selectedOptions, selectedOption]);
// //         if (selectedOptions.length + 1 === correctAnswer.length) {
// //           setTimeout(() => checkAnswer([...selectedOptions, selectedOption]), 500);
// //         }
// //       } else {
// //         toast.info("You can only select up to the number of correct answers", {
// //           className: "cust-toast cust-toast-info",
// //           position: "bottom-center",
// //           autoClose: 1000,
// //         });
// //       }
// //     }
// //   };



// //   const checkAnswer = (selected) => {
// //     const currentQuestion = shuffledQuizData[currentQuestionIndex];
// //     const correctAnswer = currentQuestion.correctAnswer.map((data) => {
// //       return data.text || data.image; // Ensure you're getting the correct format
// //     });

// //     setIsAnswered(true);

// //     // Log for debugging
// //     console.log("Correct Answer:", correctAnswer);
// //     console.log("Selected Answer:", selected);

// //     // Check if the selected options match the correct answers (text or image)
// //     const isCorrect =
// //       correctAnswer.length === selected.length &&
// //       correctAnswer.every((answer) => selected.includes(answer));

// //     console.log("Is Correct:", isCorrect);

// //     if (isCorrect) {
// //       let points = parseInt(
// //         currentQuestion.questionPoint.replace('"', "").split(" ")[0]
// //       );
// //       setScore(score + points);
// //       setHighlightedCorrectAnswers(correctAnswer);
// //       toast.success("Correct Answer!", {
// //         className: "cust-toast cust-toast-success",
// //         position: "bottom-center",
// //         autoClose: 1000,
// //       });
// //     } else {
// //       setHighlightedCorrectAnswers(correctAnswer);
// //       setHighlightedIncorrectAnswers(selected);
// //       toast.error("Incorrect Answer", {
// //         className: "cust-toast cust-toast-error",
// //         position: "bottom-center",
// //         autoClose: 1000,
// //       });
// //     }

// //     setTimeout(goToNextQuestion, 2000);
// //   };


// //   const timeProgress =
// //     timer > 0
// //       ? (timer /
// //         (shuffledQuizData.length > 0
// //           ? parseInt(
// //             shuffledQuizData[currentQuestionIndex].questionTiming
// //               .replace('"', "")
// //               .split(" ")[0]
// //           )
// //           : 1)) *
// //       100
// //       : 0;

// //   console.log(parseInt(shuffledQuizData), "shuffledQuizData");

// //   if (quizCompleted) {
// //     return (
// //       // <Box
// //       //   sx={{
// //       //     width: "100%",
// //       //     height: "100%",
// //       //     display: "flex",
// //       //     justifyContent: "center",
// //       //     alignItems: "center",
// //       //   }}
// //       // >
// //       //   <Typography variant="h4" sx={{ color: "black" }}>
// //       //     Quiz Completed! Your Total Score: {score}
// //       //   </Typography>
// //       //   <ToastContainer />
// //       // </Box>
// //       <GameEndPage score={score} quizplaypublishid={quizplaypublishid} />
// //     );
// //   }

// //   // Check if currentQuestion is defined
// //   const currentQuestion = shuffledQuizData[currentQuestionIndex];
// //   if (!currentQuestion) {
// //     return (
// //       <Box
// //         sx={{
// //           width: "100%",
// //           height: "100%",
// //           display: "flex",
// //           justifyContent: "center",
// //           alignItems: "center",
// //         }}
// //       >
// //         <Typography variant="h4" sx={{ color: "black" }}>
// //           Loading Question...
// //         </Typography>
// //         <ToastContainer />
// //       </Box>
// //     );
// //   }

// //   const {
// //     questionText,
// //     options,
// //     questionImageUrl,
// //     questionVideoUrl,
// //     questionAudioUrl,
// //     correctAnswer,
// //     questionPoint,
// //     questionTiming,
// //   } = currentQuestion;

// //   // console.log(questionImageUrl,"questionImageUrl");

// //   return (
// //     <Box
// //       sx={{
// //         width: "100%",
// //         minHeight: "100vh",
// //         backgroundImage: `url(${imageUrl})`,
// //         backgroundSize: "cover",
// //         backgroundPosition: "center",
// //         backgroundRepeat: "no-repeat",
// //       }}
// //     >
// //       <Box sx={{ padding: "0 0 10px" }}>
// //         <Box
// //           component="header"
// //           sx={{
// //             zIndex: 101,
// //             p: 2,
// //             backgroundColor: "rgba(0,0,0,0.5)",
// //             display: "flex",
// //             justifyContent: "space-between",
// //             alignItems: "center",
// //           }}
// //         >
// //           {/* Actions */}
// //           <Box
// //             sx={{
// //               display: "flex",
// //               justifyContent: "center",
// //               alignItems: "center",
// //             }}
// //           >
// //             <Tooltip title="Leaderboard">
// //               <Button
// //                 variant="contained"
// //                 sx={{
// //                   width: { xs: 48, sm: 88 },
// //                   height: { xs: 36, sm: 40 },
// //                   marginTop: "10px",
// //                   marginRight: "20px",
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   background: "linear-gradient(to bottom, #ffeb3b, #ffb300)",
// //                   borderRadius: 2,
// //                   color: "white",
// //                   "&:hover": {
// //                     filter: "brightness(1.25)",
// //                   },
// //                   "&:active": {
// //                     filter: "brightness(0.75)",
// //                   },
// //                 }}
// //               >
// //                 <Box
// //                   sx={{ height: 16, width: 16, backgroundColor: "transparent" }}
// //                 >
// //                   <img
// //                     src="https://cf.quizizz.com/join/img/gameplay-leaderboard/rank_pill_badge.svg"
// //                     alt="Rank Badge"
// //                     style={{ display: "block", width: "100%" }}
// //                   />
// //                 </Box>
// //                 <span>-</span>
// //               </Button>
// //             </Tooltip>

// //             <Box
// //               sx={{
// //                 width: "120px",
// //                 height: "43px",
// //                 backgroundColor: "rgba(255, 255, 255, 0.2)",
// //                 borderRadius: "4px",
// //                 overflow: "hidden",
// //                 position: "relative",
// //                 marginTop: "7.5px",
// //               }}
// //             >
// //               <Box
// //                 sx={{
// //                   height: "100%",
// //                   width: `${100 - timeProgress}%`,
// //                   backgroundColor: "rgba(255, 255, 255, 0.5)",
// //                   // position: "absolute",
// //                   // top: 0,
// //                   // left: 0,
// //                   transition: "width 1s linear",
// //                 }}
// //               >
// //                 <Box
// //                   sx={{
// //                     color: "white",
// //                     fontSize: "17px",
// //                     fontWeight: "500",
// //                     position: "absolute",
// //                     left: "50%",
// //                     transform: "translateX(-50%)",
// //                     top: "50%",
// //                     transform: "translate(-50%, -50%)",
// //                     height: "auto",
// //                     width: "100%",
// //                   }}
// //                 >
// //                   {timer} seconds
// //                 </Box>
// //               </Box>
// //             </Box>
// //           </Box>

// //           <IconButton
// //             sx={{
// //               backgroundColor: "rgba(255, 255, 255, 0.2)",
// //               color: "white",
// //             }}
// //           >
// //             <SettingsIcon />
// //           </IconButton>
// //         </Box>
// //       </Box>

// //       <Paper
// //         sx={{
// //           width: { sm: "80%", xs: "100%" },
// //           maxHeight: "100%",
// //           backgroundColor: "rgba(33, 33, 33, 0.5)",
// //           border: "1px solid rgba(255, 255, 255, 0.1)",
// //           borderRadius: "8px",
// //           position: "relative",
// //           overflow: "hidden",
// //           padding: { xs: 4, sm: 6 },
// //           margin: "30px auto 50px",
// //           display: 'flex',
// //           flexDirection: "row"
// //         }}
// //       >
// //         <Box>
// //           {questionImageUrl ? (
// //             <img src={questionImageUrl} alt="question image"
// //               style={{
// //                 width: "300px",
// //                 height: "170px",
// //                 objectFit: "cover",
// //                 display: "flex",
// //                 alignItems: "center",
// //                 justifyContent: "center",
// //               }} />
// //           ) : questionAudioUrl ? (
// //             <audio controls
// //               style={{
// //                 width: "300px",
// //                 height: "170px",
// //                 objectFit: "cover",
// //                 display: "flex",
// //                 alignItems: "center",
// //                 justifyContent: "center",
// //               }}>
// //               <source src={`${baseUrl}${questionAudioUrl}`} type="audio/mp3" />
// //               <source src={`${baseUrl}${questionAudioUrl}`} type="audio/x-m4a" />
// //               <source src={`${baseUrl}${questionAudioUrl}`} type="audio/mpeg" />
// //               <source src={`${baseUrl}${questionAudioUrl}`} type="audio/webm" />
// //               Your browser does not support the audio element.
// //             </audio>
// //           ) : questionVideoUrl ? (
// //             <video controls
// //               style={{
// //                 width: "300px",
// //                 height: "170px",
// //                 objectFit: "cover",
// //                 display: "flex",
// //                 alignItems: "center",
// //                 justifyContent: "center",
// //               }}

// //             >
// //               <source src={`${baseUrl}${questionVideoUrl}`} type="video/mp4" />   {/* MP4 */}
// //               <source src={`${baseUrl}${questionVideoUrl}`} type="video/webm" />  {/* WebM */}
// //               <source src={`${baseUrl}${questionVideoUrl}`} type="video/ogg" />
// //               Your browser does not support the video tag.
// //             </video>
// //           ) : null}
// //         </Box>

// //         <Box sx={{ textAlign: "center" }}>
// //           <Typography variant="h4" sx={{ fontWeight: "bold", color: "white" }}

// //             style={{
// //               width: "100%",
// //               height: '100%',
// //               display: "flex",
// //               alignItems: "center",
// //               justifyContent: "center",
// //             }}
// //           >
// //             {questionText}

// //           </Typography>
// //         </Box>
// //       </Paper>



// //       <Box
// //         sx={{
// //           display: "flex",
// //           width: "100%",
// //           gap: 3,
// //           margin: "0 auto",
// //           justifyContent: "center",
// //           flexWrap: "wrap", // Allow wrapping to multiple lines
// //         }}
// //       >

// //         {options.map((option, index) => {
// //           let backgroundColor = "transparent";
// //           if (isAnswered) {
// //             // Check if the answer is correct or incorrect
// //             if (highlightedCorrectAnswers.includes(option.text) || highlightedCorrectAnswers.includes(option.image)) {
// //               backgroundColor = "green";
// //             } else if (highlightedIncorrectAnswers.includes(option.text) || highlightedIncorrectAnswers.includes(option.image)) {
// //               backgroundColor = "red"; // Make sure to check incorrect answers correctly
// //             }
// //           } else {
// //             // When the question is not answered
// //             backgroundColor = (selectedOptions.includes(option.text)) || highlightedCorrectAnswers.includes(option.image)
// //               ? "rgba(255, 255, 255, 0.7)"
// //               : optionBgColer[index % optionBgColer.length];
// //           }

// //           return (
// //             <Button
// //               key={index}
// //               variant="contained"
// //               onClick={() => handleOptionSelect(option)}
// //               sx={{
// //                 p: 1,
// //                 flex: 1,
// //                 maxWidth: "25%",
// //                 height: "220px",
// //                 bgcolor: backgroundColor,
// //                 color: backgroundColor === "transparent" ? "white" : "white",
// //                 "&:hover": {
// //                   bgcolor: backgroundColor,
// //                 },
// //               }}
// //             >
// //               <div
// //                 style={{
// //                   display: "flex",
// //                   flexDirection: "column",
// //                 }}
// //               >
// //                 {option.image !== "" ? (
// //                   <div>
// //                     <img
// //                       src={option.image}
// //                       alt="Quiz"
// //                       style={{
// //                         height: "85px",
// //                         width: "auto",
// //                         objectFit: "cover",
// //                       }}
// //                     />
// //                     <div
// //                       style={{
// //                         background: "rgb(255,255,255,.3)",
// //                         flex: 1,
// //                         // maxWidth: "200%",
// //                         color: "white",
// //                         fontSize: "18px",
// //                         fontWeight: "700",
// //                       }}
// //                     >
// //                       {option.text}
// //                     </div>
// //                   </div>) :

// //                   (<div
// //                     style={{
// //                       background: "rgb(255,255,255,.3)",
// //                       flex: 1,
// //                       // maxWidth: "200%",
// //                       color: "white",
// //                       fontSize: "18px",
// //                       fontWeight: "700",
// //                     }}
// //                   >
// //                     {option.text}
// //                   </div>)}
// //               </div>
// //             </Button>
// //           );
// //         })}
// //       </Box>

// //       <ToastContainer
// //         position="bottom-center"
// //         autoClose={2000}
// //         hideProgressBar={true}
// //         closeOnClick
// //         pauseOnHover
// //         draggable
// //         progress={undefined}
// //         className="cust-ToastContainer"
// //       />
// //     </Box>
// //   );
// // };

// // export default QuizPage;











// // import React, { useState, useEffect } from "react";
// // import { Box, Typography, Paper, Button } from "@mui/material";
// // import { ToastContainer, toast } from "react-toastify";
// // import { IconButton, Tooltip } from "@mui/material";
// // import SettingsIcon from "@mui/icons-material/Settings";
// // import "./toastStyles.css";
// // import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling
// // import imageUrl from "../../../Assets/bg_image.jpg";
// // import { useSelector } from "react-redux";
// // import { logDOM } from "@testing-library/react";
// // import GameEndPage from "./GameEndPage";
// // import { adminUrl as baseUrl } from "../../../constants";
// // import FIllPlay from "./FIllPlay";
// // // import quizz_imge from "./image/narroto.jpg";

// // // Utility function to shuffle an array
// // const shuffleArray = (array) => {
// //   let shuffledArray = array.slice();
// //   for (let i = shuffledArray.length - 1; i > 0; i--) {
// //     const j = Math.floor(Math.random() * (i + 1));
// //     [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
// //   }
// //   return shuffledArray;
// // };

// // // Function to shuffle questions and their options

// // const shuffleQuizData = (data) => {
// //   return data
// //     .map((question) => ({
// //       ...question,
// //       options: shuffleArray(JSON.parse(question.options)), // Parse options from string
// //       correctAnswer: shuffleArray(JSON.parse(question.correctAnswer)), // Parse correct answers from string
// //       // optionsImageUrl:shuffleArray(JSON.parse(question.optionsImageUrl))
// //     }))
// //     .sort(() => Math.random() - 0.5); // Shuffle questions themselves
// // };

// // const QuizPage = () => {
// //   const [shuffledQuizData, setShuffledQuizData] = useState([]);
// //   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
// //   const [selectedOptions, setSelectedOptions] = useState([]);
// //   const [isAnswered, setIsAnswered] = useState(false);
// //   const [timer, setTimer] = useState(0);
// //   const [score, setScore] = useState(0);
// //   const [quizCompleted, setQuizCompleted] = useState(false);
// //   const [highlightedCorrectAnswers, setHighlightedCorrectAnswers] = useState(
// //     []
// //   );

// //   console.log(selectedOptions, "selectedOptionsselectedOptionsselectedOptionsselectedOptions")


// //   console.log(shuffledQuizData, "shuffledQuizDatashuffledQuizDatashuffledQuizData")

// //   const [highlightedIncorrectAnswers, setHighlightedIncorrectAnswers] =
// //     useState([]);
// //   const optionBgColer = ["#4F75FF", "#00CCDD", "#FF9100", "#F05A7E", "#AD49E1"];
// //   const quizplaypublishid = useSelector((state) => state?.quizplaypublishid.quizPlayPublishId);
// //   // const {quizplaypublishid}  = useSelector((state) => state?.quizPlayPublishId);

// //   console.log(quizplaypublishid, "out side ");

// //   useEffect(() => {
// //     // Fetch quiz data from API
// //     const fetchQuizData = async () => {
// //       console.log(quizplaypublishid, "quizplaypublishidquizplay");

// //       const response = await fetch(
// //         `http://localhost:4000/api/v1/getAllQuestionAnswersByPublishId/${quizplaypublishid}`
// //       );
// //       const result = await response.json();
// //       if (result.Status) {
// //         setShuffledQuizData(shuffleQuizData(result.data));
// //       } else {
// //         toast.error("Failed to load quiz data");
// //       }
// //     };
// //     fetchQuizData();
// //   }, [quizplaypublishid]);

// //   useEffect(() => {
// //     if (shuffledQuizData.length > 0) {
// //       const currentQuestion = shuffledQuizData[currentQuestionIndex];
// //       const initialTime = parseInt(
// //         currentQuestion.questionTiming.replace('"', "").split(" ")[0]
// //       );

// //       setSelectedOptions([]);
// //       setIsAnswered(false);
// //       setHighlightedCorrectAnswers([]);
// //       setHighlightedIncorrectAnswers([]);

// //       setTimer(initialTime);

// //       const countdown = setInterval(() => {
// //         setTimer((prevTimer) => {
// //           if (prevTimer <= 1) {
// //             clearInterval(countdown);
// //             goToNextQuestion();
// //           }
// //           return prevTimer - 1;
// //         });
// //       }, 1000);

// //       return () => clearInterval(countdown);
// //     }
// //   }, [currentQuestionIndex, shuffledQuizData]);

// //   const goToNextQuestion = () => {
// //     if (currentQuestionIndex < shuffledQuizData.length - 1) {
// //       setCurrentQuestionIndex(currentQuestionIndex + 1);
// //     } else {
// //       setQuizCompleted(true);
// //     }
// //   };
// //   console.log("this is my component render check");

// //   const handleOptionSelect = (option) => {
// //     const currentQuestion = shuffledQuizData[currentQuestionIndex];
// //     const correctAnswer = currentQuestion.correctAnswer.map(
// //       (answer) => answer.text || answer.image
// //     );

// //     if (correctAnswer.length === 1) {
// //       const selectedOption = option.image || option.text; // extract relevant property
// //       setSelectedOptions([selectedOption]);
// //       setTimeout(() => checkAnswer([selectedOption]), 500);
// //     } else {
// //       const selectedOption = option.image || option.text; // extract relevant property
// //       if (selectedOptions.includes(selectedOption)) {
// //         setSelectedOptions(selectedOptions.filter((opt) => opt !== selectedOption));
// //       } else if (selectedOptions.length < correctAnswer.length) {
// //         setSelectedOptions([...selectedOptions, selectedOption]);
// //         if (selectedOptions.length + 1 === correctAnswer.length) {
// //           setTimeout(() => checkAnswer([...selectedOptions, selectedOption]), 500);
// //         }
// //       } else {
// //         toast.info("You can only select up to the number of correct answers", {
// //           className: "cust-toast cust-toast-info",
// //           position: "bottom-center",
// //           autoClose: 1000,
// //         });
// //       }
// //     }
// //   };



// //   const checkAnswer = (selected) => {
// //     const currentQuestion = shuffledQuizData[currentQuestionIndex];
// //     const correctAnswer = currentQuestion.correctAnswer.map((data) => {
// //       return data.text || data.image; // Ensure you're getting the correct format
// //     });

// //     setIsAnswered(true);

// //     // Log for debugging
// //     console.log("Correct Answer:", correctAnswer);
// //     console.log("Selected Answer:", selected);

// //     // Check if the selected options match the correct answers (text or image)
// //     const isCorrect =
// //       correctAnswer.length === selected.length &&
// //       correctAnswer.every((answer) => selected.includes(answer));

// //     console.log("Is Correct:", isCorrect);

// //     if (isCorrect) {
// //       let points = parseInt(
// //         currentQuestion.questionPoint.replace('"', "").split(" ")[0]
// //       );
// //       setScore(score + points);
// //       setHighlightedCorrectAnswers(correctAnswer);
// //       toast.success("Correct Answer!", {
// //         className: "cust-toast cust-toast-success",
// //         position: "bottom-center",
// //         autoClose: 1000,
// //       });
// //     } else {
// //       setHighlightedCorrectAnswers(correctAnswer);
// //       setHighlightedIncorrectAnswers(selected);
// //       toast.error("Incorrect Answer", {
// //         className: "cust-toast cust-toast-error",
// //         position: "bottom-center",
// //         autoClose: 1000,
// //       });
// //     }

// //     setTimeout(goToNextQuestion, 2000);
// //   };


// //   const timeProgress =
// //     timer > 0
// //       ? (timer /
// //         (shuffledQuizData.length > 0
// //           ? parseInt(
// //             shuffledQuizData[currentQuestionIndex].questionTiming
// //               .replace('"', "")
// //               .split(" ")[0]
// //           )
// //           : 1)) *
// //       100
// //       : 0;

// //   console.log(parseInt(shuffledQuizData), "shuffledQuizData");

// //   if (quizCompleted) {
// //     return (
// //       // <Box
// //       //   sx={{
// //       //     width: "100%",
// //       //     height: "100%",
// //       //     display: "flex",
// //       //     justifyContent: "center",
// //       //     alignItems: "center",
// //       //   }}
// //       // >
// //       //   <Typography variant="h4" sx={{ color: "black" }}>
// //       //     Quiz Completed! Your Total Score: {score}
// //       //   </Typography>
// //       //   <ToastContainer />
// //       // </Box>
// //       <GameEndPage score={score} />
// //     );
// //   }

// //   // Check if currentQuestion is defined
// //   const currentQuestion = shuffledQuizData[currentQuestionIndex];
// //   if (!currentQuestion) {
// //     return (
// //       <Box
// //         sx={{
// //           width: "100%",
// //           height: "100%",
// //           display: "flex",
// //           justifyContent: "center",
// //           alignItems: "center",
// //         }}
// //       >
// //         <Typography variant="h4" sx={{ color: "black" }}>
// //           Loading Question...
// //         </Typography>
// //         <ToastContainer />
// //       </Box>
// //     );
// //   }

// //   const {
// //     questionText,
// //     options,
// //     questionImageUrl,
// //     questionVideoUrl,
// //     questionAudioUrl,
// //     questionType,
// //     correctAnswer,
// //     questionPoint,
// //     questionTiming,
// //   } = currentQuestion;



// //   return (
// //     <Box
// //       sx={{
// //         width: "100%",
// //         minHeight: "100vh",
// //         backgroundImage: `url(${imageUrl})`,
// //         backgroundSize: "cover",
// //         backgroundPosition: "center",
// //         backgroundRepeat: "no-repeat",
// //       }}
// //     >
// //       <Box sx={{ padding: "0 0 10px" }}>
// //         <Box
// //           component="header"
// //           sx={{
// //             zIndex: 101,
// //             p: 2,
// //             backgroundColor: "rgba(0,0,0,0.5)",
// //             display: "flex",
// //             justifyContent: "space-between",
// //             alignItems: "center",
// //           }}
// //         >
// //           {/* Actions */}
// //           <Box
// //             sx={{
// //               display: "flex",
// //               justifyContent: "center",
// //               alignItems: "center",
// //             }}
// //           >
// //             <Tooltip title="Leaderboard">
// //               <Button
// //                 variant="contained"
// //                 sx={{
// //                   width: { xs: 48, sm: 88 },
// //                   height: { xs: 36, sm: 40 },
// //                   marginTop: "10px",
// //                   marginRight: "20px",
// //                   display: "flex",
// //                   justifyContent: "space-between",
// //                   background: "linear-gradient(to bottom, #ffeb3b, #ffb300)",
// //                   borderRadius: 2,
// //                   color: "white",
// //                   "&:hover": {
// //                     filter: "brightness(1.25)",
// //                   },
// //                   "&:active": {
// //                     filter: "brightness(0.75)",
// //                   },
// //                 }}
// //               >
// //                 <Box
// //                   sx={{ height: 16, width: 16, backgroundColor: "transparent" }}
// //                 >
// //                   <img
// //                     src="https://cf.quizizz.com/join/img/gameplay-leaderboard/rank_pill_badge.svg"
// //                     alt="Rank Badge"
// //                     style={{ display: "block", width: "100%" }}
// //                   />
// //                 </Box>
// //                 <span>-</span>
// //               </Button>
// //             </Tooltip>

// //             <Box
// //               sx={{
// //                 width: "120px",
// //                 height: "43px",
// //                 backgroundColor: "rgba(255, 255, 255, 0.2)",
// //                 borderRadius: "4px",
// //                 overflow: "hidden",
// //                 position: "relative",
// //                 marginTop: "7.5px",
// //               }}
// //             >
// //               <Box
// //                 sx={{
// //                   height: "100%",
// //                   width: `${100 - timeProgress}%`,
// //                   backgroundColor: "rgba(255, 255, 255, 0.5)",
// //                   // position: "absolute",
// //                   // top: 0,
// //                   // left: 0,
// //                   transition: "width 1s linear",
// //                 }}
// //               >
// //                 <Box
// //                   sx={{
// //                     color: "white",
// //                     fontSize: "17px",
// //                     fontWeight: "500",
// //                     position: "absolute",
// //                     left: "50%",
// //                     transform: "translateX(-50%)",
// //                     top: "50%",
// //                     transform: "translate(-50%, -50%)",
// //                     height: "auto",
// //                     width: "100%",
// //                   }}
// //                 >
// //                   {timer} seconds
// //                 </Box>
// //               </Box>
// //             </Box>
// //           </Box>

// //           <IconButton
// //             sx={{
// //               backgroundColor: "rgba(255, 255, 255, 0.2)",
// //               color: "white",
// //             }}
// //           >
// //             <SettingsIcon />
// //           </IconButton>
// //         </Box>
// //       </Box>

// //       <Paper
// //         sx={{
// //           width: { sm: "60%", xs: "100%" },
// //           maxHeight: "100%",
// //           backgroundColor: "rgba(33, 33, 33, 0.5)",
// //           border: "1px solid rgba(255, 255, 255, 0.1)",
// //           borderRadius: "8px",
// //           position: "relative",
// //           overflow: "hidden",
// //           padding: { xs: 4, sm: 6 },
// //           margin: "30px auto 50px",
// //         }}
// //       >
// //         {questionImageUrl ? (
// //           <img src={questionImageUrl} alt="question image" />
// //         ) : questionAudioUrl ? (
// //           <audio controls>
// //             <source src={`${baseUrl}${questionAudioUrl}`} type="audio/mp3" />
// //             <source src={`${baseUrl}${questionAudioUrl}`} type="audio/x-m4a" />
// //             <source src={`${baseUrl}${questionAudioUrl}`} type="audio/mpeg" />
// //             <source src={`${baseUrl}${questionAudioUrl}`} type="audio/webm" />
// //             Your browser does not support the audio element.
// //           </audio>
// //         ) : questionVideoUrl ? (
// //           <video controls>
// //             <source src={`${baseUrl}${questionVideoUrl}`} type="video/mp4" />   {/* MP4 */}
// //             <source src={`${baseUrl}${questionVideoUrl}`} type="video/webm" />  {/* WebM */}
// //             <source src={`${baseUrl}${questionVideoUrl}`} type="video/ogg" />
// //             Your browser does not support the video tag.
// //           </video>
// //         ) : null}

// //         <Box sx={{ textAlign: "center" }}>
// //           <Typography variant="h4" sx={{ fontWeight: "bold", color: "white" }}>
// //             <div
// //               style={{
// //                 width: "auto",
// //                 objectFit: "cover",
// //                 display: "flex",
// //                 alignItems: "center",
// //                 justifyContent: "center",
// //               }}
// //             >
// //               {/* <div
// //                 style={{
// //                   marginRight: "30px",
// //                 }}
// //               >
// //                 <img
// //                   src={quizz_imge}
// //                   alt="Quiz"
// //                   style={{
// //                     height: "100px",
// //                     width: "auto",
// //                     objectFit: "cover",
// //                   }}
// //                 />
// //               </div> */}
// //               <div>{questionText}</div>
// //             </div>
// //           </Typography>
// //         </Box>
// //       </Paper>


// //       {JSON.parse(questionType) === "multipleChoice" ? (
// //         <Box
// //           sx={{
// //             display: "flex",
// //             width: "100%",
// //             gap: 3,
// //             margin: "0 auto",
// //             justifyContent: "center",
// //             flexWrap: "wrap", // Allow wrapping to multiple lines
// //           }}
// //         >

// //           {options.map((option, index) => {
// //             let backgroundColor = "transparent";
// //             if (isAnswered) {
// //               // Check if the answer is correct or incorrect
// //               if (highlightedCorrectAnswers.includes(option.text) || highlightedCorrectAnswers.includes(option.image)) {
// //                 backgroundColor = "green";
// //               } else if (highlightedIncorrectAnswers.includes(option.text) || highlightedIncorrectAnswers.includes(option.image)) {
// //                 backgroundColor = "red"; // Make sure to check incorrect answers correctly
// //               }
// //             } else {
// //               // When the question is not answered
// //               backgroundColor = (selectedOptions.includes(option.text)) || highlightedCorrectAnswers.includes(option.image)
// //                 ? "rgba(255, 255, 255, 0.7)"
// //                 : optionBgColer[index % optionBgColer.length];
// //             }

// //             return (
// //               <Button
// //                 key={index}
// //                 variant="contained"
// //                 onClick={() => handleOptionSelect(option)}
// //                 sx={{
// //                   p: 1,
// //                   flex: 1,
// //                   maxWidth: "25%",
// //                   height: "220px",
// //                   bgcolor: backgroundColor,
// //                   color: backgroundColor === "transparent" ? "white" : "white",
// //                   "&:hover": {
// //                     bgcolor: backgroundColor,
// //                   },
// //                 }}
// //               >
// //                 <div
// //                   style={{
// //                     display: "flex",
// //                     flexDirection: "column",
// //                   }}
// //                 >
// //                   {option.image !== "" ? (
// //                     <div>
// //                       <img
// //                         src={option.image}
// //                         alt="Quiz"
// //                         style={{
// //                           height: "85px",
// //                           width: "auto",
// //                           objectFit: "cover",
// //                         }}
// //                       />
// //                       <div
// //                         style={{
// //                           background: "rgb(255,255,255,.3)",
// //                           flex: 1,
// //                           // maxWidth: "200%",
// //                           color: "white",
// //                           fontSize: "18px",
// //                           fontWeight: "700",
// //                         }}
// //                       >
// //                         {option.text}
// //                       </div>
// //                     </div>) :

// //                     (<div
// //                       style={{
// //                         background: "rgb(255,255,255,.3)",
// //                         flex: 1,
// //                         // maxWidth: "200%",
// //                         color: "white",
// //                         fontSize: "18px",
// //                         fontWeight: "700",
// //                       }}
// //                     >
// //                       {option.text}
// //                     </div>)}
// //                 </div>
// //               </Button>
// //             );
// //           })}
// //         </Box>) :
// //         (<Box
// //           sx={{
// //             display: "flex",
// //             width: "100%",
// //             gap: 3,
// //             margin: "0 auto",
// //             justifyContent: "center",
// //             flexWrap: "wrap", // Allow wrapping to multiple lines
// //           }}>




// //         </Box>
// //         )}

// //       <ToastContainer
// //         position="bottom-center"
// //         autoClose={2000}
// //         hideProgressBar={true}
// //         closeOnClick
// //         pauseOnHover
// //         draggable
// //         progress={undefined}
// //         className="cust-ToastContainer"
// //       />
// //     </Box>
// //   );
// // };

// // export default QuizPage;













// import React, { useState, useEffect, useRef } from "react";
// import { Box, Typography, Paper, Button, TextField } from "@mui/material";
// import { ToastContainer, toast } from "react-toastify";
// import { IconButton, Tooltip } from "@mui/material";
// import SettingsIcon from "@mui/icons-material/Settings";
// import "./toastStyles.css";
// import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling
// import imageUrl from "../../../Assets/bg_image.jpg";
// import { useSelector } from "react-redux";
// import { logDOM } from "@testing-library/react";
// import GameEndPage from "./GameEndPage";
// import { adminUrl as baseUrl } from "../../../constants";

// // import quizz_imge from "./image/narroto.jpg";

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
//       options: shuffleArray(JSON.parse(question.options)), // Parse options from string
//       correctAnswer: shuffleArray(JSON.parse(question.correctAnswer)), // Parse correct answers from string
//       // optionsImageUrl:shuffleArray(JSON.parse(question.optionsImageUrl))
//     }))
//     .sort(() => Math.random() - 0.5); // Shuffle questions themselves
// };

// const QuizPage = () => {
//   const [shuffledQuizData, setShuffledQuizData] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [isAnswered, setIsAnswered] = useState(false);
//   const [timer, setTimer] = useState(0);
//   const [score, setScore] = useState(0);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   const [highlightedCorrectAnswers, setHighlightedCorrectAnswers] = useState(
//     []
//   );
//   const [inputValues, setInputValues] = useState([]); // Initialize inputValues as an empty array

//   const inputRefs = useRef([]); // Ref to store input references

//   console.log(selectedOptions, "selectedOptionsselectedOptionsselectedOptionsselectedOptions")


//   console.log(shuffledQuizData, "shuffledQuizDatashuffledQuizDatashuffledQuizData")

//   const [highlightedIncorrectAnswers, setHighlightedIncorrectAnswers] =
//     useState([]);
//   const optionBgColer = ["#4F75FF", "#00CCDD", "#FF9100", "#F05A7E", "#AD49E1"];
//   const quizplaypublishid = useSelector((state) => state?.quizplaypublishid.quizPlayPublishId);
//   // const {quizplaypublishid}  = useSelector((state) => state?.quizPlayPublishId);

//   console.log(quizplaypublishid, "out side ");

//   useEffect(() => {
//     // Fetch quiz data from API
//     const fetchQuizData = async () => {
//       console.log(quizplaypublishid, "quizplaypublishidquizplay");

//       const response = await fetch(
//         `http://localhost:4000/api/v1/getAllQuestionAnswersByPublishId/${quizplaypublishid}`
//       );
//       const result = await response.json();
//       if (result.Status) {
//         setShuffledQuizData(shuffleQuizData(result.data));
//       } else {
//         toast.error("Failed to load quiz data");
//       }
//     };
//     fetchQuizData();
//   }, [quizplaypublishid]);

//   useEffect(() => {
//     if (shuffledQuizData.length > 0) {
//       const currentQuestion = shuffledQuizData[currentQuestionIndex];
//       const initialTime = parseInt(
//         currentQuestion.questionTiming.replace('"', "").split(" ")[0]
//       );

//       setSelectedOptions([]);
//       setIsAnswered(false);
//       setHighlightedCorrectAnswers([]);
//       setHighlightedIncorrectAnswers([]);

//       setTimer(initialTime);

//       // Set inputValues based on the length of the correctAnswer text

//       const correctAnswerText = currentQuestion.correctAnswer[0].text; // Get correct answer text

//       setInputValues(Array(correctAnswerText.length).fill("")); // Fill inputValues with empty strings based on text length

//       const countdown = setInterval(() => {
//         setTimer((prevTimer) => {
//           if (prevTimer <= 1) {
//             clearInterval(countdown);
//             goToNextQuestion();
//           }
//           return prevTimer - 1;
//         });
//       }, 1000);

//       return () => clearInterval(countdown);
//     }
//   }, [currentQuestionIndex, shuffledQuizData]);

//   const goToNextQuestion = () => {
//     if (currentQuestionIndex < shuffledQuizData.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       setQuizCompleted(true);
//     }
//   };
//   console.log("this is my component render check");

//   const handleOptionSelect = (option) => {
//     const currentQuestion = shuffledQuizData[currentQuestionIndex];
//     const correctAnswer = currentQuestion.correctAnswer.map(
//       (answer) => answer.text || answer.image
//     );

//     if (correctAnswer.length === 1) {
//       const selectedOption = option.image || option.text; // extract relevant property
//       setSelectedOptions([selectedOption]);
//       setTimeout(() => checkAnswer([selectedOption]), 500);
//     } else {
//       const selectedOption = option.image || option.text; // extract relevant property
//       if (selectedOptions.includes(selectedOption)) {
//         setSelectedOptions(selectedOptions.filter((opt) => opt !== selectedOption));
//       } else if (selectedOptions.length < correctAnswer.length) {
//         setSelectedOptions([...selectedOptions, selectedOption]);
//         if (selectedOptions.length + 1 === correctAnswer.length) {
//           setTimeout(() => checkAnswer([...selectedOptions, selectedOption]), 500);
//         }
//       } else {
//         toast.info("You can only select up to the number of correct answers", {
//           className: "cust-toast cust-toast-info",
//           position: "bottom-center",
//           autoClose: 1000,
//         });
//       }
//     }
//   };
//   /////////////////////////////////////////////////////////////////////////////
//   useEffect(() => {
//     // Focus the first input field when the question changes
//     if (inputRefs.current[0]) {
//       inputRefs.current[0].focus();
//     }
//   }, [shuffledQuizData, currentQuestionIndex]); // This will run whenever the question data or index changes

//   useEffect(() => {
//     // Focus the first input field when the component initially renders
//     if (shuffledQuizData.length > 0 && inputRefs.current[0]) {
//       inputRefs.current[0].focus();
//     }
//   }, []); // This runs only once when the component mounts

//   ////////////////////////////////////////////////////////////////////////////////////
//   const checkAnswerFill = () => {

//     const currentQuestion = shuffledQuizData[currentQuestionIndex];

//     const correctAnswerText = currentQuestion.correctAnswer[0].text; // Extracting text from the first object

//     const userInput = inputValues.join(""); // Join the input values to form the complete answer



//     setIsAnswered(true);

//     if (userInput.toLowerCase() === correctAnswerText.toLowerCase()) {

//       let points = parseInt(

//         currentQuestion.questionPoint.replace('"', "").split(" ")[0]

//       );

//       setScore(score + points);

//       setHighlightedCorrectAnswers(correctAnswerText.split(""));

//       toast.success("Correct Answer!", {

//         className: "cust-toast cust-toast-success",

//         position: "bottom-center",

//         autoClose: 1000,

//       });

//     } else {

//       setHighlightedCorrectAnswers(correctAnswerText.split(""));

//       toast.error("Incorrect Answer", {

//         className: "cust-toast cust-toast-error",

//         position: "bottom-center",

//         autoClose: 1000,

//       });

//     }



//     setTimeout(goToNextQuestion, 2000);

//   };




//   const handleInputChange = (index, value) => {

//     if (value.length > 1) return; // Allow only one character



//     const newValues = [...inputValues];

//     newValues[index] = value; // Update the value in the inputValues array

//     setInputValues(newValues);



//     // Move to the next input automatically

//     if (value) {

//       if (inputRefs.current[index + 1]) {

//         inputRefs.current[index + 1].focus(); // Focus next input

//       }

//     }

//   };



//   const handleKeyDown = (index, event) => {

//     if (event.key === "Backspace" && inputValues[index] === "") {

//       // Move focus to the previous input if current is empty

//       if (inputRefs.current[index - 1]) {

//         inputRefs.current[index - 1].focus();

//       }

//     }

//   };

//   // ----------------------------------


//   const checkAnswer = (selected) => {
//     const currentQuestion = shuffledQuizData[currentQuestionIndex];
//     const correctAnswer = currentQuestion.correctAnswer.map((data) => {
//       return data.text || data.image; // Ensure you're getting the correct format
//     });

//     setIsAnswered(true);

//     // Log for debugging
//     console.log("Correct Answer:", correctAnswer);
//     console.log("Selected Answer:", selected);

//     // Check if the selected options match the correct answers (text or image)
//     const isCorrect =
//       correctAnswer.length === selected.length &&
//       correctAnswer.every((answer) => selected.includes(answer));

//     console.log("Is Correct:", isCorrect);

//     if (isCorrect) {
//       let points = parseInt(
//         currentQuestion.questionPoint.replace('"', "").split(" ")[0]
//       );
//       setScore(score + points);
//       setHighlightedCorrectAnswers(correctAnswer);
//       toast.success("Correct Answer!", {
//         className: "cust-toast cust-toast-success",
//         position: "bottom-center",
//         autoClose: 1000,
//       });
//     } else {
//       setHighlightedCorrectAnswers(correctAnswer);
//       setHighlightedIncorrectAnswers(selected);
//       toast.error("Incorrect Answer", {
//         className: "cust-toast cust-toast-error",
//         position: "bottom-center",
//         autoClose: 1000,
//       });
//     }

//     setTimeout(goToNextQuestion, 2000);
//   };


//   const timeProgress =
//     timer > 0
//       ? (timer /
//         (shuffledQuizData.length > 0
//           ? parseInt(
//             shuffledQuizData[currentQuestionIndex].questionTiming
//               .replace('"', "")
//               .split(" ")[0]
//           )
//           : 1)) *
//       100
//       : 0;

//   console.log(parseInt(shuffledQuizData), "shuffledQuizData");

//    if (quizCompleted) {
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
//       <GameEndPage score={score} quizplaypublishid={quizplaypublishid} />
//     );
//   }

//   // Check if currentQuestion is defined
//   const currentQuestion = shuffledQuizData[currentQuestionIndex];
//   if (!currentQuestion) {
//     return (
//       <Box
//         sx={{
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Typography variant="h4" sx={{ color: "black" }}>
//           Loading Question...
//         </Typography>
//         <ToastContainer />
//       </Box>
//     );
//   }

//   const {
//     questionText,
//     options,
//     questionImageUrl,
//     questionVideoUrl,
//     questionAudioUrl,
//     questionType,
//     correctAnswer,
//     questionPoint,
//     questionTiming,
//   } = currentQuestion;



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
//                   sx={{ height: 16, width: 16, backgroundColor: "transparent" }}
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
//                 width: "120px",
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
//                   // position: "absolute",
//                   // top: 0,
//                   // left: 0,
//                   transition: "width 1s linear",
//                 }}
//               >
//                 <Box
//                   sx={{
//                     color: "white",
//                     fontSize: "17px",
//                     fontWeight: "500",
//                     position: "absolute",
//                     left: "50%",
//                     transform: "translateX(-50%)",
//                     top: "50%",
//                     transform: "translate(-50%, -50%)",
//                     height: "auto",
//                     width: "100%",
//                   }}
//                 >
//                   {timer} seconds
//                 </Box>
//               </Box>
//             </Box>
//           </Box>

//           <IconButton
//             sx={{
//               backgroundColor: "rgba(255, 255, 255, 0.2)",
//               color: "white",
//             }}
//           >
//             <SettingsIcon />
//           </IconButton>
//         </Box>
//       </Box>

//       <Paper
//         sx={{
//           width: { sm: "60%", xs: "100%" },
//           maxHeight: "100%",
//           backgroundColor: "rgba(33, 33, 33, 0.5)",
//           border: "1px solid rgba(255, 255, 255, 0.1)",
//           borderRadius: "8px",
//           position: "relative",
//           overflow: "hidden",
//           padding: { xs: 4, sm: 6 },
//           margin: "30px auto 50px",
//         }}
//       >
//         {questionImageUrl ? (
//           <img src={questionImageUrl} alt="question image" />
//         ) : questionAudioUrl ? (
//           <audio controls>
//             <source src={`${baseUrl}${questionAudioUrl}`} type="audio/mp3" />
//             <source src={`${baseUrl}${questionAudioUrl}`} type="audio/x-m4a" />
//             <source src={`${baseUrl}${questionAudioUrl}`} type="audio/mpeg" />
//             <source src={`${baseUrl}${questionAudioUrl}`} type="audio/webm" />
//             Your browser does not support the audio element.
//           </audio>
//         ) : questionVideoUrl ? (
//           <video controls>
//             <source src={`${baseUrl}${questionVideoUrl}`} type="video/mp4" />   {/* MP4 */}
//             <source src={`${baseUrl}${questionVideoUrl}`} type="video/webm" />  {/* WebM */}
//             <source src={`${baseUrl}${questionVideoUrl}`} type="video/ogg" />
//             Your browser does not support the video tag.
//           </video>
//         ) : null}

//         <Box sx={{ textAlign: "center" }}>
//           <Typography variant="h4" sx={{ fontWeight: "bold", color: "white" }}>
//             <div
//               style={{
//                 width: "auto",
//                 objectFit: "cover",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               {/* <div
//                 style={{
//                   marginRight: "30px",
//                 }}
//               >
//                 <img
//                   src={quizz_imge}
//                   alt="Quiz"
//                   style={{
//                     height: "100px",
//                     width: "auto",
//                     objectFit: "cover",
//                   }}
//                 />
//               </div> */}
//               <div>{questionText}</div>
//             </div>
//           </Typography>
//         </Box>
//       </Paper>


//       {JSON.parse(questionType) === "multipleChoice" ? (
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
//               // Check if the answer is correct or incorrect
//               if (highlightedCorrectAnswers.includes(option.text) || highlightedCorrectAnswers.includes(option.image)) {
//                 backgroundColor = "green";
//               } else if (highlightedIncorrectAnswers.includes(option.text) || highlightedIncorrectAnswers.includes(option.image)) {
//                 backgroundColor = "red"; // Make sure to check incorrect answers correctly
//               }
//             } else {
//               // When the question is not answered
//               backgroundColor = (selectedOptions.includes(option.text)) || highlightedCorrectAnswers.includes(option.image)
//                 ? "rgba(255, 255, 255, 0.7)"
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
//                   {option.image !== "" ? (
//                     <div>
//                       <img
//                         src={option.image}
//                         alt="Quiz"
//                         style={{
//                           height: "85px",
//                           width: "auto",
//                           objectFit: "cover",
//                         }}
//                       />
//                       <div
//                         style={{
//                           background: "rgb(255,255,255,.3)",
//                           flex: 1,
//                           // maxWidth: "200%",
//                           color: "white",
//                           fontSize: "18px",
//                           fontWeight: "700",
//                         }}
//                       >
//                         {option.text}
//                       </div>
//                     </div>) :

//                     (<div
//                       style={{
//                         background: "rgb(255,255,255,.3)",
//                         flex: 1,
//                         // maxWidth: "200%",
//                         color: "white",
//                         fontSize: "18px",
//                         fontWeight: "700",
//                       }}
//                     >
//                       {option.text}
//                     </div>)}
//                 </div>
//               </Button>
//             );
//           })}
//         </Box>) :
//         (
//           <Box>
//             <Box

//               sx={{

//                 display: "flex",

//                 justifyContent: "center",

//                 alignItems: "center",

//                 gap: 1,

//                 marginTop: "20px",

//               }}

//             >

//               {correctAnswer[0].text.split("").map((letter, index) => (

//                 <TextField

//                   key={index}

//                   inputRef={(el) => (inputRefs.current[index] = el)}

//                   value={inputValues[index] || ""}

//                   onChange={(event) => handleInputChange(index, event.target.value)}

//                   onKeyDown={(event) => handleKeyDown(index, event)}

//                   inputProps={{

//                     maxLength: 1, // Limit to one character

//                     style: { textAlign: "center", fontSize: "2rem", width: "50px", color: "white", background: "hsl(0deg 0% 100% / 20%)", borderRadius: "5px" },

//                   }}

//                   variant="outlined"

//                   sx={{ margin: "0 5px" }}

//                 />

//               ))}

//             </Box>


//             <Box sx={{display:"flex",justifyContent:"center",width:"100%",paddingRight:"10px"}}>
//               <Button

//                 variant="contained"

//                 onClick={checkAnswerFill}

//                 sx={{ marginTop: "20px" }}

//                 disabled={isAnswered}

//               >

//                 Submit Answer

//               </Button>
//             </Box>
//           </Box>

//         )
//       }

//       <ToastContainer
//         position="bottom-center"
//         autoClose={2000}
//         hideProgressBar={true}
//         closeOnClick
//         pauseOnHover
//         draggable
//         progress={undefined}
//         className="cust-ToastContainer"
//       />
//     </Box >
//   );
// };

// export default QuizPage;













import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Paper, Button, TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { IconButton, Tooltip } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import "./toastStyles.css";
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for styling
import imageUrl from "../../../Assets/bg_image.jpg";
import { useSelector } from "react-redux";
import { logDOM } from "@testing-library/react";
import GameEndPage from "./GameEndPage";
import { adminUrl as baseUrl } from "../../../constants";

import CustomAudioPlayerQuizzPlay from "../../Admin/QuizzPlay/CustomAudioPlayerQuizzPlay";
// import CustomAudioPlayer from "./CustomAudioPlayerQuizzPlay";
// import CustomAudioPlayerQuizzPlay from "../../Admin/QuizzPlay/CustomAudioPlayerQuizzPlay";
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
      // optionsImageUrl:shuffleArray(JSON.parse(question.optionsImageUrl))
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
  const [inputValues, setInputValues] = useState([]); // Initialize inputValues as an empty array

  const inputRefs = useRef([]); // Ref to store input references

  console.log(selectedOptions, "selectedOptionsselectedOptionsselectedOptionsselectedOptions")


  console.log(shuffledQuizData, "shuffledQuizDatashuffledQuizDatashuffledQuizData")

  const [highlightedIncorrectAnswers, setHighlightedIncorrectAnswers] =
    useState([]);
  const optionBgColer = ["#4F75FF", "#00CCDD", "#FF9100", "#F05A7E", "#AD49E1"];
  const quizplaypublishid = useSelector((state) => state?.quizplaypublishid.quizPlayPublishId);
  // const {quizplaypublishid}  = useSelector((state) => state?.quizPlayPublishId);

  console.log(quizplaypublishid, "out side ");

  useEffect(() => {
    // Fetch quiz data from API
    const fetchQuizData = async () => {
      console.log(quizplaypublishid, "quizplaypublishidquizplay");

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
        currentQuestion.questionTiming.replace('"', "").split(" ")[0]
      );

      setSelectedOptions([]);
      setIsAnswered(false);
      setHighlightedCorrectAnswers([]);
      setHighlightedIncorrectAnswers([]);

      setTimer(initialTime);

      // Set inputValues based on the length of the correctAnswer text

      const correctAnswerText = currentQuestion.correctAnswer[0].text; // Get correct answer text

      setInputValues(Array(correctAnswerText.length).fill("")); // Fill inputValues with empty strings based on text length

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
    const currentQuestion = shuffledQuizData[currentQuestionIndex];
    const correctAnswer = currentQuestion.correctAnswer.map(
      (answer) => answer.text || answer.image
    );

    if (correctAnswer.length === 1) {
      const selectedOption = option.image || option.text; // extract relevant property
      setSelectedOptions([selectedOption]);
      setTimeout(() => checkAnswer([selectedOption]), 500);
    } else {
      const selectedOption = option.image || option.text; // extract relevant property
      if (selectedOptions.includes(selectedOption)) {
        setSelectedOptions(selectedOptions.filter((opt) => opt !== selectedOption));
      } else if (selectedOptions.length < correctAnswer.length) {
        setSelectedOptions([...selectedOptions, selectedOption]);
        if (selectedOptions.length + 1 === correctAnswer.length) {
          setTimeout(() => checkAnswer([...selectedOptions, selectedOption]), 500);
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
  /////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    // Focus the first input field when the question changes
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [shuffledQuizData, currentQuestionIndex]); // This will run whenever the question data or index changes

  useEffect(() => {
    // Focus the first input field when the component initially renders
    if (shuffledQuizData.length > 0 && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []); // This runs only once when the component mounts

  ////////////////////////////////////////////////////////////////////////////////////
  const checkAnswerFill = () => {

    const currentQuestion = shuffledQuizData[currentQuestionIndex];

    const correctAnswerText = currentQuestion.correctAnswer[0].text; // Extracting text from the first object

    const userInput = inputValues.join(""); // Join the input values to form the complete answer



    setIsAnswered(true);

    if (userInput.toLowerCase() === correctAnswerText.toLowerCase()) {

      let points = parseInt(

        currentQuestion.questionPoint.replace('"', "").split(" ")[0]

      );

      setScore(score + points);

      setHighlightedCorrectAnswers(correctAnswerText.split(""));

      toast.success("Correct Answer!", {

        className: "cust-toast cust-toast-success",

        position: "bottom-center",

        autoClose: 1000,

      });

    } else {

      setHighlightedCorrectAnswers(correctAnswerText.split(""));

      toast.error("Incorrect Answer", {

        className: "cust-toast cust-toast-error",

        position: "bottom-center",

        autoClose: 1000,

      });

    }



    setTimeout(goToNextQuestion, 2000);

  };




  const handleInputChange = (index, value) => {

    if (value.length > 1) return; // Allow only one character



    const newValues = [...inputValues];

    newValues[index] = value; // Update the value in the inputValues array

    setInputValues(newValues);



    // Move to the next input automatically

    if (value) {

      if (inputRefs.current[index + 1]) {

        inputRefs.current[index + 1].focus(); // Focus next input

      }

    }

  };



  const handleKeyDown = (index, event) => {

    if (event.key === "Backspace" && inputValues[index] === "") {

      // Move focus to the previous input if current is empty

      if (inputRefs.current[index - 1]) {

        inputRefs.current[index - 1].focus();

      }

    }

  };

  // ----------------------------------


  const checkAnswer = (selected) => {
    const currentQuestion = shuffledQuizData[currentQuestionIndex];
    const correctAnswer = currentQuestion.correctAnswer.map((data) => {
      return data.text || data.image; // Ensure you're getting the correct format
    });

    setIsAnswered(true);

    // Log for debugging
    console.log("Correct Answer:", correctAnswer);
    console.log("Selected Answer:", selected);

    // Check if the selected options match the correct answers (text or image)
    const isCorrect =
      correctAnswer.length === selected.length &&
      correctAnswer.every((answer) => selected.includes(answer));

    console.log("Is Correct:", isCorrect);

    if (isCorrect) {
      let points = parseInt(
        currentQuestion.questionPoint.replace('"', "").split(" ")[0]
      );
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

  console.log(parseInt(shuffledQuizData), "shuffledQuizData");

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
      <GameEndPage score={score} quizplaypublishid={quizplaypublishid}/>
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
    questionVideoUrl,
    questionAudioUrl,
    questionType,
    correctAnswer,
    questionPoint,
    questionTiming,
  } = currentQuestion;



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
          display: "flex"
        }}
      >
        {questionImageUrl ? (
          <Box sx={{
            width: "50%",

          }}>
            <img src={questionImageUrl} alt="question image" />
          </Box>
        ) : questionAudioUrl ? (
          // <audio controls>
          //   <source src={`${baseUrl}${questionAudioUrl}`} type="audio/mp3" />
          //   <source src={`${baseUrl}${questionAudioUrl}`} type="audio/x-m4a" />
          //   <source src={`${baseUrl}${questionAudioUrl}`} type="audio/mpeg" />
          //   <source src={`${baseUrl}${questionAudioUrl}`} type="audio/webm" />
          //   Your browser does not support the audio element.
          // </audio>
          <Box sx={{
            width: "40%",
            height:"100%"

          }}> <CustomAudioPlayerQuizzPlay updateAudioURL={questionAudioUrl} /></Box>
        ) : questionVideoUrl ? (
          <Box sx={{
            width: "50%",

          }}>
            <video controls style={{width:"100%"}} >
              <source src={`${baseUrl}${questionVideoUrl}`} type="video/mp4" />   {/* MP4 */}
              <source src={`${baseUrl}${questionVideoUrl}`} type="video/webm" />  {/* WebM */}
              <source src={`${baseUrl}${questionVideoUrl}`} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </Box>
        ) : null}

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

              <div>{questionText}</div>
            </div>
          </Typography>
        </Box>
      </Paper>


      {JSON.parse(questionType) === "multipleChoice" ? (
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
              // Check if the answer is correct or incorrect
              if (highlightedCorrectAnswers.includes(option.text) || highlightedCorrectAnswers.includes(option.image)) {
                backgroundColor = "green";
              } else if (highlightedIncorrectAnswers.includes(option.text) || highlightedIncorrectAnswers.includes(option.image)) {
                backgroundColor = "red"; // Make sure to check incorrect answers correctly
              }
            } else {
              // When the question is not answered
              backgroundColor = (selectedOptions.includes(option.text)) || highlightedCorrectAnswers.includes(option.image)
                ? "rgba(255, 255, 255, 0.7)"
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
                  {option.image !== "" ? (
                    <div>
                      <img
                        src={option.image}
                        alt="Quiz"
                        style={{
                          height: "85px",
                          width: "auto",
                          objectFit: "cover",
                        }}
                      />
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
                        {option.text}
                      </div>
                    </div>) :

                    (<div
                      style={{
                        background: "rgb(255,255,255,.3)",
                        flex: 1,
                        // maxWidth: "200%",
                        color: "white",
                        fontSize: "18px",
                        fontWeight: "700",
                      }}
                    >
                      {option.text}
                    </div>)}
                </div>
              </Button>
            );
          })}
        </Box>) :
        (
          <Box>
            <Box

              sx={{

                display: "flex",

                justifyContent: "center",

                alignItems: "center",

                gap: 1,

                marginTop: "20px",

              }}

            >

              {correctAnswer[0].text.split("").map((letter, index) => (

                <TextField

                  key={index}

                  inputRef={(el) => (inputRefs.current[index] = el)}

                  value={inputValues[index] || ""}

                  onChange={(event) => handleInputChange(index, event.target.value)}

                  onKeyDown={(event) => handleKeyDown(index, event)}

                  inputProps={{

                    maxLength: 1, // Limit to one character

                    style: { textAlign: "center", fontSize: "2rem", width: "50px", color: "white", background: "hsl(0deg 0% 100% / 20%)", borderRadius: "5px" },

                  }}

                  variant="outlined"

                  sx={{ margin: "0 5px" }}

                />

              ))}

            </Box>


            <Box sx={{ display: "flex", justifyContent: "center", width: "100%", paddingRight: "10px" }}>
              <Button

                variant="contained"

                onClick={checkAnswerFill}

                sx={{ marginTop: "20px" }}

                disabled={isAnswered}

              >

                Submit Answer

              </Button>
            </Box>
          </Box>

        )
      }

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
    </Box >
  );
};

export default QuizPage;




