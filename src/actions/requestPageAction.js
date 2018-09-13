import * as action from '../constants/new-item-types';

export const changeStepRequestPage = (step) =>({
  type : action.CHANGE_STEP,
  payload : {
      step : step
  }
})