import axios, {AxiosResponse} from 'axios';
import {ListType} from '../store/foods-list/modules';

const APP_KEY: string = 'IxaPMYvtMvBgpRYCRtBKydcd8OZ5PquSvgsikpkw';

// API params


const dataType = 'dataType=Foundation';
const page_size = '25';
const sort_by = 'sortBy=dataType';
const sort_order = 'sortOrder=asc';
const brand = '';

export const getFoodsList = (page_number : string, dataType : string) => {
  return axios.get(`https://api.nal.usda.gov/fdc/v1/foods/list?dataType=${dataType}&pageSize=${page_size}&pageNumber=${page_number}&api_key=${APP_KEY}`);
}

export function getFood(foodId : string) {
  return axios.get(`https://api.nal.usda.gov/fdc/v1/food/${foodId}?api_key=${APP_KEY}`)
}

export const getFoodCategories = (category : string, dataType : string) => {
  return axios.get(` https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${APP_KEY}&dataType=${dataType}&foodCategory=${category}&pageNumber=1&pageSize=${page_size}`);
}

export function searchFood(value : string, page_number : string,dataType:string, sort:string) {
  return axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${value}&dataType=${dataType}&pageSize=25&pageNumber=${page_number}&sortBy=${sort}&sortOrder=desc&brandOwner=${brand}&api_key=${APP_KEY}`)
}
