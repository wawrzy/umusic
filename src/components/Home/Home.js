import React from 'react';
import { connect } from 'react-redux';

const Home = ({ app }) => (
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
