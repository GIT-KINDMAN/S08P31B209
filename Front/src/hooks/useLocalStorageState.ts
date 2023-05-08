import { useEffect, useState } from "react";

// value: T 일때와 (prevValue: T) => T 형태의 메소드를 다 받을 수 있도록 세팅
type SetValue<T> = (value: T | ((prevValue: T) => T)) => void;

function useLocalStorgeState<T>(
  key: string,
  defaultValue: T,
): [T, SetValue<T>] {
  const [state, setState] = useState<T>(() => {
    const localStorageValue = window.localStorage.getItem(key);
    if (localStorageValue) {
      return JSON.parse(localStorageValue);
    }
    return defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorgeState;
