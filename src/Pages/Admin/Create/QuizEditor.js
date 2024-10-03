// import { Box } from '@mui/material'
// import React from 'react'
// import StartForm from './StartForm'
// import WorksheetTabs from './WorsheetTabs'


// const QuizEditor = () => {
//   return (
//     <Box sx={{display:"flex",justifyContent:"space-around"}}>
//       <StartForm  />
//       <WorksheetTabs />
//     </Box>
//   )
// }

// export default QuizEditor



import React, { useState } from 'react';
import { Box } from '@mui/material';
import StartForm from './StartForm';
import WorksheetTabs from "./WorsheetTabs"
import CreateScratch from './CreateScratch';

const QuizEditor = ({selectedComponent,setSelectedComponent}) => {
  // const [selectedComponent, setSelectedComponent] = useState("WorksheetTabs");

  const handleComponentChange = (component) => {
    setSelectedComponent(component);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-around", m: 3, gap: 2 }}>
      <Box
        display="flex"
        flexDirection="column"
        gap={2}
        borderRadius={1}
        border="1px solid"
        borderColor="#09090933"
        // minWidth="100px"
        height="80vh"
        py={3}
        px={2}
        width="25%"
        bgcolor="light.300"
        mx="auto"
        // overflow="hidden" // Ensures that any overflow is hidden
        textOverflow="ellipsis" // Adds ellipsis (...) to overflowing text
        // whiteSpace="nowrap"

      >
        <StartForm onComponentSelect={handleComponentChange} />
      </Box>
      <Box sx={{ width: "75%" , height:"80vh"}}>
        {selectedComponent === 'WorksheetTabs' && <WorksheetTabs />}
     
      
        {selectedComponent === 'AnotherComponent' && <CreateScratch />}
      </Box>
    </Box >
  );
};

export default QuizEditor;
