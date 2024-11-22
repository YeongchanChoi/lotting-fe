// src/components/Inputbox.js

import React from 'react';
import styles from '../styles/Inputbox.module.css';
import { IoMdCloudUpload } from 'react-icons/io';

export const Checkbox = ({ label, name, onChange, defaultChecked }) => {
  return (
    <div className={styles.checkboxContainer}>
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultChecked}
        onChange={onChange}
        className={styles.checkbox}
      />
      <label className={styles.checkboxLabel}>{label}</label>
    </div>
  );
};

export const Spanbox = ({ children }) => {
  return <span className={styles.spancontainer}>{children}</span>;
};

export const Inputbox = ({
  type,
  placeholder,
  onChange,
  date_placeholder,
  name,
  defaultValue,
}) => {
  return (
    <input
      className={styles.inputcontainer}
      data-placeholder={date_placeholder}
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  );
};

export const Inputarea = ({ placeholder, name, onChange }) => {
  return (
    <textarea
      className={styles.inputareacontainer}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
    ></textarea>
  );
};

export const DateInputbox = ({ onChange, name }) => {
  return (
    <input
      className={styles.dateinputcontainer}
      type="date"
      name={name}
      onChange={onChange}
    />
  );
};

export const DropInputbox = ({ list, name, onChange }) => {
  return (
    <select
      className={styles.inputcontainer}
      name={name}
      onChange={onChange}
    >
      {list.map((item, index) => (
        <option key={index} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export const FileInputbox = ({ name, onChange }) => {
  return (
    <div className={styles.fileinputcontainer}>
      <label htmlFor={name} className={styles.fileinputlabel}>
        <IoMdCloudUpload />
        파일 업로드
      </label>
      <input
        id={name}
        className={styles.fileinput}
        type="file"
        name={name}
        onChange={onChange}
      />
    </div>
  );
};
