import carsJson from "../fixtures/cars.json";
import _ from "lodash";
import { arrayContainsArray } from "./util";

global.cars = [];
global.uuid = 600;

/**
 * Get all the cars from db
 */
export const getAllCars = () => {
  if (_.isEmpty(global.cars)) {
    cars = carsJson;
  }
  return cars;
}

/**
 * Find the cars by key which contains the value
 * 
 * @param {feature name} key 
 * @param {feature value} value 
 */
export const findAllCars = (key, value) => {
  let carsItems = [];
  if (key === "name" || key === "brand") {
    _.forEach(global.cars, (car) => {
      if (car[key].toLowerCase().indexOf(value.toLowerCase()) !== -1)
        carsItems.push(car)
    })
  }

  if (key === "drive") {
    let sourceArray = value.toLowerCase().split('|').filter(element => element !== "");
    let targetArray = [];
    _.forEach(global.cars, (car) => {
      targetArray = car[key].toLowerCase().split('|').filter(element => element !== "");
      if (arrayContainsArray(targetArray, sourceArray)) {
        carsItems.push(car)
      }
    })
  }
  return carsItems;
}

/**
 * 
 * @param { pass a car object } car 
 */
export const save = (car) => {
  uuid++;
  car["id"] = uuid;
  cars.push(car);
  return cars;
}