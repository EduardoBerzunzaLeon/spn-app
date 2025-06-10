export type FiltersTypes =
  | 'between'
  | 'equals'
  | 'notEquals'
  | 'greaterThan'
  | 'greaterThanOrEqualTo'
  | 'lessThan'
  | 'lessThanOrEqualTo'
  | 'startsWith'
  | 'endsWith'
  | 'contains';

export type NumberFilterTypes = Extract<
  FiltersTypes,
  | 'between'
  | 'equals'
  | 'notEquals'
  | 'greaterThan'
  | 'greaterThanOrEqualTo'
  | 'lessThan'
  | 'lessThanOrEqualTo'
>;

export type StringFilterTypes = Extract<
  FiltersTypes,
  'startsWith' | 'endsWith' | 'contains' | 'equals' | 'notEquals'
>;

export type BooleanFilterTypes = Extract<FiltersTypes, 'equals'>;
