const inArray = <T>(needle: T, haystack: T[]): boolean => {
  return haystack.indexOf(needle) >= 0
}

export default inArray
