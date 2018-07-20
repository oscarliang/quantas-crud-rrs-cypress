export const UPDATE_ALL_CAR_LIST_STATUS = "UPDATE_ALL_CAR_LIST_STATUS";

/**
 * 
 * @param {boolean} dirty - Check exsting car state is full car list or not
 */
export function updateAllCarListStatus(dirty) {
  return {
    type: UPDATE_ALL_CAR_LIST_STATUS,
    payload: {
      state: {
        all_car_list_loaded: dirty
      }
    }
  }
}

// Reducer
export const initialState = {};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ALL_CAR_LIST_STATUS:
      return action.payload.state.all_car_list_loaded;
    default:
      return state;
  }
}
