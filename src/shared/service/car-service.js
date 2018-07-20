import {
  saveCar, findCars
} from "../api/car-api";
import { updateAllOfCars } from "../ducks/cars";
import { updateAllCarListStatus } from "../ducks/fullOfCarList"
import { normalize } from "normalizr";
import { carListSchema } from "../schema";
import Cookies from 'universal-cookie';
import { env } from "../utils/env"
import { removeAllCookies } from "../utils/utils"

/**
 * save the new car into the db
 * @param {object} car
 */
export const saveCarService = (car) => {
  return dispatch => {
    return _saveCarService(car).then((obj) => {
      let normalizedCars = obj.cars;
      dispatch(updateAllOfCars(normalizedCars));
    })
  }
};

const _saveCarService= (car) => {
  let obj = {}
  return saveCar(car).then(resp => {
    let cars = resp.data;
    const normalizedCars = normalize(cars, carListSchema);
    obj['cars'] = normalizedCars;
    // Due to the car has been added to db, we need to remove all existing cookies
    removeAllCookies();
    return obj;
  });
};

/**
 * Find car by passing filter object
 * @param {object} filter. e.g { "name" : "bmw s2" }
 */
export const findCarService = (filter) => {
  return dispatch => {
    return _findCarService(filter).then((obj) => {
      let normalizedCars = obj.cars;
      dispatch(updateAllOfCars(normalizedCars));
      dispatch(updateAllCarListStatus(false));
    })
  }
};

const _findCarService= (filter) => {
  let obj = {};
  const cookies = new Cookies();
  const findCarCookieKey = env.cookiePrefix + ":" + filter["key"] + ":" + filter["value"];
  let findCarCookies = cookies.get(findCarCookieKey);
  // if find the cookies, will not call remote api
  if (findCarCookies){
    return new Promise((resolve, reject) => {
      resolve(findCarCookies);
    })
  } else {
    return findCars(filter).then(resp => {
      let cars = resp.data;
      const normalizedCars = normalize(cars, carListSchema);
      obj['cars'] = normalizedCars;
      //set cookies
      cookies.set(findCarCookieKey, JSON.stringify(obj), { path: '/' });
      return obj;
    });
  }
};