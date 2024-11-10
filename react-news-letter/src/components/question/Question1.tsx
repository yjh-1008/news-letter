import Input from '../Input.tsx'
import useInput from '../../hooks/useInput.ts'
import styled from 'styled-components';
import tw from 'twin.macro';
import useSelect from '../../hooks/useSelect.ts';
import Dropdown from '../Dropdown.tsx';
import { useState } from 'react';
const InfoContainer = styled.div`
  ${
    tw`
      flex
      flex-col
      gap-1
    `
  }
  > div:nth-child(1) {
    text-align: left;
    font-weight: bold;
  }
`

export default function Question1() {
  const emailInput = useInput(undefined,'');
  const ageSelectBoxInfo = useSelect();
  const [chkInfo, setChkInfo] = useState<boolean>(false);
  return (
    <>
      <InfoContainer>
        <div>이메일</div>
        <Input {...emailInput} />
        <div className="text-red-500 text-sm">{emailInput.validationText} 1</div>
      </InfoContainer>
      <InfoContainer>
         <div>연령대</div>
         <Dropdown {...ageSelectBoxInfo} list={[{key:'test',value:'test'}]} />
      </InfoContainer>
      <InfoContainer>
        <label htmlFor="info_agree" className="text-left">
          <input id="info_agree" type="checkbox" onClick={()=>console.log('click')} checked={chkInfo}  onChange={({ target: { checked } }) => setChkInfo(checked)} />
          <span>이메일, 연령대 등의 개인정보를 수집하는 것에 동의합니다.</span>
        </label>
      </InfoContainer>

    </>
  )
}