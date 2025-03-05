import { useCallback, useEffect, useState } from 'react';
import cookies from 'js-cookie';
import { prefix } from '../utils/constants';

const getFullKey = (key: string) => `${prefix}__${key}`;

export function useCookies<T = any>(key: string, defaultValue?: T) {
  const fullKey = getFullKey(key);
  const [value, setValue] = useState<T>(() => {
    const item = cookies.getItem(fullKey);

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
    cookies.setItem(fullKey, JSON.stringify(value));
  }, [key, value]);

  const deleteValue = useCallback(() => cookies.removeItem(fullKey), [key]);

  return [value, setValue, deleteValue] as [T, React.Dispatch<React.SetStateAction<T>>, () => void];
}
