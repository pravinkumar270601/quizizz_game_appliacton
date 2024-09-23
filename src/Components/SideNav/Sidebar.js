

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button, IconButton, Divider, Badge ,useMediaQuery, Drawer} from '@mui/material';
import Typography from '@mui/material/Typography';

import { useTheme } from '@mui/material/styles';
import { Home, LibraryBooks, Star, Assessment, Group, Settings, Image, Folder, Person, ExitToApp } from '@mui/icons-material';
import { createFilterOptions } from '@mui/material/Autocomplete';
import "./Sidebar.css"
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaMapMarkedAlt } from "react-icons/fa";

import { TbBooks } from "react-icons/tb";
import { RiSparkling2Line } from "react-icons/ri";
import { SiSimpleanalytics } from "react-icons/si";
import { PiUsersThreeFill } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbPhotoCog } from "react-icons/tb";
import { CiFolderOn } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";

import { RxExit } from "react-icons/rx";
import CreateButton from './CreateButton';












const Sidebar = ({ open, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));



  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      variant={isMobile ? 'temporary' : 'permanent'}
      sx={{
        width: 200,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 200,
          boxSizing: 'border-box',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          maxWidth: '200px',
          bgcolor: 'background.paper',
          borderRight: `1px solid ${theme.palette.divider}`,
          boxShadow: 1
        }}
      >
        <NavLink to="/admin" aria-label="Quizizz" title="Quizizz" style={{ textDecoration: 'none' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: "5px 0px",
              height: '40px'
            }}
          >
            <img
              src="https://cf.quizizz.com/img/logos/Purple.webp"
              alt="logo"
              style={{ height: '40px', width: '146px' }}
            />
          </Box>
        </NavLink>

        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <NavLink to="/profile/66c04925271abea6d497c8a1" style={{ textDecoration: 'none', color: theme.palette.text.primary }}>
              <Typography sx={{ fontSize: '15px', fontWeight: "bold" }}>Mr. K</Typography>
            </NavLink>
            {/* <Badge
            badgeContent="Basic account"
            // color="secondary"
            sx={{ mt: 2 ,width:"5%"}}
          /> */}
            <Typography className="basic_account" style={{ fontWeight: "bold", fontSize: "12px", mt: 1 }}>Basic account</Typography>
            <Button


              // sx={{ mt: 2, width: '100%' }}


              sx={{
                mt: 2,
                fontSize: '12px',
                fontWeight: '700',
                color: 'rgb(232, 169, 0)',
                backgroundColor: '#ffc93333',
                borderRadius: '20px',

                width: '100%',
                '&:hover': {
                  backgroundColor: '#ffc93333',
                  boxShadow: 'none',
                },
              }}
              // sx={{
              //   mt: 2,
              //   width: '100%',
              //   '&:hover': {
              //     backgroundColor: '#ffc93333',
              //     boxShadow: 'none',
              //   },
              // }}
              className='upgrade_button'
            >
              Upgrade now
            </Button>
          </Box>
        </Box>
        {/* <Box sx={{ p: 1 }}>
          <Button

            className='create_button'
            startIcon={<IoIosAddCircleOutline />}
            // sx={{ mt: 1, width: '100%' }}

            sx={{
              backgroundColor: " rgb(136 84 192)",
              height: "40px",
              color: "white",
              // mt: 1,
              width: '100%',
              '&:hover': {
                backgroundColor: 'rgb(136 84 192)',
                boxShadow: '0 4px #6c4298',

              },
            }}>
            Create
          </Button>
        </Box> */}
        <CreateButton />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            overflowY: 'auto',
            maxHeight: 'calc(100vh - 64px)' // Adjust based on your layout
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            <NavLink to="/admin" style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  color: theme.palette.text.primary,
                  '&.active': {
                    backgroundColor: theme.palette.action.selected
                  }
                }}
              >
                <FaMapMarkedAlt style={{marginRight:"10px"}} />
                Explore
              </Box>
            </NavLink>
            <NavLink to="/admin/mylibrary" style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  color: theme.palette.text.primary
                }}
              >
                <TbBooks style={{marginRight:"10px"}} />
                My library
              </Box>
            </NavLink>
            {/* <NavLink to="/admin/quizizz-ai" style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  color: theme.palette.text.primary
                }}
              >
                <RiSparkling2Line style={{marginRight:"10px"}} />
                Quizizz AI
                <Badge
                  badgeContent="NEW"
                  color="primary"
                  sx={{ ml: 2 }}
                />
              </Box>
            </NavLink> */}
            <NavLink to="/admin/reports" style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  color: theme.palette.text.primary
                }}
              >
                <SiSimpleanalytics style={{marginRight:"10px"}} />
                Reports
              </Box>
            </NavLink>
            <NavLink to="/admin/classes" style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  color: theme.palette.text.primary
                }}
              >
                <PiUsersThreeFill style={{marginRight:"10px"}} />
                Classes
              </Box>
            </NavLink>
            <NavLink to="/admin/settings" style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  color: theme.palette.text.primary
                }}
              >
                <IoSettingsOutline style={{marginRight:"10px"}} />
                Settings
              </Box>
            </NavLink>
            <NavLink to="/admin/memes" style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  color: theme.palette.text.primary
                }}
              >
                <TbPhotoCog style={{marginRight:"10px"}} />
                Memes
              </Box>
            </NavLink>
            <NavLink to="/profile/66c04925271abea6d497c8a1?section=collections" style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  color: theme.palette.text.primary
                }}
              >
                <CiFolderOn style={{marginRight:"10px"}} />
                Collections
              </Box>
            </NavLink>
            <NavLink to="/profile/66c04925271abea6d497c8a1?section=library" style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 2,
                  color: theme.palette.text.primary
                }}
              >
                <FaRegUserCircle style={{marginRight:"10px"}} />
                Profile
              </Box>
            </NavLink>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                p: 2,
                color: theme.palette.text.primary,
                cursor: 'pointer'
              }}
            >
              <RxExit style={{marginRight:"10px"}} />
              Logout
            </Box>
          </Box>

          <Divider />

          <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="body2" color="text.secondary" textAlign="center">
              Try our AI Chrome extension
            </Typography>
            <img
              src="https://cf.quizizz.com/img/quizizz_ai/ai_extension_banner.webp"
              alt="AI Chrome extension"
              style={{ border: '1px solid', borderRadius: '4px', marginTop: '16px', height: '49px', width: '160px' }}
            />
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;

