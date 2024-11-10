import { SelectItem } from "../hooks/useSelect";

export default function DropdownListItem({item, onItemClick}: {
  item:SelectItem,
  onItemClick : (item: SelectItem) => void
}) {
  return (
    <li className="border-b" onClick={() => onItemClick(item)}>
      {item.value}
    </li>
  )
}