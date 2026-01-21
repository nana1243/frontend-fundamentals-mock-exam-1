import { TAX_FACTOR } from '../constants/savings';

/**
 * 목표 금액 달성을 위한 추천 월 납입액 계산
 */
export const calculateRecommendedMonthlyAmount = (targetAmount: number, period: number, annualRate: number) => {
  const r = annualRate / 100;
  const n = period;

  // 월 납입액 1원당 발생하는 총 수령액 계수 (원금 1원 + 세후 이자)
  const multiplier = n + ((n * (n + 1)) / 2) * (r / 12) * TAX_FACTOR;

  // 목표 금액 / 계수 = 필요한 월 납입액
  return Math.ceil(targetAmount / multiplier);
};
