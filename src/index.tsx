import { useState, Dispatch } from 'react';
import { THook } from './useLocalStorage.d';

const useLocalStorage: THook<T> = <T extends unknown>(key: string, defaultValue: T = null) => {
  if (!window) {
    throw new Error('"window" is falsy/undefined');
  }

  const [value, setValue] = useState<T>(window.localStorage.getItem(key) || defaultValue);

  const setter: Dispatch<T> = (newValue: T) => {
    setValue(JSON.stringify(newValue));
    window.localStorage.setItem(key, JSON.stringify(newValue));
  }

  return [value, setter];
}

export default useLocalStorage;
