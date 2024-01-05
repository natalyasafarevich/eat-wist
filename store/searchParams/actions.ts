export const SEARCH_PARAMS = 'searchParams/SEARCH_PARAMS';
export type DataParams = {
  title: string;
  sortBy: string;
  criteria: string;
  additives: string;
  palmOil: string;
};
export type getParamsT = {
  type: typeof SEARCH_PARAMS;
  data: DataParams;
};

export type ActionsType = getParamsT;
export const getParams = (card: DataParams): getParamsT => {
  const {title, sortBy, criteria, additives, palmOil} = card;

  const data = {
    title,
    sortBy,
    criteria,
    additives,
    palmOil,
  };

  return {type: SEARCH_PARAMS, data};
};
