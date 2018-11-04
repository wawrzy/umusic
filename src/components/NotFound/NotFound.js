// @flow

import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './NotFound.css';

const NotFound = ({t}: Function) => (
  <div className="container">
    <div className="contain">
      <div>
        <Typography className="title">
          {t('notFound')}
        </Typography>
      </div>
      <Link className="LinkDesign" to="/">
        <Button variant="contained" color="primary" className="button">
          {t('button')}
        </Button>
      </Link>
    </div>
  </div>
);

export default withRouter(withNamespaces('notFound')(NotFound));
