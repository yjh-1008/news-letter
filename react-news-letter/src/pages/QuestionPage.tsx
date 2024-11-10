import { useParams } from "react-router-dom"
import styled from 'styled-components';
import tw from 'twin.macro';
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import mockData from '../../public/mockData.json';
import { useEffect, useState } from "react";
import type { Question } from "../types/types";
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
    sm:w-[800px]
    sm:h-[600px]
    overflow-hidden
  `}
  ${
  `
    transform: translateY(-50%) translateX(-50%);
  `}
`;

const ProgressBar = styled.div`
    width: 100%;
    height: 15px;
    background-color: #dedede;
    font-weight: 600;
    font-size: .8rem;
    overflow: hidden;
    margin: 10px auto;
`;
const Progress = styled.div<ITest>`
    width: ${props => props.width}%;
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
  const params = useParams();
  const [question, setQuestion] = useState<Question>();
  const [child, setChild] = useState<React.ReactNode | null>();
  const onPrev = () => {
    navigate(`/question/${Number(params.step)-1}`)
  }

  const onNext = () => {
    navigate(`/question/${Number(params.step)+1}`)
  }
  useEffect(() => {
    const fetchData = async () => {
      const data:Question[] = await mockData;
      const currentQuestion = data.find((d) => d.id === params.step);
      console.log(currentQuestion)
      const comp = await import(`../components/question/Question${params.step}.tsx`);
      const QuestionComponent = comp.default;
      setChild(<QuestionComponent />);
      setQuestion(currentQuestion);
    };
    fetchData();
  }, [ params.step]);

  
  return (
    <Container>
      <ProgressBar>
        <Progress width={100-((8-Number(params.step))*100/8)}/>
      </ProgressBar>
      <div className="p-4 grow flex flex-col">
        <div className="h-[50px] text text-2xl font-extrabold">
          {question?.content}
        </div>
        <section className="grow">
          {child}
        </section>
        <div className="flex gap-2 h-[50px]">
          <Button text="이전" onClick={onPrev} disabled={params.step === '1'} />
          <Button text="다음" onClick={onNext} disabled={params.step === '8'} />
        </div>
      </div>
    </Container>
  )
}