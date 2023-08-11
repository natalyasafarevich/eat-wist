import axios, { AxiosResponse } from 'axios';
import {ListType} from '../store/foods-list/modules';

const APP_KEY: string = 'IxaPMYvtMvBgpRYCRtBKydcd8OZ5PquSvgsikpkw';

// API params

const dataType = 'dataType=Foundation';
const page_size = '25';
const sort_by = 'sortBy=dataType';
const sort_order = 'sortOrder=asc';

const foodId = '534958';


export const getFoodsList = (page_number : string ,dataType:string)  => {
  return axios.get(`https://api.nal.usda.gov/fdc/v1/foods/list?dataType=${dataType}&pageSize=${page_size}&pageNumber=${page_number}&api_key=${APP_KEY}`);
}

export function getFood(foodId: string) {
  return axios.get(`https://api.nal.usda.gov/fdc/v1/food/${foodId}?api_key=${APP_KEY}`)
}

export function searchFood(value: string, page_number: string) {
  return axios.get(`https://api.nal.usda.gov/fdc/v1/foods/?api_key=${APP_KEY}
  search?query=${value}&dataType=Foundation,SR%20Legacy&pageSize=${page_size}
  &pageNumber=${page_number}&${sort_by}.keyword&${sort_order}`)
}
