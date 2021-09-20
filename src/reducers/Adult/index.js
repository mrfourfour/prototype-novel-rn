export const initialState = { toggle: false }

const adultReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE':
            return { toggle: !state.toggle }
        default:
            return state
    }
}

export default adultReducer