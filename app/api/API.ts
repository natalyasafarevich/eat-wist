import axios from 'axios';

export default function searchProducts(value: string, page: number) {
  return axios.get(
    `https://world.openfoodfacts.org/cgi/search.pl?json=1&search_terms=${value}
    &fields=code,nutriments,product_name,brands,image_url,nutrition_grades,ecoscore_grades
    &page=${page}?sort_by=nutriscore_score`,
  );

  // let data = await fetch(
  //   'https://world.openfoodfacts.org/cgi/search.pl?json=1&lc=ru&search_terms=tomato&fields=code,product_name,brands,image_url,nutriscore_data&page=1',
  // );
  // return data;
}
