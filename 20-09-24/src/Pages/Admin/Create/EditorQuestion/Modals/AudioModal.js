

import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Button,
  Box,
  Typography,
} from '@mui/material';
import {
  Close as CloseIcon,
  Mic as MicIcon,
  CloudUpload as CloudUploadIcon,
  PlayArrow as PlayArrowIcon,
  Pause as PauseIcon,
  Stop as StopIcon,
  Delete,
} from '@mui/icons-material';
import RecordRTC from 'recordrtc';
import WaveSurfer from 'wavesurfer.js';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import actions from "../../../../../ReduxStore/actions/index";
import AudioUpload from '../AudioUpload';




const AudioModal = ({ open, onClose, onAudioInsert, audioURL, setAudioURL, setUpdateAudioUrl, updateAudioURL }) => {
  const dispatch = useDispatch();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(180); // Default to 3 minutes in seconds
  const [recording, setRecording] = useState(false);
  const [filename, setFilename] = useState('');
  const audioRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const wavesurferRef = useRef(null);
  const waveformRef = useRef(null);
  const timerRef = useRef(null);
  const recordTimeoutRef = useRef(null);
  const recorderRef = useRef(null); // Use useRef for recorder
  const streamRef = useRef(null); // Use useRef for stream
  const [selectedAudio,setSelectedAudio]=useState("")

  useEffect(() => {
    if (open && audioURL) {
      if (wavesurferRef.current) {
        // Destroy the previous wavesurfer instance before creating a new one
        wavesurferRef.current.destroy();
      }

      // Initialize wavesurfer instance
      wavesurferRef.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: 'violet',
        progressColor: 'purple',
        height: 100,
        barWidth: 2,
      });

      wavesurferRef.current.load(audioURL); // Load the audio URL

      wavesurferRef.current.on('ready', () => {
        setDuration(wavesurferRef.current.getDuration());
      });

      wavesurferRef.current.on('audioprocess', () => {
        setCurrentTime(wavesurferRef.current.getCurrentTime());
      });

      wavesurferRef.current.on('finish', () => {
        setIsPlaying(false);
        setCurrentTime(0);
      });

      return () => {
        if (wavesurferRef.current) {
          wavesurferRef.current.destroy();
        }
      };
    }
  }, [open, audioURL]);



  useEffect(() => {
    if (recording) {
      timerRef.current = setInterval(() => {
        setCurrentTime((prevTime) => {
          if (prevTime >= 180) {
            clearInterval(timerRef.current);
            handleStop();
            return 180;
          }
          return prevTime + 1;
        });
      }, 1000);

      return () => {
        clearInterval(timerRef.current);
      };
    }
  }, [recording]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const handleAudioDelete = () => {
    setAudioURL('');
    setFilename('');
    setDuration(180); // Reset duration to 3 minutes
  };

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // console.log(file, "file url")
      setSelectedAudio(file)
      const fileSizeMB = file.size / (1024 * 1024);
      const fileType = file.type;

      if (fileType === 'audio/mpeg' && fileSizeMB <= 3) {
        const fileURL = URL.createObjectURL(file);

        setAudioURL(fileURL);
        setFilename(file.name);
        const audioElement = new Audio(fileURL);
        audioElement.onloadedmetadata = () => {
          setDuration(audioElement.duration);
        };
      } else {
        alert('Please upload an MP3 file below 3 MB.');
      }
    }
  };

  const handleInsert = async () => {
    if (audioURL) {
      setUpdateAudioUrl(audioURL);
      // console.log(selectedAudio, "Updateaudiouelsssssddjjdhjdj")
      const formData = new FormData();
        formData.append('audio', selectedAudio);
        // try {
        //   const response = await axios.post('http://localhost:4000/api/v1/uploadAudio', formData, {
        //     headers: {
        //       'Content-Type': 'multipart/form-data', // Ensure the request is recognized as form data
        //     },
        //   });
        //   console.log('Audio uploaded successfully:', response.data);
        // } catch (error) {
        //   console.error('Error uploading audio:', error);
        // }
    

      const data3 = {
        data:formData,
        
        method: "post",
        apiName: "uploadAudio",
      };
      dispatch(actions.QUESTIONAUDIOPOST(data3));
      onClose();
    }
  };

  const { QuestionAudioPost } = useSelector((state) => state?.QuestionAudioPost);
  console.log(QuestionAudioPost, "QuestionAudioPost")

  // const handleInsert = async () => {
  //   if (audioURL) {
  //     try {
  //       // Fetch the Blob data from the Blob URL
  //       const response = await fetch(audioURL);
  //       const blob = await response.blob();
  //       console.log(blob,"<blob object>")

  //       // Create a FormData object to send the Blob data
  //       const formData = new FormData();
  //       formData.append('audio', blob, 'audio.mp3'); // Adjust the filename and type as needed
  //       console.log(formData,"formikkkDAta")

  //       // Prepare the data object to be sent to the API
  //       const data3 = {
  //         data: formData,
  //         method: 'post',
  //         apiName: 'uploadAudio',
  //       };

  //       // Dispatch the action with FormData
  //       dispatch(actions.QUESTIONAUDIOPOST(data3));

  //       onClose();
  //     } catch (error) {
  //       console.error('Error fetching or uploading audio:', error);
  //     }
  //   }
  // };

  // const handleInsert = async () => {
  //   if (audioURL) { // Assuming 'audioURL' is the Blob URL
  //     try {
  //       // Fetch the Blob data from the Blob URL
  //       const response = await fetch(audioURL);
  //       const blob = await response.blob();
  //       console.log(blob, "<blob object>"); // Optional: Verify Blob object

  //       // Create a File object from the Blob
  //       const file = new File([blob], 'censor-beep-10sec-8113.mp3', {
  //         type: blob.type, // Use the Blob's type or specify a new type
  //         lastModified: Date.now(), // Set the last modified date
  //       });
  //       console.log(file, "<file object>"); // Optional: Verify File object

  //       // Create a FormData object to send the File data
  //       const formData = new FormData();
  //       formData.append('audio', file);

  //       console.log(formData.get('audio'), "FormData content"); // Optional: Verify FormData content

  //       // Prepare the data object to be sent to the API
  //       const data3 = {
  //         data: formData,
  //         method: 'post',
  //         apiName: 'uploadAudio',
  //       };

  //       // Dispatch the action with FormData
  //       dispatch(actions.QUESTIONAUDIOPOST(data3));

  //       onClose();
  //     } catch (error) {
  //       console.error('Error fetching or uploading audio:', error);
  //     }
  //   }
  // };



  const handlePlayPause = () => {
    if (wavesurferRef.current) {
      if (isPlaying) {
        wavesurferRef.current.pause();
      } else {
        wavesurferRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleStop = () => {
    if (wavesurferRef.current) {
      wavesurferRef.current.stop();
      setIsPlaying(false);
      setCurrentTime(0);
    }
  };

  const handleSliderChange = (event, newValue) => {
    if (wavesurferRef.current) {
      wavesurferRef.current.seekTo(newValue / duration);
      setCurrentTime(newValue);
    }
  };

  // Function to start recording
  function startRecording() {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((audioStream) => {
        streamRef.current = audioStream; // Store the media stream in ref
        recorderRef.current = new RecordRTC(streamRef.current, { type: 'audio' }); // Initialize RecordRTC with the stream
        recorderRef.current.startRecording(); // Start recording
        setRecording(true);
        setFilename('recorded-audio.mp3');
        // console.log('Recording started...');
      })
      .catch((error) => {
        // console.error('Error accessing media devices.', error);
      });
  }



  function stopRecording() {
    if (recorderRef.current && recorderRef.current.getState() === 'recording') {
      recorderRef.current.stopRecording(() => {
        const audioBlob = recorderRef.current.getBlob(); // Get the recorded audio blob
        // console.log(audioBlob, 'Audio Blob');

        // Release the media stream to stop the microphone
        streamRef.current.getTracks().forEach((track) => track.stop());
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl); // Correctly set the URL for the audio
        // console.log('Recorded Audio URL:', audioUrl); // Log recorded URL
        setRecording(false);
      });
      // console.log('Recording stopped.');
    } else {
      // console.log('No recording in progress.');
    }
  }


  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        fullWidth
        maxWidth="md"
        sx={{ '& .MuiDialog-paper': { borderRadius: 2 } }}
      >
        <Box sx={{ position: 'relative' }}>
          <IconButton
            aria-label="Close"
            onClick={onClose}
            sx={{ position: 'absolute', top: 8, right: 8, color: 'text.secondary' }}
          >
            <CloseIcon />
          </IconButton>
          {/* <AudioUpload /> */}
          <DialogTitle sx={{ display: 'flex', alignItems: 'center', padding: 2 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                borderRadius: '50%',
                backgroundColor: 'rgb(237 230 246)',
                color: 'rgb(136 84 192)',
                marginRight: 1,
              }}
            >
              <MicIcon />
            </Box>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '17px' }}>
                Insert an audio clip
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                You can upload an MP3 file or record yourself
              </Typography>
            </Box>
          </DialogTitle>
          <DialogContent dividers sx={{ paddingX: 4 }}>
            <Box
              sx={{
                border: '1px dashed',
                borderColor: 'divider',
                height: 200,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgb(249 249 249)',
                position: 'relative',
                padding: 2,
              }}
            >
              {audioURL ? (
                <>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      width: '100%',
                      gap: 1,
                    }}
                  >
                    <IconButton onClick={handlePlayPause} style={{ border: "1px solid #c8b9b9", borderRadius: "2px", padding: "4px", background: "white" }}>
                      {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                    </IconButton>
                    <IconButton onClick={handleAudioDelete} style={{ border: "1px solid white", borderRadius: "2px", padding: "4px", background: "rgb(252 219 227)", color: "red" }}>
                      <RiDeleteBin6Line />
                    </IconButton>
                  </Box>
                  <div ref={waveformRef} style={{ width: '100%', height: 100, marginTop: 10 }} />
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginTop: 2 }}>
                    <Typography variant="caption" className="text-xs text-dark-4">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </Typography>
                  </Box>
                </>
              ) : (
                <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  {recording ? (
                    <Box style={{ display: "flex", flexDirection: "column" }}>
                      <Button
                        variant="contained"
                        startIcon={<StopIcon />}
                        onClick={stopRecording}
                        sx={{
                          marginBottom: 2, background: "rgb(136 84 192)",
                          '&:hover': {
                            backgroundColor: 'rgb(136 84 192)',
                          }
                        }}
                      >
                        Stop Recording
                      </Button>
                      <Typography variant="caption" sx={{ marginBottom: 2 }}>
                        {formatTime(currentTime)} / {formatTime(180)}
                      </Typography>
                    </Box>
                  ) : (
                    <Box style={{ display: 'flex', flexDirection: "column" }}>

                      <Button
                        variant="contained"
                        startIcon={<MicIcon />}
                        onClick={startRecording}
                        sx={{
                          marginBottom: 2, background: "rgb(136 84 192)",
                          '&:hover': {
                            backgroundColor: 'rgb(136 84 192)',
                            // boxShadow: '0 4px #6c4298',
                          },
                        }}
                      >
                        Record
                      </Button>
                      {/* <button onClick={stopRecording1}> hiiiiiiiiiiiiii</button> */}
                      <Typography variant="caption" color="text.secondary" sx={{ marginBottom: 2 }}>
                        Click here to record audio<br />(up to 3 minutes)
                      </Typography>
                      <input
                        id="audio-upload"
                        type="file"
                        accept="audio/*"
                        onChange={handleFileChange}
                        style={{ display: 'none', textAlign: "left" }}
                      />
                      <label htmlFor="audio-upload">
                        <Button
                          component="span"
                          variant="outlined"
                          startIcon={<CloudUploadIcon style={{ color: "black" }} />}
                          // sx={{ marginTop: 2, }}
                          sx={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            margin: 2, // Adjust margin to your preference
                            color: "black",
                            background: "white",
                            borderColor: "black"
                          }}
                        >
                          Upload MP3
                        </Button>
                      </label>
                    </Box>
                  )}
                </Box>
              )}
            </Box>
          </DialogContent>
          <DialogActions sx={{ padding: 2, paddingRight: 4 }}>
            <Button onClick={onClose} variant="text"
              sx={{
                background: "rgb(249 249 249)",
                color: "black",
                '&:hover': {
                  backgroundColor: 'rgb(249 249 249)',
                  color: "black"
                  // boxShadow: '0 4px #6c4298',
                },
              }}>


              Cancel
            </Button>
            <Button
              onClick={handleInsert}
              variant="contained" disabled={!audioURL}
              sx={{
                background: "rgb(136 84 192)",
                '&:hover': {
                  backgroundColor: 'rgb(136 84 192)',
                  // boxShadow: '0 4px #6c4298',
                },
              }}>
              Insert
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};

export default AudioModal;




