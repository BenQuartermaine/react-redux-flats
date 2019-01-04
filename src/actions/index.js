// TODO: add and export your own actions
// import flats from '../flats';

// export function setFlats() {
//   return {
//     type: 'SET_FLATS',
//     payload: flats
//   }
// }

export function selectFlat(flat) {
  return {
    type: 'SELECT_FLAT',
    payload: flat
  }
}

export function setFlats() {
const promise = fetch('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json')
    .then(response => response.json());
  
  return {
    type: 'SET_FLATS',
    payload: promise
}; }