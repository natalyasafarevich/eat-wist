export const combineWords = (text : string ) => {
  return text.toLocaleLowerCase().split(' ').join('-')
}
