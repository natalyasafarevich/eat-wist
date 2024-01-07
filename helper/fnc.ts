export function strForSearch(str: string) {
  return str.replace(/ /gi, '_').toLocaleLowerCase();
}
