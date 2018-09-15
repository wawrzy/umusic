// @flow

import React from 'react';
import { connect } from 'react-redux';

type THomeProps = {
  app: {
    app: string,
  },
};

const Home = ({ app }: THomeProps) => (
  <div>
    { app.app }
  </div>
);

function mapStateToProps({
  app,
}) {
  return {
    app,
  };
}

export default connect(mapStateToProps)(Home);
