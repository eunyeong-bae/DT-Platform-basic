let initialState = {
    currentPage: 'home',
}

function reducer(state = initialState, action) {
    switch(action.type){
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.payload.currentPage
            }
            default:
                return {...state};
    }
}

export default reducer;