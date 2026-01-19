import { Border, NavigationBar, Spacing } from 'tosslib';
import SavingUserInputLayout from '../components/SavingsUserInputLayout';
import { useState } from 'react';
import SavingsResultLayout from '../components/SavingsResultLayout';
import { TAB_VALUES } from '../constants/savings';

export function SavingsCalculatorPage() {
  const [userSavingsInputData, setUserSavingsInputData] = useState({ targetAmount: 0, monthlyAmount: 0, period: 12 });
  const [tabValue, setTabValue] = useState(TAB_VALUES[0].value);

  const handleUserInputChange = (id, targetData) => {
    console.log('id, targetData', id, targetData);
    setUserSavingsInputData(prev => ({ ...prev, [id]: targetData }));
  };

  const handleTabChange = (value: string) => {
    console.log('Selected Tab:', value);
    setTabValue(value);
  };

  return (
    <>
      <NavigationBar title="적금 계산기" />
      <SavingUserInputLayout values={userSavingsInputData} onChange={handleUserInputChange} />

      <Border height={16} />
      <Spacing size={8} />
      <SavingsResultLayout handleOnChange={handleTabChange} tabValue={tabValue} />

      {/*<Spacing size={40} />*/}

      {/* 아래는 사용자가 적금 상품을 선택하지 않고 계산 결과 탭을 선택했을 때 출력해주세요. */}
      {/* <ListRow contents={<ListRow.Texts type="1RowTypeA" top="상품을 선택해주세요." />} /> */}
    </>
  );
}
