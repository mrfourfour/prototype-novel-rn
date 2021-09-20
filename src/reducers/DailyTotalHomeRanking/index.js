export const initialState = {
    isLoading: false,
    isLoaded: false,
    error: null,
    data: []
}

export default function dailyTotalHomeRankingReducer(state = initialState, action) {
    switch(action.type) {
        case "GET_DAILY_TOTAL_HOME_RANKING":
            return {
                ...state,
                error: null,
                isLoading: true,
                isLoaded: false
            }
        case "SUCCESS_DAILY_TOTAL_HOME_RANKING":
            return {
                ...state,
                data: action.payload,
                error: null,
                isLoading: false,
                isLoaded: true
            }
        case "FAILED_DAILY_TOTAL_HOME_RANKING":
            return {
                ...state,
                error: action.error,
                isLoading: false,
                isLoaded: true,
                data: []
            }
    }
}