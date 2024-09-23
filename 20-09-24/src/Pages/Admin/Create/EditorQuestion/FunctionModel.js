// // import React from 'react';
// // import { Popper, Button, IconButton, Paper } from '@mui/material';
// // import { DragHandle, Close } from '@mui/icons-material';

// // const CustomPopper = ({ anchorEl, open, onClose }) => {
// //   return (
// //     <Popper open={open} anchorEl={anchorEl} placement="bottom-start">
// //       <Paper
// //         sx={{
// //           padding: '8px',
// //           display: 'flex',
// //           justifyContent: 'space-between',
// //           alignItems: 'center',
// //           width: '300px',
// //           height: 'auto',
// //         }}
// //       >
// //         <IconButton
// //           sx={{ fontSize: '12px' }}
// //           aria-label="drag handle"
// //           onClick={() => console.log('Move button clicked')}
// //         >
// //           <DragHandle fontSize="inherit" />
// //         </IconButton>
// //         <IconButton
// //           sx={{ fontSize: '12px' }}
// //           aria-label="close"
// //           onClick={onClose}
// //         >
// //           <Close fontSize="inherit" />
// //         </IconButton>
// //       </Paper>
// //     </Popper>
// //   );
// // };

// // export default CustomPopper;



// import React, { useState } from 'react';
// import { Popper, Button, IconButton, Paper, Box, Typography } from '@mui/material';
// import { DragHandle, Close } from '@mui/icons-material';

// const TabMenu = () => {
//   const [activeTab, setActiveTab] = useState('math');

//   const tabs = [
//     { label: 'math', value: 'math' },
//     { label: 'greek', value: 'greek' },
//     { label: 'latin', value: 'latin' },
//     { label: 'currency', value: 'currency' },
//     { label: 'emoji', value: 'emoji' },
//   ];

//   return (
//     <Box
//       component="ul"
//       sx={{
//         listStyleType: 'none',
//         display: 'flex',
//         flexDirection: 'row',
//         borderBottom: '1px solid #333',
//         padding: 0,
//         margin: 0,
//       }}
//     >
//       {tabs.map((tab) => (
//         <Box
//           component="li"
//           key={tab.value}
//           onClick={() => setActiveTab(tab.value)}
//           sx={{
//             textTransform: 'capitalize',
//             width: 60,
//             height: 32,
//             paddingTop: 0.5,
//             position: 'relative',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             fontSize: '0.75rem',
//             fontWeight: 600,
//             cursor: 'pointer',
//             color: activeTab === tab.value ? '#a8a' : '#666',
//           }}
//         >
//           <Typography>{tab.label}</Typography>
//           {activeTab === tab.value && (
//             <Box
//               className="list-item-underline"
//               sx={{
//                 width: '100%',
//                 height: '4px',
//                 backgroundColor: '#a8a',
//                 bottom: 0,
//                 position: 'absolute',
//               }}
//             />
//           )}
//         </Box>
//       ))}
//     </Box>
//   );
// };

// const CustomPopper = ({ anchorEl, open, onClose }) => {
//   return (
//     <Popper open={open} anchorEl={anchorEl} placement="bottom-start">
//       <Paper
//         sx={{
//           padding: '8px',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           width: '300px',
//           height: 'auto',
//         }}
//       >
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             width: '100%',
//             alignItems: 'center',
//             mb: 2,
//           }}
//         >
//           <IconButton
//             sx={{ fontSize: '12px' }}
//             aria-label="drag handle"
//             onClick={() => console.log('Move button clicked')}
//           >
//             <DragHandle fontSize="inherit" />
//           </IconButton>
//           <IconButton
//             sx={{ fontSize: '12px' }}
//             aria-label="close"
//             onClick={onClose}
//           >
//             <Close fontSize="inherit" />
//           </IconButton>
//         </Box>
//         <TabMenu />
//       </Paper>
//     </Popper>
//   );
// };

// export default CustomPopper;



import React, { useState } from 'react';
import { Popper, IconButton, Paper, Box, Typography } from '@mui/material';
import { DragHandle, Close } from '@mui/icons-material';
import Math from './Math';

const TabMenu = ({ activeTab, setActiveTab }) => {
    const tabs = [
        { label: 'math', value: 'math' },
        { label: 'greek', value: 'greek' },
        { label: 'latin', value: 'latin' },
        { label: 'currency', value: 'currency' },
        { label: 'emoji', value: 'emoji' },
    ];

    return (
        <Box
            component="ul"
            sx={{
                listStyleType: 'none',
                display: 'flex',
                flexDirection: 'row',
                borderBottom: '1px solid #333',
                padding: 0,
                margin: 0,
            }}
        >
            {tabs.map((tab) => (
                <Box
                    component="li"
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value)}
                    sx={{
                        textTransform: 'capitalize',
                        width: 60,
                        height: 32,
                        paddingTop: 0.5,
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        color: activeTab === tab.value ? '#a8a' : '#666',
                    }}
                >
                    <Typography>{tab.label}</Typography>
                    {activeTab === tab.value && (
                        <Box
                            className="list-item-underline"
                            sx={{
                                width: '100%',
                                height: '4px',
                                backgroundColor: '#a8a',
                                bottom: 0,
                                position: 'absolute',
                            }}
                        />
                    )}
                </Box>
            ))}
        </Box>
    );
};

const CustomPopper = ({ anchorEl, open, onClose }) => {
    const [activeTab, setActiveTab] = useState('math');

    const renderContent = () => {
        switch (activeTab) {
            case 'math':
                return <Math />;
            case 'greek':
                return <div>Greek content</div>;
            case 'latin':
                return <div>Latin content</div>;
            case 'currency':
                return <div>Currency content</div>;
            case 'emoji':
                return <div>Emoji content</div>;
            default:
                return null;
        }
    };

    return (
        <Popper open={open} anchorEl={anchorEl} placement="bottom-start">
            <Paper
                sx={{
                    padding: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '300px',
                    height: 'auto',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        alignItems: 'center',
                        mb: 2,
                    }}
                >
                    <IconButton
                        sx={{ fontSize: '12px' }}
                        aria-label="drag handle"
                        onClick={() => console.log('Move button clicked')}
                    >
                        <DragHandle fontSize="inherit" />
                    </IconButton>
                    <IconButton
                        sx={{ fontSize: '12px' }}
                        aria-label="close"
                        onClick={onClose}
                    >
                        <Close fontSize="inherit" />
                    </IconButton>
                </Box>
                <TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />
                <Box sx={{ marginTop: '16px', width: '100%' }}>
                    {renderContent()}
                </Box>
                <Box
                    sx={{
                        height: '2.5rem', // Equivalent to h-10 in Tailwind (40px)
                        maxWidth: '75%', // Equivalent to max-w-75 in Tailwind
                        borderTop: '1px solid', // Equivalent to border-t
                        borderColor: 'darkgrey', // Equivalent to border-dark-6 (use your theme's color)
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        color: 'darkgrey', // Equivalent to text-dark-2 (use your theme's color)
                        fontSize: '0.75rem', // Equivalent to text-xs in Tailwind (12px)
                        fontWeight: '600', // Equivalent to font-semibold in Tailwind
                    }}
                >
                    {/* Add content here if needed */}
                    valla
                </Box>
            </Paper>
        </Popper>
    );
};

export default CustomPopper;
