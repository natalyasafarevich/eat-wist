const API_KEY = process.env.API_KEY as string;
const page_size = '25';
// const sort_by = 'sortBy=dataType';
// const sort_order = 'sortOrder=asc';
const brand = '';

export async function getFoodsList(
  page_number: string,
  dataType: string,
) {
  const response = await fetch(
    `https://api.nal.usda.gov/fdc/v1/foods/list?dataType=${dataType}&pageSize=${page_size}
    &pageNumber=${page_number}&api_key=${API_KEY}`,
  );
  return response.json();
}

export async function getFood(foodId: string) {
  const response = await fetch(
    `https://api.nal.usda.gov/fdc/v1/food/${foodId}?api_key=${API_KEY}`,
  );
  return response.json();
}

export async function getFoodCategories(
  category: string,
  dataType: string,
) {
  const response = await fetch(
    ` https://api.nal.usda.gov/fdc/v1/foods/search?api_key=IxaPMYvtMvBgpRYCRtBKydcd8OZ5PquSvgsikpkw&dataType=${dataType}
    &foodCategory=${category}&pageNumber=1&pageSize=${page_size}`,
  );
  return response.json();
}

export async function searchFood(
  value: string,
  page_number: string,
  dataType: string,
  sort: string,
) {
  const response = await fetch(
    `https://api.nal.usda.gov/fdc/v1/foods/search?query=${value}&dataType=${dataType}
    &pageSize=25&pageNumber=${page_number}&sortBy=${sort}&sortOrder=desc&brandOwner=${brand}&api_key=${API_KEY}`,
  );
  return response.json();
}
