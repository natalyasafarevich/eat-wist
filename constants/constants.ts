import {Header} from '@/types';
import {v4 as uuidv4} from 'uuid';

export const HEADER_LINKS: Array<Header> = [
  {
    label: 'Home',
    url: '/',
  },
  {
    label: 'About',
    url: '/about',
  },
];

export const COUNTRIES = [
  {
    name: 'World',
  },
  {
    name: 'USA',
  },
  {
    name: 'Poland',
  },
  {
    name: 'Belarus',
  },
];

// for search
export const CRITERIA_ITEMS = [
  {title: 'Choose a criterion'},
  {title: 'allergens'},
  {title: 'brands'},
  {title: 'categories'},
  {title: 'packaging'},
  {title: 'labels'},
  {title: 'origins of ingredients'},
  {title: 'manufacturing or processing places'},
  {title: 'traceability codes'},
  {title: 'purchase places'},
  {title: 'stores'},
  {title: 'countries'},
  {title: 'ingredients'},
  {title: 'additives'},
  {title: 'traces'},
  {title: 'Nutrition grades'},
  {title: 'NOVA groups'},
  {title: 'languages'},
  {title: 'contributors'},
  {title: 'editors'},
  {title: 'states'},
];
export const SORT_BY = [
  {title: 'Popularity'},
  {title: 'Product name'},
  {title: 'Add date'},
  {title: 'Edit date'},
  {title: 'Completeness'},
];
export type additiveT = {
  id: string;
  label: string;
  name: string;
};
export const ADDITIVE: Array<additiveT> = [
  {id: 'afe_1', label: `Without`, name: 'additiveRadio'},
  {id: 'afe_2', label: `With `, name: 'additiveRadio'},
  {id: 'afe_3', label: `Indifferent`, name: 'additiveRadio'},
];

export const PALM_OIL: Array<additiveT> = [
  {id: 'afe_DS', label: `Without`, name: 'oilRadio'},
  {id: 'afe_SD', label: `With `, name: 'oilRadio'},
  {id: 'afe_3E', label: `Indifferent`, name: 'oilRadio'},
];
