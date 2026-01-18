import { http } from 'tosslib';

const getProducts = async () => {
  const response = await http.get('/api/savings-products');
  console.log(response);
};

export { getProducts };
