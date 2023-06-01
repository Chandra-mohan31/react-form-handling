import React from 'react';
import "./SuccessModal.css";
import { Box, Modal, Typography } from '@mui/material';

function SuccessModal({open,handleClose,formData}) {
    
    const style = {
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
      
  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Successfully Registered! - Your details...
          </Typography>
         <Box>
         <Typography id="modal-modal-description" sx={{ mt: 2 }}>
             {`First Name : ${formData.firstName}`}
            </Typography>

<Typography id="modal-modal-description" sx={{ mt: 2 }}>
  Last Name: {formData.lastName}
</Typography>
<Typography id="modal-modal-description" sx={{ mt: 2 }}>
  Mobile Number: {formData.mobileNumber}
</Typography>
<Typography id="modal-modal-description" sx={{ mt: 2 }}>
  Registerd Email: {formData.email}
</Typography>

<Typography id="modal-modal-description" sx={{ mt: 2 }}>
  Graduated: {formData.graduated.toString()}
</Typography>
<Typography id="modal-modal-description" sx={{ mt: 2 }}>
  Event: {formData.event}
</Typography>
<Typography id="modal-modal-description" sx={{ mt: 2 }}>
  DOB: {formData.dob}
</Typography>
<Typography id="modal-modal-description" sx={{ mt: 2 }}>
  Gender: {formData.gender}
</Typography>

         </Box>
        </Box>
      </Modal>
  )
}

export default SuccessModal