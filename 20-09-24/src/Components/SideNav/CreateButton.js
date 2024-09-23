import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { IoIosAddCircleOutline } from 'react-icons/io';
import CreationModal from '../../Pages/Admin/Create/CreationModal'; // Import your CreationModal component

const CreateButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ p: 1 }}>
      <Button
        className='create_button'
        startIcon={<IoIosAddCircleOutline />}
        sx={{
          backgroundColor: " rgb(136 84 192)",
          height: "40px",
          color: "white",
          width: '100%',
          '&:hover': {
            backgroundColor: 'rgb(136 84 192)',
            boxShadow: '0 4px #6c4298',
          },
        }}
        onClick={handleOpen} // This will open the modal
      >
        Create
      </Button>

      {/* Pass the state and handler to the modal */}
      <CreationModal open={open} onClose={handleClose} />
    </Box>
  );
};

export default CreateButton;
