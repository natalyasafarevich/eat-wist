export const GET_SAVE_DATA = '/saveData/GET_SAVE_DATA';

type DataType = {}
export type GetSaveDataType = {
  type: typeof GET_SAVE_DATA,
  data: DataType
}
export const getSaveData = (data : DataType) => {
  return {type: GET_SAVE_DATA, data}
}
