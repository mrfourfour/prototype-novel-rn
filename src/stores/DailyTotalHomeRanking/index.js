import { getDailyRanking } from "../../api/Ranking"
import dailyTotalHomeRankingReducer, { initialState } from "../../reducers/DailyTotalHomeRanking"

function get() {
    return {
        type: "GET_DAILY_TOTAL_HOME_RANKING"
    }
}

function success(data) {
    return {
        type: "SUCCESS_DAILY_TOTAL_HOME_RANKING",
        payload: data
    }
}

function failed(err) {
    return {
        type: "ERROR_DAILY_TOTAL_HOME_RANKING",
        payload: [],
        error: err
    }
}

function handleDailyTotalHomeRanking() {
    return async function (dispatch) {
        dispatch(get())
        try {
            const res = await getDailyRanking()
            dispatch(success(res))
        } catch (err) {
            dispatch(failed(err))
        }
    }
}

export default { dailyTotalRankingReducer: dailyTotalHomeRankingReducer, initialState, handleDailyTotalHomeRanking }