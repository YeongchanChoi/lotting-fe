// src/components/Header.js

import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import { useNavigate } from "react-router-dom";
import profileImage from "../img/profile.png";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // 실제 로그인 상태로 변경
  const navigate = useNavigate();

  const handleLogout = () => {
    // 로그아웃 로직 추가
    setIsLoggedIn(false);
    navigate("/login"); // 로그아웃 후 로그인 페이지로 이동
  };

  const handleLogin = () => {
    navigate("/login"); // 로그인 페이지로 이동
  };

  return (
    <div className={styles.maincontainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>회원관리시스템이 정상 작동중입니다 👋🏻</h1>
        <p className={styles.subtitle}>덕소 리버 베르데포레 [개발중]</p>
      </div>
      <div className={styles.rightcontainer}>
        {isLoggedIn ? (
          <div className={styles.usercontainer}>
            <div className={styles.image}>
              <img src={profileImage} alt="프로필 이미지" />
            </div>
            <div className={styles.loginbody}>
              <div className={styles.Name}>
                <h3 className={styles.name}>사용자 이름</h3>
              </div>
              <div className={styles.loginfo}>
                <h3 className={styles.role}>Logged in</h3>
                <button onClick={handleLogout} className={styles.logoutbutton}>
                  로그아웃
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.button}>
            <button onClick={handleLogin} className={styles.loginButton}>
              로그인
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
