import React from 'react';
import styled from 'styled-components';
import  Button  from 'react-bootstrap/Button';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ResultData } from '../assets/data/resultdata';
import './Result.css';


const Result = () => {

  const navigate = useNavigate()
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get('mbti');
  const [resultData, setResultData] = React.useState({})
  // 최종적으로 도출한 결과 겍체

  React.useEffect(()=>{
    const result = ResultData.find((s) => s.best === mbti);
    setResultData(result);
  },[mbti])

  return (
    <Wrapper className='result__wrapper'>
      <Header className='result__header'><div>예비집사 판별기</div></Header>
      <Contents>
        <LogoImage>
          <img alt='결과이미지' src={resultData.image} className="rounded-circle" width={250} height={250}></img>
        </LogoImage>
        <Desc className='result__desc'>
          <div>예비 집사님과 찰떡궁합인 고양이는 {resultData.name}입니다.</div>
          <div>{resultData.desc}</div>
        </Desc>
       <ButtonGroup> 
          <Button onClick={() => navigate("/")}>
            테스트 다시하기
          </Button>
        </ButtonGroup> 
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

const LogoImage = styled.div`
  margin-top: 10px;
`

const Desc = styled.div`

`
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
`

export default Result;