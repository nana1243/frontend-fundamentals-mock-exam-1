import { ReactElement, ReactNode } from 'react';
import { SelectBottomSheet } from 'tosslib';

type OptionProps<T> = {
  children: ReactNode;
  onSelect?: (value: T) => void;
  value: T;
  checked?: boolean;
};

interface SelectBottomSheetProps<T> {
  label: string;
  title: string;
  children: Array<ReactElement<OptionProps<T>>> | ReactElement<OptionProps<T>>;
  value: T;
  onChange: (value: T) => void;
  className: string;
}

const Select = <T,>({ label, title, children, value, onChange, className }: SelectBottomSheetProps<T>) => {
  return (
    <SelectBottomSheet label={label} title={title} value={value} onChange={onChange} className={className}>
      {children}
    </SelectBottomSheet>
  );
};

Select.Option = SelectBottomSheet.Option;

export default Select;
