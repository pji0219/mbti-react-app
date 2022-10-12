import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { next } from '../store/modules/mbti';
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
  const dispatch = useDispatch();

  return (
    <>
      <Header>개발자 MBTI 조사</Header>
      <MainImg src="/images/main.jpg" alt="메인 이미지" />
      <SubHeader>
        개발자가 흔히 접하는 상황에 따라서 MBTI를 알아 봅시다!
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
