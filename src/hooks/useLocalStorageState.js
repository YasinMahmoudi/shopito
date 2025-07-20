import { useEffect, useState } from 'react';

export function useLocalStorageState(initialState , key) {
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(data));
    },
    [key, data]
  );

  return [data, setData];
}
