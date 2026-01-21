import { Border, NavigationBar, Spacing } from 'tosslib';
import SavingUserInputLayout from '../components/savings/SavingsUserInputLayout';
import { useState } from 'react';
import SavingsResultLayout from '../components/savings/SavingsResultLayout';
import { TAB_VALUES } from '../constants/savings';
import useSavingsStore from '../store/savings/useSavingsStore';

export function SavingsCalculatorPage() {
  const [tabValue, setTabValue] = useState(TAB_VALUES[0].value);

  const { setUserInputValues } = useSavingsStore();

  const handleUserInputChange = (id, targetData) => {
    console.log('id, targetData', id, targetData);
    setUserInputValues({ [id]: targetData });
  };

  const handleTabChange = (value: string) => {
    console.log('Selected Tab:', value);
    setTabValue(value);
  };

  return (
    <>
      <NavigationBar title="적금 계산기" />
      <SavingUserInputLayout onChange={handleUserInputChange} />

      <Border height={16} />
      <Spacing size={8} />
      <SavingsResultLayout handleOnChange={handleTabChange} tabValue={tabValue} />
    </>
  );
}
