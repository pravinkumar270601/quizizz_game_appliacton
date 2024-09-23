// // import React from 'react';
// // import { Box, Typography, Paper, IconButton } from '@mui/material';

// // const StartForm = () => {
// //   return (
// //     <Box
// //       display="flex"
// //       flexDirection="column"
// //       gap={2}
// //       borderRadius={1}
// //       border="1px solid"
// //       borderColor="primary.light"
// //       minWidth="100px" // 72 * 4 (to convert from tailwind units to px)
// //       height="100%"
// //       py={3}
// //       px={2}
// //       width="25%"
// //       bgcolor="light.300" // Customize this with your theme or use a color from the MUI palette
// //     >
// //       <Typography variant="h6" fontWeight="fontWeightBold" color="text.primary">
// //         Start from
// //       </Typography>

// //       <Paper
// //         elevation={0}
// //         sx={{
// //           display: 'flex',
// //           flexDirection: 'row',
// //           gap: 1,
// //           alignItems: 'center',
// //           borderRadius: 2,
// //           p: 2,
// //           cursor: 'pointer',
// //           bgcolor: 'primary.lighter', // Adjust the color as needed
// //         }}
// //         data-testid="pre_made_questions"
// //       >
// //         <IconButton sx={{ p: 0, width: 40, height: 40 }}>
// //           <img
// //             src="https://cf.quizizz.com/CreateWithAIV2/pre_made_questions.png"
// //             alt="Import worksheets"
// //             style={{ borderRadius: 'inherit', width: '100%', height: '100%' }}
// //           />
// //         </IconButton>
// //         <Typography variant="body2" fontWeight="fontWeightBold">
// //           Import worksheets
// //         </Typography>
// //       </Paper>

      

// //       <Paper
// //         elevation={0}
// //         sx={{
// //           display: 'flex',
// //           flexDirection: 'row',
// //           gap: 1,
// //           alignItems: 'center',
// //           borderRadius: 2,
// //           p: 2,
// //           cursor: 'pointer',
// //         }}
// //         data-testid="start_from_scratch"
// //       >
// //         <IconButton sx={{ p: 0, width: 40, height: 40 }}>
// //           <img
// //             src="https://cf.quizizz.com/CreateWithAIV2/create_from_scratch.png"
// //             alt="Create from scratch"
// //             style={{ borderRadius: 'inherit', width: '100%', height: '100%' }}
// //           />
// //         </IconButton>
// //         <Typography variant="body2" fontWeight="fontWeightBold">
// //           Create from scratch
// //         </Typography>
// //       </Paper>
// //     </Box>
// //   );
// // };

// // export default StartForm;


// import React from 'react';
// import { Box, Typography, Paper, IconButton } from '@mui/material';

// const StartForm = ({ onComponentSelect }) => {
//   return (
//     <Box
//     //   display="flex"
//     //   flexDirection="column"
//     //   gap={2}
//     //   borderRadius={1}
//     //   border="1px solid"
//     //   borderColor="primary.light"
//     //   minWidth="100px"
//     //   height="100%"
//     //   py={3}
//     //   px={2}
//     //   width="25%"
//     //   bgcolor="light.300"
//     >
//       <Typography variant="h6" fontWeight="fontWeightBold" color="text.primary">
//         Start from
//       </Typography>

//       <Paper
//         elevation={0}
//         sx={{
//           display: 'flex',
//           flexDirection: 'row',
//           gap: 1,
//           alignItems: 'center',
//           borderRadius: 2,
//           p: 2,
//           cursor: 'pointer',
//           bgcolor: 'primary.lighter',
//         }}
//         onClick={() => onComponentSelect('WorksheetTabs')}
//         data-testid="pre_made_questions"
//       >
//         <IconButton sx={{ p: 0, width: 40, height: 40 }}>
//           <img
//             src="https://cf.quizizz.com/CreateWithAIV2/pre_made_questions.png"
//             alt="Import worksheets"
//             style={{ borderRadius: 'inherit', width: '100%', height: '100%' }}
//           />
//         </IconButton>
//         <Typography variant="body2" fontWeight="fontWeightBold">
//           Import worksheets
//         </Typography>
//       </Paper>

//       <Paper
//         elevation={0}
//         sx={{
//           display: 'flex',
//           flexDirection: 'row',
//           gap: 1,
//           alignItems: 'center',
//           borderRadius: 2,
//           p: 2,
//           cursor: 'pointer',
//         }}
//         onClick={() => onComponentSelect('AnotherComponent')}
//         data-testid="start_from_scratch"
//       >
//         <IconButton sx={{ p: 0, width: 40, height: 40 }}>
//           <img
//             src="https://cf.quizizz.com/CreateWithAIV2/create_from_scratch.png"
//             alt="Create from scratch"
//             style={{ borderRadius: 'inherit', width: '100%', height: '100%' }}
//           />
//         </IconButton>
//         <Typography variant="body2" fontWeight="fontWeightBold">
//           Create from scratch
//         </Typography>
//       </Paper>
//     </Box>
//   );
// };

// export default StartForm;

import React from 'react';
import { Box, Typography, Paper, IconButton } from '@mui/material';

const StartForm = ({ onComponentSelect }) => {
  return (
    <Box
    //   display="flex"
    //   flexDirection="column"
    //   gap={2}
    //   borderRadius={1}
    //   border="1px solid"
    //   borderColor="primary.light"
    //   minWidth="100px"
    //   height="100%"
    //   py={3}
    //   px={2}
    //   width="100%" // Make the Box responsive
    //   maxWidth="400px" // You can set a maxWidth to control the box size
    //   bgcolor="light.300"
    //   mx="auto" // Center the box
    >
      <Typography
        variant="h6"
        fontWeight="fontWeightBold"
        color="text.primary"
        textAlign="center" // Center text
        mb={2} // Add margin-bottom
      >
        Start from
      </Typography>

      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 1,
          alignItems: 'center',
          flexWrap: 'wrap', // Ensure content wraps when the screen is small
          borderRadius: 2,
          p: 2,
          cursor: 'pointer',
          bgcolor: 'primary.lighter',
        }}
        onClick={() => onComponentSelect('WorksheetTabs')}
        data-testid="pre_made_questions"
      >
        <IconButton sx={{ p: 0, width: 40, height: 40 }}>
          <img
            src="https://cf.quizizz.com/CreateWithAIV2/pre_made_questions.png"
            alt="Import worksheets"
            style={{ borderRadius: 'inherit', width: '100%', height: '100%' }}
          />
        </IconButton>
        <Typography variant="body2" fontWeight="fontWeightBold" sx={{ flexGrow: 1 }}>
          Import worksheets
        </Typography>
      </Paper>

      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 1,
          alignItems: 'center',
          flexWrap: 'wrap', // Ensure content wraps when the screen is small
          borderRadius: 2,
          p: 2,
          cursor: 'pointer',
        }}
        onClick={() => onComponentSelect('AnotherComponent')}
        data-testid="start_from_scratch"
      >
        <IconButton sx={{ p: 0, width: 40, height: 40 }}>
          <img
            src="https://cf.quizizz.com/CreateWithAIV2/create_from_scratch.png"
            alt="Create from scratch"
            style={{ borderRadius: 'inherit', width: '100%', height: '100%' }}
          />
        </IconButton>
        <Typography variant="body2" fontWeight="fontWeightBold" sx={{ flexGrow: 1 }}>
          Create from scratch
        </Typography>
      </Paper>
    </Box>
  );
};

export default StartForm;
