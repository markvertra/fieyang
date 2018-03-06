import React from 'react';
import STYLES from './Footer.module.scss';

const c = className => STYLES[className] || 'UNKNOWN';

function Footer() {
  return (
    <div className={c('Footer')}>
      <p className={c('Footer__text')}>Gimmick Free Language Learning Tools</p>
    </div>
  );
}

export default Footer;