import {I} from "./Generics";
import {DataTypeProps} from "./types-interfaces/types";

// ids for SingleFood
export const idsProduct: Array < I > = [
  {
    id: 1004
  }, {
    id: 1003
  }, {
    id: 1005
  }
];
export const caloriesId: Array < I > = [{
    id: 2047
  }];


// Description Data Type
const dataType: Array < DataTypeProps > = [
  {
    name: "Foundation",
    desc: `Data and metadata on individual samples of commodity/commodity-derived 
  minimally processed foods with insights into variability`
  }, {
    name: "Branded",
    desc: `Data from labels of national and international branded foods collected by a public-private partnership`
  }, {
    name: "Survey (FNDDS)",
    desc: `Data on nutrients and portion weights for foods and beverages reported in What We Eat in America, NHANES`
  }, {
    name: "SR Legacy",
    desc: `Historic data on food components including nutrients derived from analyses, calculations, and published literature`
  },
]


export default dataType;
