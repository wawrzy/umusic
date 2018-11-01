// @flow

import * as React from 'react';
import IconButton from '@material-ui/core/IconButton';

type Props = {
  hide: boolean,
  className?: string,
  children: React.Node,
  ariaLabel?: string,
  onClick: Function,
};

const VideoAction = ({ hide, onClick, className, children, ariaLabel }: Props) => {
  if (hide) return null;

  return (
    <IconButton color="primary" onClick={onClick} className={className} aria-label={ariaLabel}>
      {children}
    </IconButton>
  );
};

VideoAction.defaultProps = {
  className: '',
  ariaLabel: '',
};

export default VideoAction;
