import indexOf from 'lodash.indexof'

const inArray = <T>(needle: T, haystack: T[]): boolean => {
  return indexOf(haystack, needle) >= 0
}

export default inArray
