import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import STYLES from './Loading.module.scss';

const c = className => STYLES[className] || 'UNKNOWN';

function Loading() {
  return (
    <div className={c('Loading')}>
      <CircularProgress size={80} thickness={5} />
      <p className={c('Loading__message')}>Please wait...</p>
    </div>
  );
}

export default Loading;
