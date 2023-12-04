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
