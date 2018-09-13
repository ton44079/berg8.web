import * as actType from '../constants/new-item-types';

const defaultState = {
    current: 0
};

const requestPageReducer = (state = defaultState, action) => {
    switch (action.type) {
        case actType.CHANGE_STEP:
            return { ...state, current: action.payload.step };

        default:
            return state

    }
}

export default requestPageReducer;