import React, { Fragment } from 'react';
import Input from '../../ui/Input';
import { Spacing } from 'tosslib';
import Select from '../../ui/Select';
import { USER_INPUT_CONFIG } from '../../../constants/savings';
import useSavingsStore from '../../../store/savings/useSavingsStore';

const SavingUserInputLayout = ({ onChange }) => {
  const userInputSavingValues = useSavingsStore(state => state.userInputSavingValues);
  const INPUT_COMPONENTS: Record<string, any> = {
    input: Input,
    select: Select,
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
                console.log('val', val);
                const finalValue = val?.target ? val.target.value : val;
                onChange(data.id, finalValue);
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
