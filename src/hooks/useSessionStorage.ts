import { useCallback, useEffect, useState } from 'react';
import { prefix } from '../utils/constants';

const getFullKey = (key: string) => `${prefix}__${key}`;

export function useSessionStorage<T = any>(key: string, defaultValue?: T) {
  const fullKey = getFullKey(key);
  const [value, setValue] = useState<T>(() => {
    const item = sessionStorage.getItem(fullKey);

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
    sessionStorage.setItem(fullKey, JSON.stringify(value));
  }, [key, value]);

  const deleteValue = useCallback(() => sessionStorage.removeItem(fullKey), [key]);

  return [value, setValue, deleteValue] as [T, React.Dispatch<React.SetStateAction<T>>, () => void];
}
