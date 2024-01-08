export const SEARCH_PARAMS = 'searchParams/SEARCH_PARAMS';
export type DataParams = {
  title: string;
  page_number: number;
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
  const {
    title,
    sortBy,
    country,
    additives,
    nutrition_grades,
    brands,
    page_number,
  } = card;

  const data = {
    title,
    sortBy,
    country,
    additives,
    nutrition_grades,
    brands,
    page_number,
  };

  return {type: SEARCH_PARAMS, data};
};
