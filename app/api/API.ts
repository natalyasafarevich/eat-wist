import axios from 'axios';
import {some} from 'lodash';

export default function searchProducts(
  value: string,
  page: number,
  sort?: string,
  country?: string,
  additives?: string,
) {
  return axios.get(
    `https://world.openfoodfacts.net/api/v2/search?${
      additives && `additives_tags=${additives}`
    }&categories_tags=${value}${country ? `&countries_tags=${country}` : ''}
    &fields=code,nutriments,product_name,brands,image_url,nutrition_grades,ecoscore_grades
    &sort_by=${sort ? sort : 'ecoscore_score'}&page=${page} `,
  );

  // curl -X GET "https://world.openfoodfacts.net/api/v2/search?additives_tags=e322&allergens_tags=m&brands_tags=ferrero&categories_tags=chocolates&countries_tags_en=united-kingdom&labels_tags=organic&nutrition_grades_tags=e&packaging_tags_de=1-jar-aus-klarglas&states_tags=nutrition-facts-completed&stores_tags=aldi&fields=code%2Cproduct_name&sort_by=product_name"
  // https://by.world.openfoodfacts.net/api/v2/search?categories_tags_en=milk&fields=code,nutriments,product_name,brands,image_url,nutrition_grades,ecoscore_grades%20%20%20%20&sort_by=product_name&page=1&page_count=24
  // https://world.openfoodfacts.net/api/v2/search?categories_tags_en=tomato&fields=code%2Cproduct_name&sort_by=nutriscore_score
  // let data = await fetch(
  //   'https://world.openfoodfacts.org/cgi/search.pl?json=1&lc=ru&search_terms=tomato&fields=code,product_name,brands,image_url,nutriscore_data&page=1',
  // );
  // return data;
}
