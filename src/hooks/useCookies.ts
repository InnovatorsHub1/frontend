import { useCallback, useEffect, useState } from 'react';
import cookies from 'js-cookie';
import { prefix } from '../utils/constants';

const getFullKey = (key: string) => `${prefix}__${key}`;

export function useCookies<T = any>(key: string, defaultValue?: T) {
  const fullKey = getFullKey(key);
  const [value, setValue] = useState<T>(() => {
    const item = cookies.get(fullKey);

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
    cookies.set(fullKey, JSON.stringify(value));
  }, [key, value]);

  const deleteValue = useCallback(() => cookies.remove(fullKey), [key]);

  return [value, setValue, deleteValue] as [T, React.Dispatch<React.SetStateAction<T>>, () => void];
}
