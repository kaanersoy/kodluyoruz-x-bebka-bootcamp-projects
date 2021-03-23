const initialState = {
    data: {},
    isLoading: false,
    newPhoto: "",
};

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PHOTO":
            return {
                ...state,
                newPhoto: action.payload,
                isLoading: false
            };
            
        case "ADD_NEW_COMMENT":
            return {
                ...state,
                date: [...state.date, action.payload].reverse()
            };

        case "GET_COMMENTS_REQUEST":
            return {
                ...state,
                isLoading: true
            };

        case "GET_COMMENTS_SUCCESS":
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };

        case "GET_COMMENTS_ERROR":
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };

        default:
            return state;
    }
}