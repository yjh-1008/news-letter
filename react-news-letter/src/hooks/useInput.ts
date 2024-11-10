import { useState, useRef } from "react";

export default function useInput(validationParam?:() => boolean, initialText?: string) {
  const [text, setText] = useState<string>(initialText ? initialText : '');
  const [validationText, setValidationText] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const validation = () => {
    if(!validationParam) return true;
    const result = validationParam();
    if(!result) {
      inputRef.current?.focus();
      setValidationText('오류')
    }
  }

  return {
    text,
    setText,
    inputRef,
    validationText,
    validation
  }
}