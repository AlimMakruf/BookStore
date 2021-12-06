const initialState = []

export const reducerDate = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_DATE":
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