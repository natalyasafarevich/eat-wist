import axios from 'axios';
import {some} from 'lodash';

export default function searchProducts(
  value: string,
  page: number,
  sort?: string,
  country?: string,
) {
  return axios.get(
    `https://world.openfoodfacts.net/api/v2/search?categories_tags=${value}${
      country ? `&countries_tags=${country}` : ''
    }
    &fields=code,nutriments,product_name,brands,image_url,nutrition_grades,ecoscore_grades
    &sort_by=${sort ? sort : 'ecoscore_score'}&page=${page} `,
  );
  // https://by.world.openfoodfacts.net/api/v2/search?categories_tags_en=milk&fields=code,nutriments,product_name,brands,image_url,nutrition_grades,ecoscore_grades%20%20%20%20&sort_by=product_name&page=1&page_count=24
  // https://world.openfoodfacts.net/api/v2/search?categories_tags_en=tomato&fields=code%2Cproduct_name&sort_by=nutriscore_score
  // let data = await fetch(
  //   'https://world.openfoodfacts.org/cgi/search.pl?json=1&lc=ru&search_terms=tomato&fields=code,product_name,brands,image_url,nutriscore_data&page=1',
  // );
  // return data;
}
