const initialState = []

export const reducerEvent = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_EVENT":
            return{
                ...state,
                state: action.payload
            }
    
        default:
            return {
                state
            };
    }
}