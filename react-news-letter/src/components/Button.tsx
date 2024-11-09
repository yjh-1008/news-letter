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
    h-full
    text-center
    rounded-md
    overflow-hidden
    cursor-pointer
  `}
  ${
    props => 
      props.disabled ? tw`bg-gray-500` : tw`bg-blue-500`
  }
`
interface Props {
  leftChild?: React.ReactNode
  text: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
  disabled: boolean
  rightChild?: React.ReactNode
}

export default function Button({leftChild, text, onClick, rightChild, disabled=false}:Props) {
  return (
    <TwButton onClick={onClick} disabled={disabled}>
      {leftChild}
      <div>{text}</div>
      {rightChild}
    </TwButton>
  )
}