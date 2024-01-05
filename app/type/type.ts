export type paramsValuesT = {
  id: number;
  criteria: string;
  isValue: boolean;
};

export type CriteriaT = {
  items: Array<{title: string}>;
  onChangeTitle: (e: string) => void;
};
export type SideBarT = {
  params: {
    value: string;
  };
};
