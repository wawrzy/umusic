import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './NotFound.css';

const NotFound = () => (
  <div className="container">
    <div className="contain">
      <div>
        <Typography className="title">
          404 Not Found
        </Typography>
      </div>
      <div className="message">
        <Typography className="message">
          Return to Umusic
        </Typography>
      </div>
      <a href="/">
        <Button variant="contained" color="primary" className="button">
          Home Page
        </Button>
      </a>
    </div>
  </div>
);

export default NotFound;
