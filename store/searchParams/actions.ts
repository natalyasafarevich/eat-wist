export const SEARCH_PARAMS = 'searchParams/SEARCH_PARAMS';
export type DataParams = {
  title: string;
  sortBy: string;
  country: string;
};
export type getParamsT = {
  type: typeof SEARCH_PARAMS;
  data: DataParams;
};

export type ActionsType = getParamsT;
export const getParams = (card: DataParams): getParamsT => {
  const {title, sortBy, country} = card;

  const data = {
    title,
    sortBy,
    country,
  };

  return {type: SEARCH_PARAMS, data};
};
