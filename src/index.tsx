import { useState, Dispatch } from 'react';
import { THook } from './useLocalStorage.d';

const useLocalStorage: THook = (key: string) => {
  if (typeof window === 'undefined' || typeof key !== 'string' || !key) {
    return [null, (_: string) => null];
  }

  const [value, setValue] = useState<string>(window.localStorage.getItem(key) || '');

  const setter: Dispatch<string> = (newValue: string) => {
    setValue(newValue);
    window.localStorage.setItem(key, newValue);
  }

  return [value, setter];
}

export default useLocalStorage;
