/* 세전 적금 이자 계산 함수
 * @param {number} monthlyAmount - 월 납입액 (원)
 * @param {number} period - 저축 기간 (개월)
 * @param {number} annualRate - 연 이자율 (%, 예: 3.2)
 */
const calculateSavingsResults = (monthlyAmount: number, period: number, annualRate: number) => {
  const r = annualRate / 100;
  const interest = monthlyAmount * ((period * (period + 1)) / 2) * (r / 12);
  return monthlyAmount * period + interest;
};

export default calculateSavingsResults;
