import { ChangeEvent, ReactNode } from 'react';
import { TextField } from 'tosslib';

interface InputProps {
  disabled?: boolean;
  label?: string;
  prefix?: string;
  suffix?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  return (
    <>
      <TextField {...props} />
    </>
  );
};

export default Input;
