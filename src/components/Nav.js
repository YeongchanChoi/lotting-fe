// src/components/Nav.js

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiFillAppstore, AiOutlineAppstore } from 'react-icons/ai';
import { HiOutlineUsers, HiUsers } from 'react-icons/hi2';
import LOGO from '../img/logo.png';
import styles from '../styles/Nav.module.css';

const iconstyle = { fontSize: '1.5em', paddingRight: '10%', paddingLeft: '7%' };

const Nav = () => {
  const location = useLocation();
  const splitpath = location.pathname.split('/');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Link to="/dashboard">
        <img src={LOGO} className={styles.logostyle} alt="logo" />
      </Link>
      <div className={styles.listContainer}>
        <Link to="/dashboard">
          <div className={splitpath[1] === 'dashboard' ? styles.select : styles.nonselect}>
            <div className={styles.innerContainer}>
              {splitpath[1] === 'dashboard' ? (
                <AiFillAppstore style={iconstyle} />
              ) : (
                <AiOutlineAppstore style={iconstyle} />
              )}
              <span className={styles.innertext}>대시보드</span>
            </div>
          </div>
        </Link>
        <Link to="/client">
          <div className={splitpath[1] === 'client' ? styles.select : styles.nonselect}>
            <div className={styles.innerContainer}>
              {splitpath[1] === 'client' ? (
                <HiUsers style={iconstyle} />
              ) : (
                <HiOutlineUsers style={iconstyle} />
              )}
              <span className={styles.innertext}>고객관리</span>
            </div>
          </div>
        </Link>
        {/* 다른 메뉴 아이템들도 동일한 방식으로 추가 */}
      </div>
    </div>
  );
};

export default Nav;
