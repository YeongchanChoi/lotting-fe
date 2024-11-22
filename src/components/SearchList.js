// src/components/SearchList.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ModifyButton } from './Button';
import styles from '../styles/Search.module.css';
import ConfirmationModal from './ConfirmationModal';

const SearchList = ({ name, number, categoryFilter, linkBase }) => {
  const [searchData, setSearchData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    // 데이터 로딩 로직 추가
  }, [name, number, categoryFilter]);

  const onSort = (key) => {
    // 정렬 로직 추가
  };

  const handleDelete = (userId) => {
    setSelectedUserId(userId);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    // 삭제 로직 추가
    setIsModalOpen(false);
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className={styles.tablecontainer}>
        {/* 테이블 헤더 */}
      </div>
      {/* 검색 결과 리스트 */}
      {isModalOpen && (
        <ConfirmationModal
          message="삭제하시겠습니까?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
};

export default SearchList;
