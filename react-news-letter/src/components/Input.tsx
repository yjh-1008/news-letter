import { Dispatch, RefObject, SetStateAction } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const InputComponent = styled.input`
  ${
    tw`
      w-full
      rounded
      border
      border-black
      px-2
      h-[30px]
      relative
    `
  }
`

export default function Input({text,
  setText,
  inputRef,
}: {
  text: string,
  setText: Dispatch<SetStateAction<string>>
  inputRef: RefObject<HTMLInputElement>
}) {
  return <InputComponent ref={inputRef} value={text} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}/>
}