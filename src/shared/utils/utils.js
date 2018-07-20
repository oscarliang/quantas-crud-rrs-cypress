import Cookies from 'universal-cookie';
import { env } from './env'
import _ from "lodash";

export const changeObjectKey = (obj, prevKey, currKey) => {
  const clone_object = Object.assign({}, obj);
  clone_object[currKey] = clone_object[prevKey];
  delete clone_object[prevKey];
  return clone_object;
}

// remove all the cookies which belong to this apps
export const removeAllCookies = () => {
  const cookies = new Cookies();
  let allCookies = cookies.getAll();
  _.forEach(allCookies, (cookie, key) => {
    if (key.startsWith(env.cookiePrefix))
      cookies.remove(key);
  })
}