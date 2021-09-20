import { logger } from "../stores/middlewares"
import adultReducer from "./Adult"

export const initialState = {
    adult: { toggle: false }
}

export default function rootReducer(state, action) {
    const { adult } = state

    const currentState = {
        adult: adultReducer(adult, action)
    }

    logger(action, state, currentState)
    return currentState
}