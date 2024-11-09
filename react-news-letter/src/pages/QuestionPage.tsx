import { useParams } from "react-router-dom"
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
interface ITest{
  width: number,
} 

const Container = styled.div`
  ${tw`
    absolute
    left-1/2
    top-1/2
    w-[800px]
    h-[800px]
    flex
    flex-col
    gap-4
    bg-white
    rounded-lg
    text-center
    flex
    flex-col
    gap-4
    box-border
  `}
  ${
  `
    transform: translateY(-50%) translateX(-50%);
  `}
`;

const ProgressBar = styled.div`
    width: 100%;
    height: 30px;
    background-color: #dedede;
    border-radius:12px;
    font-weight: 600;
    font-size: .8rem;
    margin-top: 20px;
    overflow: hidden;
`;

const Progress = styled.div`
    width: ${(props:ITest) => props.width}%;
    transition: all 0.3s;
    height: 30px;
    padding: 0;
    text-align: center;
    background-color: skyblue;
    color: #111;
`;

export default function QuestionPage() {
  //TODO 메서드 useMemo로 교체
  const navigate = useNavigate();
  const route = useParams();
  const maxItem = 5
	const availableItem = 2
  const onPrev = () => {

  }

  const onNext = () => {
    navigate(`/question/${Number(route.step)+1}`)
  }
  return (
    <Container>
      <ProgressBar>
        <Progress style={{width: `${100-((8-Number(route.step))*100/8)}%`}}/>
      </ProgressBar>
      <div className="p-4 grow flex flex-col">
        <div className="h-[50px] text text-2xl font-extrabold">
          질문
        </div>
        <div className="grow">
          DIV
          </div>
        <div className="flex gap-2 h-[50px]">
          <Button text="이전" onClick={() => {onPrev}} disabled={true} />
          <Button text="다음" onClick={onNext} disabled={false} />
        </div>
      </div>
    </Container>
  )
}