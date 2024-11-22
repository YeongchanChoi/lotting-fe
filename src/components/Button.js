// src/components/Button.js

import React from 'react';
import styles from '../styles/Button.module.css';
import { CgFileDocument } from 'react-icons/cg';

export const Button = ({ children, onClick }) => {
  return (
    <button className={styles.buttonstyle} onClick={onClick}>
      {children}
    </button>
  );
};

export const DownloadButton = ({ children, onClick }) => {
  return (
    <button className={styles.downloadbuttonstyle} onClick={onClick}>
      <span>{children}</span>
      <CgFileDocument className={styles.CgButton} />
    </button>
  );
};

export const SearchButton = ({ children, onClick }) => {
  return (
    <button className={styles.searchbuttonstyle} onClick={onClick}>
      {children}
    </button>
  );
};

export const ModifyButton = ({ children, onClick }) => {
  return (
    <button className={styles.modifybutton} onClick={onClick}>
      {children}
    </button>
  );
};

export const CheckButton = ({ children, onClick }) => {
  return (
    <button className={styles.checkbutton} onClick={onClick}>
      {children}
    </button>
  );
};
