export const UPDATE_ALL_CARS = "UPDATE_ALL_CARS";

// update all of the cars
export function updateAllOfCars(normalizedCars) {
  return {
    type: UPDATE_ALL_CARS,
    payload: {
      state: {
        ...normalizedCars.result,
        ...normalizedCars.entities
      }
    }
  };
}

// Reducer
export const initialState = {};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ALL_CARS:
      const { cars } = action.payload.state
      return {
        ...cars
      };
    default:
      return state;
  }
}
