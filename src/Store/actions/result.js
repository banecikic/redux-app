import {DELETE_RESULT, STORE_RESULT} from "./actionTypes";

export const saveResult = (res) => {
  // const updateResult = res * 2;
  return {
    type: STORE_RESULT,
    result: res
  }
}

export const storeResult = (res) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      // const  oldCounter = getState().ctr.counter;
      // console.log(oldCounter);
      dispatch(saveResult(res));
    }, 2000);
  }
};

export const deleteResult = (id) => {
  return {
    type: DELETE_RESULT,
    resultElId: id
  }
};