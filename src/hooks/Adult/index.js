import { useGlobalStore } from "../../stores";
import bindActions from "../../stores/bindActions";
import adultReducer from "../../stores/Adult"

const { toggle } = adultReducer

export default function useAdult() {
    const { state, dispatch } = useGlobalStore()
    const adult = state.adult
    const adultActions = bindActions({ toggle }, dispatch)
    return { adult, ...adultActions }
}