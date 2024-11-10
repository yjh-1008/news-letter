import { useState } from "react";

export interface SelectItem {
  key: string,
  value: string,
}

 
export default function useSelect(initialItem?: SelectItem) {
  const [selectItem, setSelectItem] = useState<SelectItem>(initialItem ? initialItem: {key: '', value: ''});
  const [visible, setVisible] = useState<boolean>(false);
  return {
    selectItem,
    visible,
    setVisible,
    setSelectItem
  }
}