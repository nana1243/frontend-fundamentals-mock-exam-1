import { z } from 'zod';

export const SavingsProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  annualRate: z.number(),
  minMonthlyAmount: z.number(),
  maxMonthlyAmount: z.number(),
  availableTerms: z.number(),
});

export const SavingsProductListSchema = z.array(SavingsProductSchema);

export type SavingsProduct = z.infer<typeof SavingsProductSchema>;
export type SavingsProductList = z.infer<typeof SavingsProductListSchema>;
