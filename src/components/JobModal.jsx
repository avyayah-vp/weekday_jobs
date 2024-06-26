import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const JobModal = ({ open, handleClose, job }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography id="modal-modal-title" variant="h4" component="h2">
          {job.jobRole} at {"Weekday"}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {job.jobDetailsFromCompany}
        </Typography>
        <Button onClick={handleClose} sx={buttonStyle}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default JobModal;

// Styles
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const buttonStyle = {
  mt: 2, 
  color: '#fff', 
  bgcolor: 'red', 
  '&:hover': { 
    bgcolor: '#b71c1c' 
  } 
};
