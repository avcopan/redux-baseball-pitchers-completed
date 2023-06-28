const DEFAULT_CATCHERS = ['Roy Campanella', 'Elston Howard', 'Kenji Jojima'];

export function catcherListReducer(state = DEFAULT_CATCHERS, action) {
  if (action.type === 'ADD_CATCHER') {
    return [...state, action.payload];
  }

  return state;
}