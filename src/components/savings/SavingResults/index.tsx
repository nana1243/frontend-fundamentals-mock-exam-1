import { Border, ListHeader, Spacing } from 'tosslib';
import useSavingsStore from '../../../store/savings/useSavingsStore';
import useSavingsProduct from '../../../api/savings/savings.query';
import { useMemo } from 'react';
import SavingExpectedResults from '../SavingExpectedResults';
import SavingRecommendResults from '../SavingRecommendResults';

interface SavingResultsProps {
  selectedProductId?: string | null;
}

const SavingContentStyles = () => {
  return (
    <>
      <Spacing size={8} />
      <Border height={16} />
      <Spacing size={8} />
    </>
  );
};

const SavingResults = (props: SavingResultsProps) => {
  const { selectedProductId } = props;
  const { data } = useSavingsProduct(selectedProductId);
  const { getRecommendProduct } = useSavingsProduct();
  const userInputSavingValues = useSavingsStore(state => state.userInputSavingValues);
  const getExpectedSavingResults = useSavingsStore(state => state.getExpectedSavingResults);

  const expectedResults = useMemo(() => {
    return getExpectedSavingResults(data?.annualRate);
  }, [data?.annualRate, getExpectedSavingResults, userInputSavingValues]);

  const listRowConfigData = [
    { top: '예상 수익 금액', bottom: `${expectedResults.expectedTotalAmount.toLocaleString()}원` },
    { top: '목표 금액과의 차이', bottom: `${expectedResults.difference.toLocaleString()}원` },
    { top: '추천 월 납입 금액', bottom: `${expectedResults.recommendedMonthlyAmount.toLocaleString()}원` },
  ];
  const recommendProducts = useMemo(() => {
    return getRecommendProduct(userInputSavingValues.monthlyAmount, userInputSavingValues.period) ?? [];
  }, [userInputSavingValues.monthlyAmount, userInputSavingValues.period, getRecommendProduct]);

  return (
    <>
      <SavingExpectedResults selectedProductId={selectedProductId} listRowConfigData={listRowConfigData} />
      <SavingContentStyles />
      <SavingRecommendResults recommendProducts={recommendProducts} />
    </>
  );
};

export default SavingResults;
