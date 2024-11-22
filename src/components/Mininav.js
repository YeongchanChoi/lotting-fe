// src/components/Mininav.js

import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaRegUser, FaUser } from 'react-icons/fa';
import { MdOutlineBusinessCenter, MdBusinessCenter } from 'react-icons/md';
import { RiMoneyDollarCircleLine, RiMoneyDollarCircleFill } from 'react-icons/ri';
import { IoDocumentTextOutline, IoDocumentText } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import styles from '../styles/Mininav.module.css';

const iconstyle = { fontSize: '1.2em', paddingRight: '2%', paddingLeft: '1%' };

const Mininav = () => {
  const location = useLocation();
  const splitpath = location.pathname.split('/');

  return (
    <ul className={styles.listconatiner}>
      <Link to={`/search/userinfo/${splitpath[3]}`}>
        <li className={splitpath[2] === 'userinfo' ? styles.select : styles.nonselect}>
          {splitpath[2] === 'userinfo' ? (
            <FaUser style={iconstyle} />
          ) : (
            <FaRegUser style={iconstyle} />
          )}
          <span>고객 정보</span>
        </li>
      </Link>
      <Link to={`/search/payinfo/${splitpath[3]}`}>
        <li className={splitpath[2] === 'payinfo' ? styles.select : styles.nonselect}>
          {splitpath[2] === 'payinfo' ? (
            <MdBusinessCenter style={iconstyle} />
          ) : (
            <MdOutlineBusinessCenter style={iconstyle} />
          )}
          <span>납입금</span>
        </li>
      </Link>
      <Link to={`/search/leaninfo/${splitpath[3]}`}>
        <li className={splitpath[2] === 'leaninfo' ? styles.select : styles.nonselect}>
          {splitpath[2] === 'leaninfo' ? (
            <RiMoneyDollarCircleFill style={iconstyle} />
          ) : (
            <RiMoneyDollarCircleLine style={iconstyle} />
          )}
          <span>대출/자납</span>
        </li>
      </Link>
      <Link to={`/search/extinfo/${splitpath[3]}`}>
        <li className={splitpath[2] === 'extinfo' ? styles.select : styles.nonselect}>
          {splitpath[2] === 'extinfo' ? (
            <IoDocumentText style={iconstyle} />
          ) : (
            <IoDocumentTextOutline style={iconstyle} />
          )}
          <span>비고</span>
        </li>
      </Link>
    </ul>
  );
};

export default Mininav;
