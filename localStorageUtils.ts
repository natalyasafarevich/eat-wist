//

export function saveSelectedCountry(store: any) {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(
      'selectedCountry',
      JSON.stringify({country: store.label}),
    );
  }
  // if (typeof window !== 'undefined') {
  // }
}
export function saveSearchFilter(params: any) {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('SearchFilter', JSON.stringify({params: params}));
  }
  // if (typeof window !== 'undefined') {
  // }
}
