const DEFAULT_PITCHERS= ['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia', 'Max Scherzer']

export function pitcherListReducer(state = DEFAULT_PITCHERS, action){
    if (action.type === 'ADD_PITCHER'){
        return [...state, action.payload];
    }

    return state;
}