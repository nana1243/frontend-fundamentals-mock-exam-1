import { useQuery } from '@tanstack/react-query';
import { getProducts } from './savings.api';

export default function useSavingsProduct() {
  return useQuery({
    queryKey: ['savings-products'],
    queryFn: getProducts,
  });
}
