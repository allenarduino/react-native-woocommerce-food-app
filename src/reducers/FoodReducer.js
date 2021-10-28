export const foodReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_FOODS":
            return {
                ...state,
                foods: action.payload
            };


        default:
            return state;
    }
};