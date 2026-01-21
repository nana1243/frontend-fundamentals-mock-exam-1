import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import calculateSavingsResults from '../../utils/calculateSavingsResults';
import { calculateRecommendedMonthlyAmount } from '../../utils/calculateRecommendedMonthlyAmount';

const initialState = {
  userInputSavingValues: {
    targetAmount: 0,
    monthlyAmount: 0,
    period: 12,
  },
};
const useSavingsStore = create(
  combine(initialState, (set, get) => ({
    setUserInputValues: (data: Partial<typeof initialState.userInputSavingValues>) =>
      set(state => ({
        userInputSavingValues: {
          ...state.userInputSavingValues,
          ...data,
        },
      })),
    getExpectedSavingResults: (
      annualRate: number
    ): { expectedTotalAmount: number; difference: number; recommendedMonthlyAmount: number } => {
      const { monthlyAmount, period, targetAmount } = get().userInputSavingValues;
      const expectedTotalAmount = calculateSavingsResults(monthlyAmount, period, annualRate);
      const difference = targetAmount - expectedTotalAmount;
      const recommendedMonthlyAmount = calculateRecommendedMonthlyAmount(targetAmount, period, annualRate);
      return {
        expectedTotalAmount,
        difference,
        recommendedMonthlyAmount,
      };
    },
    resetInputs: () => set(initialState),
  }))
);

export default useSavingsStore;
