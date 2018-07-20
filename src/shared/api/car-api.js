import axios from 'axios';
import { env } from "../utils/env"

/**
 *  get all of the cars
 * */
export const fetchAllCars = () => {
	return axios.get(
		`http://${env.host}:${env.port}/api/cars/list`
	)
}
/**
 * call save car remote api
 * @param {object} car 
 */
export const saveCar = (car) => {
	return axios({
		method: 'post',
		url: `http://${env.host}:${env.port}/api/cars`,
		data: car
	});
}

/**
 * call find cars remote api
 * @param {object} filter 
 */
export const findCars = (filter) => {
	return axios({
		method: 'get',
		url: `http://${env.host}:${env.port}/api/cars`,
		params: filter
	});
}