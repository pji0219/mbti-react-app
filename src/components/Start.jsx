import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { next } from '../store/modules/mbti';
import { init } from '../store/modules/show';
import OrangeButton from './OrangeButton';

const Header = styled.header`
  font-size: 3em;
`;
const MainImg = styled.img`
  width: inherit;
`;

const SubHeader = styled.p`
  font-size: 1.5rem;
  color: #777;
`;

function Start() {
  const [counts, setCounts] = useState(0);
  const dispatch = useDispatch();

  function makeData(survey, explanation) {
    const initData = { survey: [], explanation: {} };
    if (initData.survey.length === 0) {
      for (let i = 0; i < survey.length; i = i + 2) {
        initData.survey.push({
          question: survey[i].QUESTION_TEXT,
          answer: [
            {
              text: survey[i].ANSWER_TEXT,
              result: survey[i].RESULT,
            },
            {
              text: survey[i + 1].ANSWER_TEXT,
              result: survey[i + 1].RESULT,
            },
          ],
        });
      }
      for (let i = 0; i < explanation.length; i++) {
        initData.explanation[explanation[i].MBTI_TYPE] = {
          explanation: explanation[i].EXPLAINATION,
          img: explanation[i].IMG_SRC,
        };
      }
    }
    return initData;
  }

  async function sqlFetchData() {
    const resCount = await fetch('http://localhost:3001/data/counts');
    if (resCount.status === 200) {
      const num = await resCount.json();
      if (num[0].counts !== 0) setCounts(num[0].counts);
      else {
        throw new Error('통신 이상');
      }
    }

    const resSurvey = await fetch('http://localhost:3001/data/survey');
    if (resSurvey.status === 200) {
      const surveyData = await resSurvey.json();
      // explanation Table 의 데이터 받아오기
      const resExplanation = await fetch(
        'http://localhost:4000/data/explanation'
      );
      if (resExplanation.status === 200) {
        const explanationData = await resExplanation.json();
        const madeData = makeData(surveyData, explanationData);
        dispatch(init(madeData));
      } else {
        throw new Error('통신 이상');
      }
    } else {
      throw new Error('통신 이상');
    }
  }

  async function mongoFetchData() {
    const resCount = await fetch('http://localhost:3001/mongo/count');
    if (resCount.status === 200) {
      const num = await resCount.json();
      if (num[0].counts !== 0) setCounts(num[0].counts);
      else {
        throw new Error('통신 이상');
      }
    }

    // 설문 전체 데이터 받아 오기
    const resData = await fetch('http://localhost:3001/mongo/getdata');
    if (resData.status === 200) {
      const data = await resData.json();
      if (data[0].survey.length !== 0) {
        dispatch(init(data[0]));
      }
    } else {
      throw new Error('통신 이상');
    }
  }

  useEffect(() => {
    sqlFetchData();
  }, []); //

  return (
    <>
      <Header>개발자 MBTI 조사</Header>
      <MainImg src="/images/main.jpg" alt="메인 이미지" />
      <SubHeader>
        개발자가 흔히 접하는 상황에 따라서 MBTI를 알아 봅시다!{'\n\n'}
        지금까지 {counts}명이 참여 해주셨습니다.
      </SubHeader>
      <OrangeButton
        text="테스트 시작"
        clickEvent={() => dispatch(next())}
        mainColor="#fae243"
        subColor="#fa9f1a"
        hoverColor="#faf000"
      />
    </>
  );
}

export default Start;
