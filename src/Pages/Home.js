import React from 'react';
import styled from 'styled-components';
import PangImage from '../assets/cats/PangImage.jpg';
import  Button  from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
// 개인 프로젝트이기 때문에 css-in-js 이용

const Home = () => {

  const navigate = useNavigate();


  const handleClickButton= () => {
    navigate('/question');
  }

  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Contents>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImage>
          <img src={PangImage} className="rounded-circle" width={350} height={350}></img>
        </LogoImage>
        <Desc>MBTI를 기반으로하는 나에게 맞는 고양이 찾기</Desc>
        <Button onClick={handleClickButton}>테스트 시작하기</Button>
      </Contents>
    </Wrapper>
  )
}

const Wrapper = styled.div`
height: 100vh;
width: 100%
`
const Header = styled.div`
font-size: 40pt;
display: flex;
justify-content: center;
align-items: center;
`
const Contents = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Title = styled.div`
  font-size: 30pt;
  margin-top: 40px;
`
const LogoImage = styled.div`
  margin-top: 10px;
`

const Desc = styled.div`
  font-size: 20pt;
  margin-top: 20px;
`
export default Home;