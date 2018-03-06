import React from 'react';
import STYLES from './Navbar.module.scss';

const c = className => STYLES[className] || 'UNKNOWN';

function Navbar() {
  return (
    <div className={c('Navbar')}>
      <p className={c('Navbar__title')}>Fieyang</p>
    </div>
  );
}

export default Navbar;