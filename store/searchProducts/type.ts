export type DataProduct = {
  data: DataType;
};

export type DataType = {
  count: number;
  page: number;
  page_count: number;
  page_size: number;
  products: Array<CutDataProductsT>;
};
export type CutDataProductsT = {
  brands: string;
  code: string;
  image_url: string;
  product_name: string;
  nutrition_grades: string;
  // ecoscore_grades: string;
  nutriments: {
    ['energy-kcal']: string;
  };
};
