import styled from 'styled-components';
import tw from 'twin.macro';
import MailIcon from '@/assets/email.png'
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
  ${tw`
    absolute
    left-1/2
    top-1/2
    w-[800px]
    h-[400px]
    flex
    flex-col
    gap-4
    bg-white
    rounded-lg
    p-4
    text-center
    box-border
  `}
  ${
  `
    transform: translateY(-50%) translateX(-50%);
  `}
`;

const Title = styled.div`
  ${tw`
    text-center
    font-bold
    text-3xl
    relative
    animate-[fade-up_1s]
  `}
`

const Logo = styled.div`
  background-image : url(${MailIcon});
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
  width: 100px;
  height: 100px;
`
const MainText = styled.div`
  ${tw`
      animate-[fade-slow-up_1s]
  `}
  font-size: 2rem;
  font-weight: bold;
  flex-grow: 1;
  position: relative;
`

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <Container>
      <Logo />
      <Title>Develetter</Title>
      <MainText>나의 커리어 정보를 손쉽게 받아보세요!</MainText>
      <Button text={"클릭"} onClick={() => navigate('/question/1')} />
      <div>
        깃허브, 이메일, 블로그
      </div>
      <div>본 사이트는 유저의 정보를 수집하고 있습니다. 사용시 주의해주세요.</div>
    </Container>
  )
}
