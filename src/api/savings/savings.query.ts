import { useQuery } from '@tanstack/react-query';
import { getProducts } from './savings.api';

export default function useSavingsProduct(productId?: string) {
  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ['savings-products'],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5,
    select: data => {
      if (productId) {
        return data.find(product => product.id === productId);
      }
      return data;
    },
  });
  const getRecommendProduct = (monthlyAmount?: number, period?: number) => {
    if (!data || !monthlyAmount || !period) {
      return null;
    }

    return data.find(product => product.minMonthlyAmount <= monthlyAmount && product.availableTerms >= period) || null;
  };

  return {
    data,
    isLoading,
    isFetching,
    error,
    getRecommendProduct,
  };
}
