





// import React, { useState } from 'react';

// const FIllPlay = ({ options }) => {
//   const [userInputs, setUserInputs] = useState(
//     options.reduce((acc, option) => {
//       acc[option.id] = Array(option.text.length).fill(''); // Initialize with empty strings
//       return acc;
//     }, {})
//   );

//   const handleChange = (optionId, index, value) => {
//     if (value.length <= 1) { // Ensure only one character is allowed
//       setUserInputs((prev) => ({
//         ...prev,
//         [optionId]: prev[optionId].map((input, i) => (i === index ? value : input)), // Update the specific input
//       }));
//     }
//   };

//   return (
//     <div>
//       {options.map((option) => {
//         const optionTextArray = option.text.split(''); // Split the string into an array of characters

//         return (
//           <div key={option.id} style={{ display: "flex", justifyContent: "space-between" }}>
//             {optionTextArray.map((char, index) => (
//               <div key={index} style={{ marginRight: "10px" }}>
//                 <input
//                   type="text"
//                   maxLength={1} // Restrict input to 1 character
//                   value={userInputs[option.id][index] || ''} // Set the value from the state
//                   style={{
//                     border: "1px solid white",
//                     height: "50px",
//                     width: "50px",
//                     textAlign: "center",
//                     outline: "none",
//                     backgroundColor: "transparent"
//                   }}
//                   onChange={(e) => handleChange(option.id, index, e.target.value)} // Update state on change
//                 />
//               </div>
//             ))}
//           </div>
//         );
//       })}

//       {/* Display a message if user inputs match the option text */}
//       {options.map((option) => (
//         <div key={option.id}>
//           {userInputs[option.id].join('') === option.text // Join the array back into a string for comparison
//             ? <p style={{ color: 'green' }}>Match!</p>
//             : <p style={{ color: 'red' }}>Not a match</p>}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FIllPlay;


import React, { useState } from 'react';

const FIllPlay = ({ options }) => {
  const [userInputs, setUserInputs] = useState(
    options.reduce((acc, option) => {
      acc[option.id] = Array(option.text.length).fill(''); // Initialize with empty strings
      return acc;
    }, {})
  );

  const handleChange = (optionId, index, value, inputRef) => {
    if (value.length <= 1) { // Ensure only one character is allowed
      setUserInputs((prev) => ({
        ...prev,
        [optionId]: prev[optionId].map((input, i) => (i === index ? value : input)), // Update the specific input
      }));

      // Move to the next box if a character is entered
      if (value && inputRef.current.nextSibling) {
        inputRef.current.nextSibling.querySelector('input').focus();
      }
    }
  };

  const handleKeyDown = (optionId, index, e, inputRef) => {
    if (e.key === 'Backspace' && !userInputs[optionId][index]) {
      // If the current input is empty, move to the previous box
      if (inputRef.current.previousSibling) {
        inputRef.current.previousSibling.querySelector('input').focus();
      }
    }
  };

  return (
    <div>
      {options.map((option) => {
        const optionTextArray = option.text.split(''); // Split the string into an array of characters

        return (
          <div key={option.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
            {optionTextArray.map((char, index) => {
              const inputRef = React.createRef(); // Create a ref for each input

              return (
                <div key={index} ref={inputRef} style={{ marginRight: '10px' }}>
                  <input
                    type="text"
                    maxLength={1} // Restrict input to 1 character
                    value={userInputs[option.id][index] || ''} // Set the value from the state
                    style={{
                      border: '1px solid white',
                      height: '50px',
                      width: '50px',
                      textAlign: 'center',
                      outline: 'none',
                      backgroundColor: 'transparent',
                    }}
                    onChange={(e) => handleChange(option.id, index, e.target.value, inputRef)} // Update state on change
                    onKeyDown={(e) => handleKeyDown(option.id, index, e, inputRef)} // Handle backspace and navigation
                  />
                </div>
              );
            })}
          </div>
        );
      })}

      {/* Display a message if user inputs match the option text */}
      {options.map((option) => (
        <div key={option.id}>
          {userInputs[option.id].join('') === option.text // Join the array back into a string for comparison
            ? <p style={{ color: 'green' }}>Match!</p>
            : <p style={{ color: 'red' }}>Not a match</p>}
        </div>
      ))}
    </div>
  );
};

export default FIllPlay;
