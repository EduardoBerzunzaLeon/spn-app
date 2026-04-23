import type { IsFunction } from './core.interface';

export const isFunction = <T>(value?: T): value is IsFunction<T> => typeof value === 'function';

export const isObject = <T extends object>(value: any): value is T =>
  typeof value === 'object' && typeof value !== 'function' && value !== undefined;

export const isEmpty = <T extends object>(obj?: T) =>
  obj && Object.keys(obj).length === 0 && obj.constructor === Object;
