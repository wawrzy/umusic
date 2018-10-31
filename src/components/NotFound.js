import React from 'react';
import Button from '@material-ui/core/Button';
import './NotFound.css';

const NotFound = () => (
  <div className="container">
    <div className="br1" />
    <div className="br2" />
    <div className="br3" />
    <div className="br4" />
    <div className="contain">
      <div className="title">404 Not Found</div>
      <div className="message"> Return to Umusic</div>
      <a href="/">
        <Button variant="contained" className="button">
          Home Page
        </Button>
      </a>
    </div>
  </div>
);

export default NotFound;
