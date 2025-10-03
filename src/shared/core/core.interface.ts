export type IsFunction<T> = T extends (...args: any[]) => any ? T : never;
export type Nulleable<T extends unknown> = T | null | undefined;
export type ArrayElement<T> = T extends (infer U)[] ? U : never;
export type ReturnPaginateData<T extends (...args: any[]) => Promise<{ data: unknown[] }>> =
  ArrayElement<Awaited<ReturnType<T>>['data']>;
export type ReturnArrayElement<T extends (...args: any[]) => Promise<unknown[]>> = ArrayElement<
  Awaited<ReturnType<T>>
>;
