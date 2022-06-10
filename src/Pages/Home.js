import React from 'react';
import styled from 'styled-components';
import PangImage from '../assets/cats/PangImage.jpg';
import  Button  from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './Home.css';
// 개인 프로젝트이기 때문에 css-in-js 이용

const Home = () => {

  const navigate = useNavigate();


  const handleClickButton= () => {
    navigate('/question');
  }

  return (
    <Wrapper className='home__wrapper'>
      <Header className='home__header'><div>예비집사 판별기</div></Header>
      <Contents className='home__contents'>
        <Title className='home__title'><div>나에게 맞는 주인님은?</div></Title>
        <LogoImage>
          <img alt='고양이 사진' src={PangImage} className="rounded-circle" width={250} height={250}></img>
        </LogoImage>
        <Desc className='home__desc'>
          <div>MBTI를 기반으로하는 나에게 맞는 고양이 찾기</div>
        </Desc>
        <Button className='start__button' onClick={handleClickButton}>테스트 시작하기</Button>
      </Contents>
    </Wrapper>
  )
}

const Wrapper = styled.div`
height: 100vh;
width: 100%
`
const Header = styled.div`
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
  margin-top: 40px;
`
const LogoImage = styled.div`
  margin-top: 10px;
`

const Desc = styled.div`
  margin-top: 20px;
`
export default Home;