import { logger } from "../stores/middlewares"
import adultReducer from "./Adult"
import dailyTotalHomeRankingReducer, { initialState as dailyRankingHomeInitialState } from "./DailyTotalHomeRanking"

export const initialState = {
    adult: { toggle: false },
    dailyRankingReducer: dailyRankingHomeInitialState
}

export default function rootReducer(state, action) {
    const { adult, dailyRanking } = state

    const currentState = {
        adult: adultReducer(adult, action),
        dailyTotalHomeRanking: dailyTotalHomeRankingReducer(dailyRanking, action)
    }

    logger(action, state, currentState)
    return currentState
}