const imagesReducer = (state = { data: null }, action) => {
    switch (action.type) {
        case 'FETCH_ALL_IMAGES':
            return { ...state, data: action.payload }
        default:
            return state;
    }
}

export default imagesReducer