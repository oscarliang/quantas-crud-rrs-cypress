import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {};
import carsMock from "../../ducks/test/fixtures/cars";
import { preload } from "../preload"
import { UPDATE_ALL_CARS } from "../../ducks/cars"
import { UPDATE_ALL_CAR_LIST_STATUS } from "../../ducks/fullOfCarList"

jest.setTimeout(10000);

describe('preload actions', () => {
  beforeEach(() => {
    moxios.install();
  })

  afterEach(() => {
    moxios.uninstall();
  })

  it('should create 2 actions to preload the state', () => {
    moxios.wait(() => {
      const carRequest = moxios.requests.at(0);
      carRequest.respondWith({
        status: 200,
        response: carsMock
      });
    });

    const store = mockStore({
      ...initialState,
    })

    return store.dispatch(preload()).then(() => {
      expect(store.getActions()[0].type).toEqual(UPDATE_ALL_CARS);
      expect(store.getActions()[1].type).toEqual(UPDATE_ALL_CAR_LIST_STATUS);
    });
  })
})