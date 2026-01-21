import { http } from 'tosslib';
import { SavingsProductList, SavingsProductListSchema } from './savings.schema';

const getProducts = async (): Promise<SavingsProductList> => {
  const result = await http.get('/api/savings-products');
  return SavingsProductListSchema.parse(result);
};

export { getProducts };
