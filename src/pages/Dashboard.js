// src/components/Dashboard.js

import React from 'react';
import styles from '../styles/Dashboard.module.css';
import dash1 from '../img/dash1.png';
import dash2 from '../img/dash2.png';
import dash3 from '../img/dash3.png';
import dash4 from '../img/dash4.png';
import up from '../img/up.png';
import calendar from '../img/calendar.png';
import { BsBagDash, BsDatabase } from 'react-icons/bs';
import { BiGroup, BiCalendar } from 'react-icons/bi';
import { AiFillCaretUp } from 'react-icons/ai';

const Dashboard = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.MainTitle}>
        <div className={styles.ContractBody}>
          <div className={styles.Contract}>
            {/* 첫 번째 ContractSum */}
            <div className={styles.ContractSum}>
              <div className={styles.ContractValue}>
                <div className={styles.ContractIcons}>
                  <div className={styles.ContractImg} style={{ color: '#7152F3' }}>
                    <BsBagDash style={{ width: '100%', height: '100%' }} />
                  </div>
                </div>
                <div className={styles.ContractName}>총 계약건수</div>
              </div>
              <div className={styles.ContractValue2}>
                <div className={styles.ContractVal1}>
                  <div className={styles.Value}>1028</div>
                </div>
                <div className={styles.ContractVal2}>
                  <div className={styles.Percentage_G}>
                    <div className={styles.UpImg} style={{ color: '#30BE82' }}>
                      <AiFillCaretUp style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className={styles.UpText}>12%</div>
                  </div>
                </div>
              </div>
              <div className={styles.Bottominfo}>
                <div className={styles.BottomDate}>업데이트 : 2024년 11월 20일</div>
              </div>
            </div>
            {/* 두 번째 ContractSum */}
            <div className={styles.ContractSum}>
              <div className={styles.ContractValue}>
                <div className={styles.ContractIcons}>
                  <div className={styles.ContractImg} style={{ color: '#7152F3' }}>
                    <BiGroup style={{ width: '100%', height: '100%' }} />
                  </div>
                </div>
                <div className={styles.ContractName}>완료인원</div>
              </div>
              <div className={styles.ContractValue2}>
                <div className={styles.ContractVal1}>
                  <div className={styles.Value}>390</div>
                </div>
                <div className={styles.ContractVal2}>
                  <div className={styles.Percentage_G}>
                    <div className={styles.UpImg} style={{ color: '#30BE82' }}>
                      <AiFillCaretUp style={{ width: '100%', height: '100%' }} />
                    </div>
                    <div className={styles.UpText}>5%</div>
                  </div>
                </div>
              </div>
              <div className={styles.Bottominfo}>
                <div className={styles.BottomDate}>업데이트 : 2024년 11월 20일</div>
              </div>
            </div>
          </div>
          {/* 두 번째 Contract */}
          <div className={styles.Contract}>
            {/* 세 번째 ContractSum */}
            <div className={styles.ContractSum}>
              <div className={styles.ContractValue}>
                <div className={styles.ContractIcons}>
                  <div className={styles.ContractImg} style={{ color: '#7152F3' }}>
                    <BsDatabase style={{ width: '100%', height: '100%' }} />
                  </div>
                </div>
                <div className={styles.ContractName}>계약금액</div>
              </div>
              <div className={styles.ContractValue2}>
                <div className={styles.ContractVal}>
                  <div className={styles.Value}>12,390,000,000 ₩</div>
                </div>
              </div>
              <div className={styles.Bottominfo}>
                <div className={styles.BottomDate}>업데이트 : 2024년 11월 20일</div>
              </div>
            </div>
            {/* 네 번째 ContractSum */}
            <div className={styles.ContractSum}>
              <div className={styles.ContractValue}>
                <div className={styles.ContractIcons}>
                  <div className={styles.ContractImg} style={{ color: '#7152F3' }}>
                    <BsDatabase style={{ width: '100%', height: '100%' }} />
                  </div>
                </div>
                <div className={styles.ContractName}>확입금액</div>
              </div>
              <div className={styles.ContractValue2}>
                <div className={styles.ContractVal}>
                  <div className={styles.Value}>8,990,000,000 ₩</div>
                </div>
              </div>
              <div className={styles.Bottominfo}>
                <div className={styles.BottomDate}>업데이트 : 2024년 11월 20일</div>
              </div>
            </div>
          </div>
          {/* 미납자 명단 */}
          <div className={styles.Client}>
            <div className={styles.ClientBody}>
              <div className={styles.ClientContents}>
                <div className={styles.ClientTitle}>
                  <div className={styles.ClientTitle1}>
                    <div className={styles.Titlefont}>미납자 명단</div>
                  </div>
                  <div className={styles.ClientTitle2}>
                    <div className={styles.InfoBotton}>
                      <div className={styles.Bottonfont}>정보입력</div>
                    </div>
                  </div>
                </div>
                {/* 테이블 헤더 */}
                <div className={styles.ClientCategory}>
                  <div className={styles.Number}>
                    <div className={styles.Categoryfont}>관리번호</div>
                  </div>
                  <div className={styles.Name}>
                    <div className={styles.Categoryfont}>성명</div>
                  </div>
                  <div className={styles.Cha}>
                    <div className={styles.Categoryfont}>최종납부</div>
                  </div>
                  <div className={styles.Dong}>
                    <div className={styles.Categoryfont}>임시동호</div>
                  </div>
                </div>
                {/* 미납자 데이터 반복 */}
                {[
                  { number: '123455', name: '이승준', cha: '4차', dong: '84A-사-1' },
                  { number: '123456', name: '김철수', cha: '3차', dong: '84B-나-2' },
                  { number: '123457', name: '박영희', cha: '2차', dong: '84C-다-3' },
                  { number: '123458', name: '최민수', cha: '1차', dong: '84D-라-4' },
                  { number: '123459', name: '홍길동', cha: '5차', dong: '84E-마-5' },
                  { number: '123460', name: '유재석', cha: '6차', dong: '84F-바-6' },
                  { number: '123461', name: '강호동', cha: '7차', dong: '84G-사-7' },
                ].map((item, index) => (
                  <div className={styles.ClientValue} key={index}>
                    <div className={styles.Number}>
                      <div className={styles.Valuefont}>{item.number}</div>
                    </div>
                    <div className={styles.Name}>
                      <div className={styles.Valuefont}>{item.name}</div>
                    </div>
                    <div className={styles.Cha}>
                      <div className={styles.Valuefont}>{item.cha}</div>
                    </div>
                    <div className={styles.Dong}>
                      <div className={styles.Valuefont}>{item.dong}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* 오른쪽 일정관리 */}
        <div className={styles.Date}>
          <div className={styles.DateTitle}>
            <div className={styles.DateTitle1}>
              <div className={styles.DateTitleName}>일정관리</div>
            </div>
            <div className={styles.DateTitle2}>
              <div className={styles.DateIcon}>
                <div className={styles.CalendarImg} style={{ color: '#7152F3' }}>
                  <BiCalendar style={{ width: '100%', height: '100%' }} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.Calendar}>
            {/* 여기에 캘린더 컴포넌트를 추가하거나 필요한 내용을 넣으세요 */}
          </div>
          <div className={styles.Line}></div>
          <div className={styles.Today}>
            <div className={styles.TodayTitle}>
              <div className={styles.TodayTitle1}>
                <div className={styles.TodayTitleName}>오늘의 일정</div>
              </div>
              <div className={styles.TodayTitle2}></div>
            </div>
            {/* 오늘의 일정 내용을 추가하세요 */}
          </div>
        </div>
      </div>
      {/* 공지사항 */}
      <div className={styles.Notice}>
        <div className={styles.NoticeTitle}>
          <div className={styles.NoticeTitle1}>
            <div className={styles.NoticeName}>공지사항</div>
          </div>
          <div className={styles.NoticeTitle2}>
            <div className={styles.NoticeBotton}>
              <div className={styles.NoticeBottonFont}>View All</div>
            </div>
          </div>
        </div>
        {/* 공지사항 헤더 */}
        <div className={styles.NoticeCategory}>
          <div className={styles.NoticeCategory1}>
            <div className={styles.NoticeCategoryFont}>제목</div>
          </div>
          <div className={styles.NoticeCategory2}>
            <div className={styles.NoticeCategoryFont}>작성자</div>
          </div>
          <div className={styles.NoticeCategory3}>
            <div className={styles.NoticeCategoryFont}>사항</div>
          </div>
          <div className={styles.NoticeCategory4}>
            <div className={styles.NoticeCategoryFont}>작성일자</div>
          </div>
          <div className={styles.NoticeCategory5}>
            <div className={styles.NoticeCategoryFont}>상태</div>
          </div>
        </div>
        {/* 공지사항 내용 반복 */}
        {[
          {
            title: '수정 사항 반영',
            author: '최영찬',
            type: '일반',
            date: '24-11-20 09:27 AM',
            status: '해결됨',
            statusClass: styles.ContentState_G,
            statusFontClass: styles.G_Font,
          },
          {
            title: '사이트 개설 안내',
            author: '오준서',
            type: '일반',
            date: '23-12-28 09:27 AM',
            status: '해결됨',
            statusClass: styles.ContentState_G,
            statusFontClass: styles.G_Font,
          },
          {
            title: '[긴급] 시스템 점검 안내 (12/29 8Am 부터)',
            author: '오준서',
            type: '긴급',
            date: '23-12-28 09:27 AM',
            status: '진행중',
            statusClass: styles.ContentState_B,
            statusFontClass: styles.B_Font,
          },
        ].map((item, index) => (
          <div className={styles.NoticeContent} key={index}>
            <div className={styles.NoticeCategory1}>
              <div className={styles.ContentFont}>{item.title}</div>
            </div>
            <div className={styles.NoticeCategory2}>
              <div className={styles.ContentFont}>{item.author}</div>
            </div>
            <div className={styles.NoticeCategory3}>
              <div className={styles.ContentFont}>{item.type}</div>
            </div>
            <div className={styles.NoticeCategory4}>
              <div className={styles.ContentFont}>{item.date}</div>
            </div>
            <div className={styles.NoticeCategory5}>
              <div className={item.statusClass}>
                <div className={item.statusFontClass}>{item.status}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
