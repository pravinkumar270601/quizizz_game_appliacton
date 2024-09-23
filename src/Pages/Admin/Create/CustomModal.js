import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, Box, Typography, Grid, Input, MenuItem, FormControl, Select, TextField } from '@mui/material';
import { ChevronLeft as ChevronLeftIcon, FileUpload as FileUploadIcon, CloudUpload as CloudUploadIcon, CameraAlt as CameraAltIcon, GoogleDrive as GoogleDriveIcon, ArrowDownward as ArrowDownwardIcon, CircleNotifications, ZoomOutOutlined } from '@mui/icons-material';

const CustomModal = ({ open, onClose }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="lg"
      PaperProps={{
        sx: {
          borderRadius: 2,
          overflow: 'hidden',
          backgroundColor: '#f5f5f5',
          boxShadow: 3,
        },
      }}
    >
      <DialogTitle>
        <Box display="flex" alignItems="center">
          <IconButton onClick={onClose} edge="start">
            <CircleNotifications />
          </IconButton>
          <Typography variant="h6" component="div">
            Create a new activity
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" gap={2}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                padding={2}
                border={1}
                borderRadius={1}
                borderColor="grey.400"
                bgcolor="background.paper"
                boxShadow={1}
                sx={{ cursor: 'pointer', '&:hover': { borderColor: 'primary.main', borderWidth: 2 } }}
              >
                <img src="https://cf.quizizz.com/CreateWithAIV2/Source%20abstractions-min.png" alt="Import worksheets/questions" style={{ width: '100%', height: 'auto' }} />
                <Typography variant="h6" align="center">Import worksheets/questions</Typography>
                <Typography variant="body2" align="center">from documents, Google Form, spreadsheet</Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                padding={2}
                border={1}
                borderRadius={1}
                borderColor="grey.400"
                bgcolor="background.paper"
                boxShadow={1}
                sx={{ cursor: 'pointer', '&:hover': { borderColor: 'primary.main', borderWidth: 2 } }}
              >
                <img src="https://cf.quizizz.com/CreateWithAIV2/Source%20abstractions-1-min.png" alt="Generate with AI" style={{ width: '100%', height: 'auto' }} />
                <Typography variant="h6" align="center">Generate with AI</Typography>
                <Typography variant="body2" align="center">from documents, websites, YouTube, text</Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                padding={2}
                border={1}
                borderRadius={1}
                borderColor="grey.400"
                bgcolor="background.paper"
                boxShadow={1}
                sx={{ cursor: 'pointer', '&:hover': { borderColor: 'primary.main', borderWidth: 2 } }}
              >
                <img src="https://cf.quizizz.com/CreateWithAIV2/Source%20abstractions-2-min.png" alt="Create from scratch" style={{ width: '100%', height: 'auto' }} />
                <Typography variant="h6" align="center">Create from scratch</Typography>
                <Typography variant="body2" align="center">from search, question types</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <Typography variant="h6">Start from</Typography>
              <Select
                value={selectedOption}
                onChange={handleOptionChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Start from' }}
              >
                <MenuItem value="">
                  <em>Select an option</em>
                </MenuItem>
                <MenuItem value="import-worksheets">
                  <FileUploadIcon /> Import worksheets
                </MenuItem>
                <MenuItem value="generate-ai">
                  <CloudUploadIcon /> Generate with AI
                </MenuItem>
                <MenuItem value="create-scratch">
                  <CameraAltIcon /> Create from scratch
                </MenuItem>
              </Select>
            </FormControl>
            <Box mt={2}>
              <Typography variant="body1">Drag and drop a worksheet/question bank or upload a file:</Typography>
              <Input
                type="file"
                accept=".pdf,.ppt,.pptx,.doc,.docx,.png,.jpg"
                sx={{ display: 'none' }}
                id="file-input"
              />
              <label htmlFor="file-input">
                <Button variant="contained" color="primary" component="span" startIcon={<FileUploadIcon />}>
                  Upload from device
                </Button>
              </label>
              <Button variant="contained" color="secondary" startIcon={<ZoomOutOutlined />}>
                Import from Drive
              </Button>
              <Button variant="contained" color="primary" startIcon={<CameraAltIcon />}>
                Take a picture
              </Button>
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Close</Button>
        <Button variant="contained" color="primary">Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomModal;
