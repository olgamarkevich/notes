import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const SnackbarUI = ({ openP, closeModal }) => {
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    closeModal(false);
  };

  return (
    <Snackbar
      open={openP}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        Note added
      </Alert>
    </Snackbar>
  );
};

export default SnackbarUI;
