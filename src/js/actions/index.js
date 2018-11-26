import { FETCH_DATA } from '../constants/action-types'
import getPeople from '../apis/api'

export function fetchData() {
  return {
    type: FETCH_DATA,
    payload: getPeople()
  }
}
