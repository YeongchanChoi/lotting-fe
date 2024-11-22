// src/components/SearchForm.js

import React from 'react';
import { Inputbox, DropInputbox } from './Inputbox';
import styles from '../styles/Search.module.css';

const SearchForm = ({ name, setName, number, setNumber, dropdownLists }) => {
  const onNameChange = (e) => {
    const text = e.target.value;
    setName(text.replace(/ /g, ''));
  };

  const onNumberChange = (e) => {
    const text = e.target.value;
    setNumber(text.replace(/ /g, ''));
  };

  return (
    <div className={styles.flexContainer}>
      <Inputbox
        type="text"
        placeholder="관리번호"
        value={number}
        onChange={onNumberChange}
      />
      <Inputbox
        type="text"
        placeholder="회원 성함"
        value={name}
        onChange={onNameChange}
      />
      {dropdownLists.map((list, index) => (
        <DropInputbox key={index} list={list} />
      ))}
    </div>
  );
};

export default SearchForm;
