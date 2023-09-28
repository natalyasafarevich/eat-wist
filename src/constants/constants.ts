import {text} from "stream/consumers";
import LinkProps from "../moduls/types-interfaces/types";
import {type} from "os";


export const HEADER_ITEMS: Array<LinkProps> = [
  {
    url: "/categories/All Categories",
    name: "categories"
  }, {
    url: "/recipes",
    name: "recipes"
  }, {
    url: "/demo",
    name: "demo"
  },
];
type TextT = {
  p: string
};
type ERROR_SEARCH_T = {
  title: string,
  text: Array < TextT >
};
export const ERROR_SEARCH: ERROR_SEARCH_T = {

  title: `It seems your query did not yield results. Here are some suggestions
    that can help you refine your search:`,
  text: [
    {
      p: `Make sure you spell the keywords correctly.`
    }, {
      p: `Try using other synonyms or similar terms.`
    }, {
      p: `See if you got any typos.`
    }, {
      p: `Refine the query by adding additional options or filters..`
    },
  ]

}
