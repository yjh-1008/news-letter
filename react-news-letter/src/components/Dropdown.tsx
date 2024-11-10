import type { SelectItem } from "../hooks/useSelect"
import DropdownListItem from "./DropdownListItem"
import { Dispatch, SetStateAction } from 'react';
export default function Dropdown({
  list,
  selectItem,
  visible,
  setVisible,
  setSelectItem
} :{
  list: SelectItem[],
  selectItem: SelectItem,
  visible: boolean,
  setVisible: Dispatch<SetStateAction<boolean>>,
  setSelectItem: Dispatch<SetStateAction<SelectItem>>
}) {
  const onListItemClick = (item: SelectItem) => {
    console.log(item);
    setSelectItem(item);
    setVisible(false);
  }
  const onListClick = () => {
    setVisible(!visible);
  }
  return (
    <article className="relative z-0">
      <div className="h-7 border rounded border-black " onClick={onListClick}>{selectItem.value}</div>
        {
        visible &&
          (
            <ul className="w-full top-7 absolute z-10 overflow-hidden border-black">
              <div className={`animate-[fade-down_0.5s]`}>
                <div className={`bg-white border border-black w-full`}>
                  {list.map((listItem) => 
                    <DropdownListItem
                      item= {listItem} 
                      onItemClick={onListItemClick} 
                    />
                  )}
                </div>
              </div>
          </ul>
          )
        }
    </article>
  )
}