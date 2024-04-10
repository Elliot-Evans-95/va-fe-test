import { ChangeEvent, useCallback, useState } from "react";

import styles from "./filter-search-item.module.css";
import { FilterDataType, FilterSearchItem } from "@/types/filter-search";

interface FilterSearchItemComponentProperties {
  item: FilterSearchItem;
  checkboxChangeCallback: (
    checked: boolean,
    type: FilterDataType,
    value: string | [min: number, max: number],
  ) => void;
}

export function FilterSearchItemComponent({
  item,
  checkboxChangeCallback,
}: FilterSearchItemComponentProperties) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const isChecked = event.currentTarget.checked;
      setChecked(isChecked);
      checkboxChangeCallback(isChecked, item.type, item.value);
    },
    [checkboxChangeCallback, item.type, item.value],
  );

  return (
    <label htmlFor={item.name} className={styles.filterSearchItem__wrapper}>
      <input
        type="checkbox"
        id={item.name}
        name={item.name}
        checked={checked}
        onChange={handleCheckboxChange}
      />
      {item.displayName}
    </label>
  );
}
