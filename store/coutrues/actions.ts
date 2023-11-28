export const COUNTRY = 'countries/COUNTRIES';

export type CountryType = {
  type?: typeof COUNTRY;
  label: string;
  isOpen: boolean;
};
export type ActionsType = CountryType;

export function currentCountry(label: string, isOpen: boolean) {
  return {type: COUNTRY, label, isOpen};
}
