// TODO: add and export your own actions
import flats from '../flats';

export function setFlats() {
  return {
    type: 'SET_FLATS',
    payload: flats
  }
}

export function selectFlat(flat) {
  return {
    type: 'SELECT_FLAT',
    payload: flat
  }
}