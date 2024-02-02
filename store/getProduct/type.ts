export type ProductProps = {
  data: DataProps;
};
type DataProps = {
  product: {
    product_name: string;
    stores: string;
    additives_old_tags: Array<string>;
    categories: string;
    countries: string;
    image_url: string;
    ingredients_analysis_tags: Array<string>;
    manufacturing_places: string;
    nutriments: NutrimentsProps;
    nutrition_grades: string;
    packagings: Array<PackagingsProps>;
  };
};

type NutrimentsProps = {
  carbohydrates: number;
  carbohydrates_unit: string;
  'energy-kj': number;
  'energy-kj_unit': string;
  'energy-kcal': number;
  'energy-kcal_unit': string;
  fat: number;
  fat_unit: string;
  'fruits-vegetables-legumes-estimate-from-ingredients_100g': number;
  'nova-group': number;
  salt: number;
  salt_unit: string;
  sugars: number;
  sugars_unit: string;
};

type PackagingsProps = {
  material: string;
  quantity_per_unit: string;
};
// https://world.openfoodfacts.net/api/v2/product/3017624010701?fields=product_name,image_url,nutrition_grades,nutriments,categories,countries,manufacturing_places,packagings,stores,ingredients_analysis_tags,additives_old_tags

//
