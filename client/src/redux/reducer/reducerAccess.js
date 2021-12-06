const initialState = {}

export const reducerLogin = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                state: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export const reducerRegister = (state = initialState, action) => {
    switch (action.type) {
        case "REGISTER":
            return {
                ...state,
                state: action.payload
            }
        default:
            return {
                ...state
            }
    }
}