import React from 'react';
import { useAppSelector } from '../../../hooks/store';
import { Snackbar, Alert } from '@mui/material';

const SnackbarUI = () => {
  const alerts = useAppSelector((state) => state.notes);

  console.log(alerts);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  };

  return (
    <Snackbar
      open={true}
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
