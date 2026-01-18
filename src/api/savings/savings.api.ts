import { http } from 'tosslib';

const getProducts = async () => {
  return await http.get('/api/savings-products');
};

export { getProducts };
