import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type TypeResponse<T> = [T, Dispatch<SetStateAction<T>>];

function usePersistedState<T>(key: string, initialState: T): TypeResponse<T> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) return JSON.parse(key);

    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;
