/**
 * Service to init or load all the cars from remote db and update the state
 */

import {
  fetchAllCars
} from "../api/car-api";
import Cookies from 'universal-cookie';
import { env } from "../utils/env"
import { updateAllOfCars } from "../ducks/cars";
import { updateAllCarListStatus } from "../ducks/fullOfCarList"
import { normalize } from "normalizr";
import { carListSchema } from "../schema";

export const preload = () => {
  return dispatch => {
    return getAllCars().then((obj) => {
      let normalizedCars = obj.cars;
      dispatch(updateAllOfCars(normalizedCars));
      dispatch(updateAllCarListStatus(true));
    })
  }
};

/**
 * get all the cars from the remote db
 */
const getAllCars = () => {
  let obj = {}
  const cookies = new Cookies();
  const allCarsCookieKey = env.cookiePrefix + ":all";
  let allCarsCookies = cookies.get(allCarsCookieKey);
  // if find the cookies, will not call remote api
  if (allCarsCookies){
    return new Promise((resolve, reject) => {
      resolve(allCarsCookies);
    })
  } else {
    return fetchAllCars().then(resp => {
      let cars = resp.data;
      const normalizedCars = normalize(cars, carListSchema);
      obj['cars'] = normalizedCars;
      //set cookies
      cookies.set(allCarsCookieKey, JSON.stringify(obj), { path: '/' });
      return obj;
    });
  }
};