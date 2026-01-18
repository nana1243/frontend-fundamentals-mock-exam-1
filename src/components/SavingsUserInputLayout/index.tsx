import React, { Fragment } from 'react';
import Input from '../ui/Input';
import { Spacing } from 'tosslib';
import Select from '../ui/Select';

const SavingUserInputLayout = ({ values, onChange }) => {
  const userInputArray = [
    { id: 'targetAmount', label: '목표 금액', placeholder: '목표 금액을 입력하세요', suffix: '원', type: 'input' },
    {
      id: 'monthlyAmount',
      label: '월 납입액',
      placeholder: '희망 월 납입액을 입력하세요',
      suffix: '원',
      type: 'input',
    },
    {
      id: 'period',
      label: '저축 기간',
      title: '저축 기간을 선택해주세요',
      placeholder: '저축 기간을 선택해주세요',
      type: 'select',
      selectOptions: [
        { value: 6, label: '6개월' },
        { value: 12, label: '12개월' },
        { value: 24, label: '24개월' },
      ],
    },
  ];

  const INPUT_COMPONENTS: Record<string, any> = {
    input: Input,
    select: Select,
  };

  return (
    <>
      {userInputArray.map((data, index) => {
        const Component = INPUT_COMPONENTS[data.type];
        const { type, selectOptions, id, ...restProps } = data;
        if (!Component) {
          return null;
        }

        return (
          <Fragment key={data.id}>
            {index !== userInputArray.length - 1 && <Spacing size={16} />}
            <Component {...restProps} value={values[data.id]} onChange={(val: any) => onChange(data.id, val)}>
              {type === 'select'
                ? selectOptions?.map(option => (
                    <Select.Option key={option.value} value={option.value} label={option.label} />
                  ))
                : null}
            </Component>
          </Fragment>
        );
      })}
    </>
  );
};

export default SavingUserInputLayout;
