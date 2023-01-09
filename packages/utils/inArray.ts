import { indexOf } from "lodash"

const inArray = <T>(needle: T, haystack: T[]): boolean => {
  return indexOf(haystack, needle) >= 0
}

export default inArray
