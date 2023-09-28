export const combineWords = (text : string ) => {
  return text.replace(/,/g, '').toLocaleLowerCase().split(' ').join('-')
}
