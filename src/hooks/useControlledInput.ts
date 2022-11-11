import { useState, useCallback, ChangeEvent, ChangeEventHandler } from 'react';

export const useControlledInput =
  (initialValue?: string): [string, ChangeEventHandler<HTMLInputElement>] => {
    const [value, setValue] = useState(initialValue || '');

    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    }, []);

    return [value, onChange];
  };