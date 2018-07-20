import reducer, {
  initialState,
  updateAllOfCars
} from "../cars";
import allCarsMock from "./fixtures/cars";

describe("cars action", () => {
  it("should handle updateAllOfCars", () => {
    const state = {
      ...allCarsMock
    };
    expect(updateAllOfCars(state)).toEqual({
      payload: {
        state: {
          "0": 100,
          cars: {
            "100": {
              id: 100,
              brand: "porsche",
              drive: "awd",
              name: "911 Carrera",
              price: 280000,
              imageUrl:
                "http://files1.porsche.com/filestore/image/multimedia/none/991-2nd-c4s-modelimage-sideshot/model/15bd09cf-553b-11e5-8c32-0019999cd470;s25/porsche-model.png"
            }
          }
        }
      },
      type: "UPDATE_ALL_CARS"
    });
  });
});

describe("cars reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle UPDATE_ALL_CARS", () => {
    expect(
      reducer(initialState, {
        payload: {
          state: {
            "0": 100,
            "cars": {
              100: {
                id: 100,
                makeId: 10,
                name: "911 Carrera",
                price: 280000,
                imageUrl:
                  "http://files1.porsche.com/filestore/image/multimedia/none/991-2nd-c4s-modelimage-sideshot/model/15bd09cf-553b-11e5-8c32-0019999cd470;s25/porsche-model.png"
              }
            }
          }
        },
        type: "UPDATE_ALL_CARS"
      })
      ).toEqual({
        "100": {
          "id": 100,
          "imageUrl": "http://files1.porsche.com/filestore/image/multimedia/none/991-2nd-c4s-modelimage-sideshot/model/15bd09cf-553b-11e5-8c32-0019999cd470;s25/porsche-model.png",
          "makeId": 10,
          "name": "911 Carrera",
          "price": 280000
        }
      })
  });
});
