import request from '../request';

const Products = {
  listProduct: () => {
    const url = `products`;
    return request.get(url);
  },

  productDetail: (params: string) => {
    const url = `products/${params}`;
    return request.get(url);
  },
};

export default Products;
