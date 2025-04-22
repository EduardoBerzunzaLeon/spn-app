import { IsFunction } from '../interfaces';

export const isFunction = <T extends any>(value?: T): value is IsFunction<T> => {
  return typeof value === 'function';
};

export const isObject = <T extends Object>(value: any): value is T => {
  return typeof value === 'object' && typeof value !== 'function' && value != undefined;
};
