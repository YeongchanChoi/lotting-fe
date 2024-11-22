// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Dashboard from './pages/Dashboard';
import './App.css'; // CSS import 시 변수는 필요없음

function App() {
  return (
    <Router>
      <div className="app-container">
        <Nav />
        <div className="main-area">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              {/* 다른 라우트 추가 */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
