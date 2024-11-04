import styled from 'styled-components';
import tw from 'twin.macro';

const TwButton = styled.button`
  ${tw`
    relative
    w-full
    gap-2
    border-none
    text-white
    px-2
    h-[30px]
    text-center
    rounded-md
    overflow-hidden
    cursor-pointer
    bg-blue-500
  `}
`
interface Props {
  leftChild?: React.ReactNode
  text: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
  rightChild?: React.ReactNode
}

export default function Button({leftChild, text, onClick, rightChild}:Props) {
  return (
    <TwButton onClick={onClick}>{text}</TwButton>
  )
}