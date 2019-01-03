// Receives an action that that changes the current state by performing an action
// Reducers goal is to compute and return the new state

export default function(state, action) {
  // Incase there is no flats in the array (prevents throwing an error)
  if (state === undefined) {
    return [];
  }

  // TODO Handle actions
  switch(action.type) {
    case 'SET_FLATS': 
      return action.payload;
    case 'SELECTED_FLAT':
      return action.payload;
    default:
      return state;
  }
}


