import useSavingsProduct from '../api/savings/savings.query';
import useSavingsStore from '../store/savings/useSavingsStore';
import { useMemo } from 'react';

const useSavingResultLogic = (selectedProductId?: string | null) => {
  const { data: productData } = useSavingsProduct(selectedProductId);
  const { getRecommendProduct } = useSavingsProduct();
  const userInputSavingValues = useSavingsStore(state => state.userInputSavingValues);
  const getExpectedSavingResults = useSavingsStore(state => state.getExpectedSavingResults);

  // 1. 예상 결과 계산
  const expectedResults = useMemo(() => {
    return getExpectedSavingResults(productData?.annualRate);
  }, [productData?.annualRate, getExpectedSavingResults, userInputSavingValues]);

  // 2. UI용 데이터 포맷팅
  const calculateResults = useMemo(
    () => [
      { top: '예상 수익 금액', bottom: `${expectedResults.expectedTotalAmount.toLocaleString()}원` },
      { top: '목표 금액과의 차이', bottom: `${expectedResults.difference.toLocaleString()}원` },
      { top: '추천 월 납입 금액', bottom: `${expectedResults.recommendedMonthlyAmount.toLocaleString()}원` },
    ],
    [expectedResults]
  );

  // 3. 추천 상품 목록 조회
  const recommendProducts = useMemo(() => {
    return getRecommendProduct(userInputSavingValues.monthlyAmount, userInputSavingValues.period) ?? [];
  }, [userInputSavingValues.monthlyAmount, userInputSavingValues.period, getRecommendProduct]);

  return {
    calculateResults: calculateResults,
    recommendProducts,
    isLoading: !productData && Boolean(selectedProductId), // 필요 시 로딩 상태 추가
  };
};

export default useSavingResultLogic;
