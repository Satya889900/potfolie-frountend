import { useState } from "react";

export default function useLocalStorage(
  key: string,
  initialValue: string
) {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item || initialValue;
  });

  const saveValue = (newValue: string) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };

  return [value, saveValue] as const;
}