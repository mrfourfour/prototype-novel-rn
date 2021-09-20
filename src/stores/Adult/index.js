import reducer, { initialState } from '../../reducers/Adult'

function toggle() {
    return {
        type: 'TOGGLE'
    }
}

export default { reducer, initialState, toggle }