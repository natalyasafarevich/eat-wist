export const SEARCH_PARAMS = 'searchParams/SEARCH_PARAMS';
export type DataParams = {
  title: string;
  sortBy: string;
  country: string;
  additives: string;
  nutrition_grades: string;
  brands: string;
};
export type getParamsT = {
  type: typeof SEARCH_PARAMS;
  data: DataParams;
};

export type ActionsType = getParamsT;
export const getParams = (card: DataParams): getParamsT => {
  const {title, sortBy, country, additives, nutrition_grades, brands} = card;

  const data = {
    title,
    sortBy,
    country,
    additives,
    nutrition_grades,
    brands,
  };

  return {type: SEARCH_PARAMS, data};
};
