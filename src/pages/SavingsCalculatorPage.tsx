import { Border, NavigationBar, Spacing } from 'tosslib';
import SavingUserInputLayout from '../components/savings/SavingsUserInputLayout';
import { useState } from 'react';
import SavingsResultLayout from '../components/savings/SavingsResultLayout';
import { TAB_VALUES } from '../constants/savings';
import useSavingsStore from '../store/savings/useSavingsStore';

type UserInputIds = 'targetAmount' | 'monthlyAmount' | 'period';
type TabValue = (typeof TAB_VALUES)[number]['value'];

export function SavingsCalculatorPage() {
  const [tabValue, setTabValue] = useState<TabValue>(TAB_VALUES[0].value);

  const { setUserInputValues } = useSavingsStore();

  const handleUserInputChange = (id: UserInputIds, targetData: number) => {
    setUserInputValues({ [id]: targetData });
  };

  const handleTabChange = (value: TabValue) => {
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
