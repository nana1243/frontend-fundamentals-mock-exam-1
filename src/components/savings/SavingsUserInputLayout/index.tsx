import React, { ChangeEvent, Fragment } from 'react';
import Input from '../../ui/Input';
import { Spacing } from 'tosslib';
import Select from '../../ui/Select';
import { USER_INPUT_CONFIG } from '../../../constants/savings';
import useSavingsStore from '../../../store/savings/useSavingsStore';

type UserInputIds = 'targetAmount' | 'monthlyAmount' | 'period';

interface SavingUserInputLayoutProps {
  onChange: (id: UserInputIds, value: number) => void;
}

const INPUT_COMPONENTS: Record<string, typeof Input | typeof Select> = {
  input: Input,
  select: Select,
};

const SavingUserInputLayout = ({ onChange }: SavingUserInputLayoutProps) => {
  const userInputSavingValues = useSavingsStore(state => state.userInputSavingValues);

  const handleOnChange = (id: UserInputIds, val: number) => {
    onChange(id, val);
  };

  return (
    <>
      {USER_INPUT_CONFIG.map((data, index) => {
        const Component = INPUT_COMPONENTS[data.type];
        const { type, selectOptions, id, ...restProps } = data;
        if (!Component) {
          return null;
        }

        return (
          <Fragment key={data.id}>
            {index !== 0 && <Spacing size={16} />}
            <Component
              {...restProps}
              value={userInputSavingValues && userInputSavingValues[data.id]}
              onChange={val => {
                const finalValue = val?.target ? val.target.value : val;
                handleOnChange(data.id, finalValue);
              }}
            >
              {type === 'select'
                ? selectOptions?.map(option => (
                    <Select.Option key={option.value} value={option.value}>
                      {option.label}
                    </Select.Option>
                  ))
                : null}
            </Component>
            <Spacing size={24} />
          </Fragment>
        );
      })}
    </>
  );
};

export default SavingUserInputLayout;
