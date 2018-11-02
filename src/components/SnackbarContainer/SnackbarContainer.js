// @flow

import React from 'react';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Snackbar from '@material-ui/core/Snackbar';
import './SnackbarContainer.css';

type Props = {
  message: string,
  variant: string,
};

type State = {
  open: boolean,
};

class SnackbarContainer extends React.Component<Props, State> {
  state = {
    open: false,
  };

  componentDidUpdate(prevProps: Props) {
    const { message } = this.props;
    const { open } = this.state;

    if (!open && prevProps.message !== message && message !== '')
      this.setState({ open: true }); // eslint-disable-line
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { message, variant } = this.props;
    const { open } = this.state;

    return (
      <Snackbar
        autoHideDuration={5000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open}
        onClose={this.handleClose}
      >
        <SnackbarContent
          className={`SnackbarContainer ${variant}`}
          message={<span className="textSnackbarContainer">{message}</span>}
        />
      </Snackbar>
    );
  }
}

export default SnackbarContainer;
