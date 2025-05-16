export type IsFunction<T> = T extends (...args: any[]) => any ? T : never;
export type Nulleable<T extends unknown> = T | null | undefined;
export type ArrayElement<T> = T extends (infer U)[] ? U : never;
