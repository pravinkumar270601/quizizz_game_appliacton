import React, { useState } from 'react';
import axios from 'axios';

const AudioUploader = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  // Handle file change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file,"filefilefilefile");
    
    if (file) {
      console.log('Selected file type:', file.type);
      setAudioFile(file);
    }
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!audioFile) {
      alert('Please select an audio file first!');
      return;
    }

    const formData = new FormData();
    formData.append('audio', audioFile); // Append the audio file to FormData

    try {
      const response = await axios.post('http://localhost:4000/api/v1/uploadAudio', formData, {
        headers: {
          'Content-Type': audioFile.type,  // Dynamically set the Content-Type to the audio file's MIME type
        },
      });
      console.log('Response:', response.data);
      setUploadStatus('Audio uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error.response?.data || error.message);
      setUploadStatus('Error uploading file: ' + (error.response?.data?.Error || error.message));
    }
  };

  return (
    <div>
      <h2>Upload Audio File</h2>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default AudioUploader;
