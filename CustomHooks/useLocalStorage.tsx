import {useEffect, useState} from 'react';

interface UseLocalStorageProps {
  initialState: Array<any>;
  key: string;
}

const useLocalStorage = ({initialState, key}: UseLocalStorageProps) => {
  const getValue = () => {
    const storage = localStorage.getItem(key);
    if (storage) {
      return JSON.parse(storage);
    }
    return initialState;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
