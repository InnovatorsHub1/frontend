import { useCallback, useEffect, useState } from 'react';

// Prefix
import {prefix} from "../utils/constants"

export function useSessionStorage<T = any>(key: string, defaultValue?: T) {
  const [value, setValue] = useState<T>(() => {
    const item = sessionStorage.getItem(prefix + key);

    if (item) {
      try {
        return JSON.parse(item);
      } catch (_error) {
        return item;
      }
    }

    return defaultValue;
  });

  useEffect(() => {
    sessionStorage.setItem(prefix + key, JSON.stringify(value));
  }, [key, value]);

  const deleteValue = useCallback(() => sessionStorage.removeItem(prefix + key), [key]);

  return [value, setValue, deleteValue] as [T, React.Dispatch<React.SetStateAction<T>>, () => void];
}
