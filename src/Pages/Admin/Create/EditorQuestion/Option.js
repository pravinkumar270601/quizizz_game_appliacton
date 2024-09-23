import React, { useState } from 'react';
import { Box, Button, IconButton, TextField } from '@mui/material';
import { faTrashAlt, faImage, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Option = ({ option, index, onDelete, onMarkCorrect }) => {
  return (
    <Box
      className={`question-option relative rounded-lg h-full max-h-full overflow-y-auto overflow-x-hidden flex flex-row-reverse md:flex-col p-1 gap-2 group`}
      style={{ backgroundColor: option.backgroundColor }}
      data-testid={`question-option-${index + 1}`}
    >
      <Box className="action-center flex flex-col md:flex-row gap-2" style={{ flex: '0 0 auto' }}>
        <IconButton
          className="transition-colors duration-200 ease-in-out flex items-center justify-center w-6 h-6 transparent bg-light-20% text-light-3 hover:bg-light-33% active:bg-light-10% rounded relative min-w-max flex-shrink-0"
          aria-label="Delete option"
          onClick={() => onDelete(index)}
          data-testid="delete-option-button"
        >
          <FontAwesomeIcon icon={faTrashAlt} style={{ fontSize: '11px' }} />
        </IconButton>
        <IconButton
          className="transition-colors duration-200 ease-in-out flex items-center justify-center w-6 h-6 transparent bg-light-20% text-light-3 hover:bg-light-33% active:bg-light-10% rounded relative min-w-max flex-shrink-0"
          aria-label="Upload image"
          data-testid="upload-image-button"
        >
          <FontAwesomeIcon icon={faImage} style={{ fontSize: '11px' }} />
        </IconButton>
        <IconButton
          className="transition-colors duration-200 ease-in-out flex items-center justify-center w-6 h-6 bg-dark-50% text-light hover:bg-dark-60% active:bg-dark-50% rounded dark relative min-w-max border-2 text-light-50% ml-auto rounded-full border-light"
          aria-label="Mark correct answer"
          onClick={() => onMarkCorrect(index)}
          data-testid={`mcq-editor-mark-answer-${index}-button`}
        >
          <FontAwesomeIcon icon={faCheck} style={{ fontSize: '11px' }} />
        </IconButton>
      </Box>
      <Box
        className="tiptap-mini flex flex-col justify-center relative p-2 text-light-3 text-center rounded text-lg overflow-y-auto h-full w-full max-h-full break-word"
        data-testid="question-option-text"
        style={{ fontSize: '20px' }}
      >
        <TextField
          fullWidth
          multiline
          variant="outlined"
          placeholder="Type answer option here"
          value={option.text}
          onChange={(e) => option.setText(e.target.value)}
        />
      </Box>
    </Box>
  );
};

const QuestionOptions = () => {
  const [options, setOptions] = useState([
    { text: '', backgroundColor: 'rgb(45, 112, 174)' },
    { text: '', backgroundColor: 'rgb(45, 157, 166)' },
    { text: '', backgroundColor: 'rgb(239, 169, 41)' },
    { text: '', backgroundColor: 'rgb(213, 84, 109)' },
  ]);

  const handleDeleteOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  const handleMarkCorrect = (index) => {
    alert(`Option ${index + 1} marked as correct!`);
  };

  const handleAddOption = () => {
    if (options.length < 5) {
      setOptions([...options, { text: '', backgroundColor: 'rgb(154, 66, 146)' }]);
    }
  };

  return (
    <Box className="options-container flex flex-col md:flex-row w-full h-full gap-2">
      <Box className="grid md:grid-flow-col md:auto-cols-fr w-full h-full gap-2">
        {options.map((option, index) => (
          <Option
            key={index}
            option={option}
            index={index}
            onDelete={handleDeleteOption}
            onMarkCorrect={handleMarkCorrect}
          />
        ))}
      </Box>
      {options.length < 5 && (
        <Button
          className="transition-colors duration-200 ease-in-out flex items-center justify-center w-7 h-7 transparent bg-light-20% text-light-3 hover:bg-light-33% active:bg-light-10% rounded relative min-w-max"
          aria-label="Add option"
          onClick={handleAddOption}
          data-testid="add-option-button"
        >
          Add Option
        </Button>
      )}
    </Box>
  );
};

export default QuestionOptions;
