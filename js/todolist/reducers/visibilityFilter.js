import appConstants from '../AppConstants';
const visibilityFilter = (state = appConstants.SHOW_ALL, action) => {
    switch (action.type) {
        case appConstants.SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter