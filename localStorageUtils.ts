// сохранение выбраной страны
export function saveSelectedCountry(store: any) {
  localStorage.setItem(
    'selectedCountry',
    JSON.stringify({country: store.label}),
  );
}
// получение выбраной страны
export function getSelectedCountry(): string | undefined {
  let selectedCountry = localStorage.getItem('selectedCountry');

  let selected: string;
  if (selectedCountry) {
    selected = JSON.parse(selectedCountry).country;
    return selected;
  }

  return undefined;
}
