// // // import React, { useState } from 'react';
// // // import { Box, Typography } from '@mui/material';
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // import { faFile, faAlignLeft, faFileText, faTable } from '@fortawesome/free-solid-svg-icons';

// // // const WorksheetTabs = () => {
// // //   const [activeTab, setActiveTab] = useState('document');

// // //   const handleTabClick = (tab) => {
// // //     setActiveTab(tab);
// // //   };

// // //   const tabs = [
// // //     { id: 'document', label: 'Document', icon: faFile },
// // //     { id: 'text', label: 'Paste questions', icon: faAlignLeft },
// // //     { id: 'google_form', label: 'Google Form', icon: faFileText },
// // //     { id: 'spreadsheet', label: 'Spreadsheet', icon: faTable },
// // //   ];

// // //   return (
// // //     <Box className="w-full h-14 rounded border border-ds-dark-500-20">
// // //       <Box
// // //         className="tabs flex relative h-[54px] items-center bg-light-3 rounded"
// // //         sx={{
// // //           display: 'flex',
// // //           alignItems: 'center',
// // //           height: 54,
// // //           backgroundColor: '#f5f5f5',
// // //           borderRadius: 1,
// // //           position: 'relative',
// // //         }}
// // //       >
// // //         {tabs.map((tab) => (
// // //           <Box
// // //             key={tab.id}
// // //             className={`relative font-semibold cursor-pointer text-center hover:text-lilac flex-grow basis-0 px-6 py-2 ${
// // //               activeTab === tab.id ? 'text-lilac' : 'text-dark-4'
// // //             }`}
// // //             onClick={() => handleTabClick(tab.id)}
// // //             sx={{
// // //               flexGrow: 1,
// // //               textAlign: 'center',
// // //               paddingX: 6,
// // //               paddingY: 2,
// // //               cursor: 'pointer',
// // //               color: activeTab === tab.id ? '#8e44ad' : '#2c3e50',
// // //               '&:hover': {
// // //                 color: '#8e44ad',
// // //               },
// // //             }}
// // //           >
// // //             <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
// // //               <FontAwesomeIcon icon={tab.icon} style={{ fontSize: 20, marginRight: 8 }} />
// // //               <Typography>{tab.label}</Typography>
// // //             </Box>
// // //           </Box>
// // //         ))}

// // //         <Box
// // //           className="absolute bottom-0 transition-all duration-200 ease-in-out bg-lilac flex justify-center h-1"
// // //           sx={{
// // //             position: 'absolute',
// // //             bottom: 0,
// // //             left: `${tabs.findIndex((tab) => tab.id === activeTab) * 25}%`,
// // //             width: '25%',
// // //             height: 4,
// // //             backgroundColor: '#8e44ad',
// // //             transition: 'left 0.2s ease-in-out',
// // //           }}
// // //         />
// // //       </Box>
// // //     </Box>
// // //   );
// // // };

// // // export default WorksheetTabs;



// // import React, { useState } from 'react';
// // import { Box, Typography } from '@mui/material';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faFile, faAlignLeft, faFileText, faTable } from '@fortawesome/free-solid-svg-icons';

// // const DocumentComponent = () => <div>Document Content</div>;
// // const TextComponent = () => <div>Text Questions Content</div>;
// // const GoogleFormComponent = () => <div>Google Form Content</div>;
// // const SpreadsheetComponent = () => <div>Spreadsheet Content</div>;

// // const WorksheetTabs = () => {
// //   const [activeTab, setActiveTab] = useState('document');

// //   const handleTabClick = (tab) => {
// //     setActiveTab(tab);
// //   };

// //   const tabs = [
// //     { id: 'document', label: 'Document', icon: faFile },
// //     { id: 'text', label: 'Paste questions', icon: faAlignLeft },
// //     { id: 'google_form', label: 'Google Form', icon: faFileText },
// //     { id: 'spreadsheet', label: 'Spreadsheet', icon: faTable },
// //   ];

// //   const renderContent = () => {
// //     switch (activeTab) {
// //       case 'document':
// //         return <DocumentComponent />;
// //       case 'text':
// //         return <TextComponent />;
// //       case 'google_form':
// //         return <GoogleFormComponent />;
// //       case 'spreadsheet':
// //         return <SpreadsheetComponent />;
// //       default:
// //         return null;
// //     }
// //   };

// //   return (
// //     <Box >
// //       <Box className="w-full h-14 rounded border border-ds-dark-500-20">
// //         <Box
// //           className="tabs flex relative h-[54px] items-center bg-light-3 rounded"
// //           sx={{
// //             display: 'flex',
// //             alignItems: 'center',
// //             height: 54,
// //             backgroundColor: '#f5f5f5',
// //             borderRadius: 1,
// //             position: 'relative',
// //           }}
// //         >
// //           {tabs.map((tab) => (
// //             <Box
// //               key={tab.id}
// //               className={`relative font-semibold cursor-pointer text-center hover:text-lilac flex-grow basis-0 px-6 py-2 ${
// //                 activeTab === tab.id ? 'text-lilac' : 'text-dark-4'
// //               }`}
// //               onClick={() => handleTabClick(tab.id)}
// //               sx={{
// //                 flexGrow: 1,
// //                 textAlign: 'center',
// //                 paddingX: 6,
// //                 paddingY: 2,
// //                 cursor: 'pointer',
// //                 color: activeTab === tab.id ? '#8e44ad' : '#2c3e50',
// //                 '&:hover': {
// //                   color: '#8e44ad',
// //                 },
// //               }}
// //             >
// //               <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
// //                 <FontAwesomeIcon icon={tab.icon} style={{ fontSize: 20, marginRight: 8 }} />
// //                 <Typography>{tab.label}</Typography>
// //               </Box>
// //             </Box>
// //           ))}

// //           <Box
// //             className="absolute bottom-0 transition-all duration-200 ease-in-out bg-lilac flex justify-center h-1"
// //             sx={{
// //               position: 'absolute',
// //               bottom: 0,
// //               left: `${tabs.findIndex((tab) => tab.id === activeTab) * 25}%`,
// //               width: '25%',
// //               height: 4,
// //               backgroundColor: '#8e44ad',
// //               transition: 'left 0.2s ease-in-out',
// //             }}
// //           />
// //         </Box>
// //       </Box>

// //       <Box mt={2}>
// //         {renderContent()}
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default WorksheetTabs;

// import React, { useState } from 'react';
// import { Box, Typography } from '@mui/material';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFile, faAlignLeft, faFileText, faTable } from '@fortawesome/free-solid-svg-icons';

// const DocumentComponent = () => <div>Document Content</div>;
// const TextComponent = () => <div>Text Questions Content</div>;
// const GoogleFormComponent = () => <div>Google Form Content</div>;
// const SpreadsheetComponent = () => <div>Spreadsheet Content</div>;

// const WorksheetTabs = () => {
//   const [activeTab, setActiveTab] = useState('document');

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const tabs = [
//     { id: 'document', label: 'Document', icon: faFile },
//     { id: 'text', label: 'Paste questions', icon: faAlignLeft },
//     { id: 'google_form', label: 'Google Form', icon: faFileText },
//     { id: 'spreadsheet', label: 'Spreadsheet', icon: faTable },
//   ];

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'document':
//         return <DocumentComponent />;
//       case 'text':
//         return <TextComponent />;
//       case 'google_form':
//         return <GoogleFormComponent />;
//       case 'spreadsheet':
//         return <SpreadsheetComponent />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{
//         width: '100%',
//         height: '54px',
//         border: '1px solid #d3d3d3',
//         borderRadius: '4px',
//         overflow: 'hidden'
//       }}>
//         <Box
//           sx={{
//             display: 'flex',
//             alignItems: 'center',
//             height: '100%',
//             backgroundColor: '#f5f5f5',
//             borderRadius: '4px',
//             position: 'relative'
//           }}
//         >
//           {tabs.map((tab) => (
//             <Box
//               key={tab.id}
//               sx={{
//                 flexGrow: 1,
//                 textAlign: 'center',
//                 paddingX: 2,
//                 paddingY: 1,
//                 cursor: 'pointer',
//                 color: activeTab === tab.id ? '#8e44ad' : '#2c3e50',
//                 '&:hover': {
//                   color: '#8e44ad',
//                 },
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center'
//               }}
//               onClick={() => handleTabClick(tab.id)}
//             >
//               <FontAwesomeIcon icon={tab.icon} style={{ fontSize: 20, marginRight: 8 }} />
//               <Typography>{tab.label}</Typography>
//             </Box>
//           ))}

//           <Box
//             sx={{
//               position: 'absolute',
//               bottom: 0,
//               left: `${tabs.findIndex((tab) => tab.id === activeTab) * (100 / tabs.length)}%`,
//               width: `${100 / tabs.length}%`,
//               height: '4px',
//               backgroundColor: '#8e44ad',
//               transition: 'left 0.2s ease-in-out'
//             }}
//           />
//         </Box>
//       </Box>

//       <Box mt={2} sx={{ paddingX: 2 }}>
//         {renderContent()}
//       </Box>
//     </Box>
//   );
// };

// export default WorksheetTabs;

import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faAlignLeft, faFileText, faTable } from '@fortawesome/free-solid-svg-icons';

const DocumentComponent = () => <div>Document Content</div>;
const TextComponent = () => <div>Text Questions Content</div>;
const GoogleFormComponent = () => <div>Google Form Content</div>;
const SpreadsheetComponent = () => <div>Spreadsheet Content</div>;

const WorksheetTabs = () => {
  const [activeTab, setActiveTab] = useState('document');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    { id: 'document', label: 'Document', icon: faFile },
    { id: 'text', label: 'Paste questions', icon: faAlignLeft },
    { id: 'google_form', label: 'Google Form', icon: faFileText },
    { id: 'spreadsheet', label: 'Spreadsheet', icon: faTable },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'document':
        return <DocumentComponent />;
      case 'text':
        return <TextComponent />;
      case 'google_form':
        return <GoogleFormComponent />;
      case 'spreadsheet':
        return <SpreadsheetComponent />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: '100%',height:"70vh" }}>
      <Box sx={{
        width: '100%',
        height: '12%',
        border: '1px solid #09090933',
        borderRadius: '4px',
        overflow: 'hidden'

      }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px',
            position: 'relative'
          }}
        >
          {tabs.map((tab) => (
            <Box
              key={tab.id}
              sx={{
                flexGrow: 1,
                textAlign: 'center',
                paddingX: 1,
                paddingY: 1,
                cursor: 'pointer',
                color: activeTab === tab.id ? '#8e44ad' : '#2c3e50',
                '&:hover': {
                  color: '#8e44ad',
                },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
              onClick={() => handleTabClick(tab.id)}
            >
              <FontAwesomeIcon icon={tab.icon} style={{ fontSize: 20, marginRight: 8 }} />
              <Typography noWrap>{tab.label}</Typography>
            </Box>
          ))}

          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: `${(100 / tabs.length) * tabs.findIndex((tab) => tab.id === activeTab)}%`,
              width: `${100 / tabs.length}%`,
              height: '4px',
              backgroundColor: '#8e44ad',
              transition: 'left 0.2s ease-in-out'
            }}
          />
        </Box>
      </Box>

      <Box mt={2} sx={{ paddingX: 2 ,height:"98%",border:"1px solid #09090933"}}>
        {renderContent()}
      </Box>
    </Box>
  );
};

export default WorksheetTabs;
