export const START_LOADING = 'event-processing/START_LOADING';
export const END_LOADING = 'event-processing/END_LOADING';

export const ERROR = 'event-processing/ERROR';

export type StartLoadingProps = {
  type?: typeof START_LOADING;
};
export type EndLoadingProps = {
  type?: typeof END_LOADING;
};
export type ErrorProps = {
  type?: typeof ERROR;
  data_error: string;
};
export type ActionsType = StartLoadingProps | EndLoadingProps | ErrorProps;

export function startOfLoading() {
  return {type: START_LOADING};
}
export function endOfLoading() {
  return {type: END_LOADING};
}
export function getIsError(message: string) {
  return {type: ERROR, data_error: message};
}
