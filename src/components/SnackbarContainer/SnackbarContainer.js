// @flow

import React from 'react';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Snackbar from '@material-ui/core/Snackbar';
import './SnackbarContainer.css';

type Props = {
  message: string,
  variant: string,
  handleClose: Function,
  open: boolean,
};

const SnackbarContainer = ({
  message, variant, open, handleClose,
}: Props) => (
  <Snackbar
    autoHideDuration={5000}
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    open={open}
    onClose={handleClose}
  >
    <SnackbarContent
      className={`SnackbarContainer ${variant}`}
      message={(
        <span className="textSnackbarContainer">
          {message}
        </span>
    )}
    />
  </Snackbar>
);

export default SnackbarContainer;
