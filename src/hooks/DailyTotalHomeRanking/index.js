import { useGlobalStore } from '../../stores'
import bindActions from '../../stores/bindActions';
import DailyTotalHomeRanking from '../../stores/DailyTotalHomeRanking'

const useDailyTotalHomeRanking = () => {
    const { state, dispatch } = useGlobalStore();
    const { dailyTotalHomeRanking } = state;

    const call = DailyTotalHomeRanking.handleDailyTotalHomeRanking

    const actions = bindActions({
        call
    }, dispatch)

    return { ...dailyTotalHomeRanking, ...actions }
}

export default useDailyTotalHomeRanking