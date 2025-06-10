import { SearchSchemaI } from './pagination.shared.schema';

export const DEFAULT_SEARCH_VALUES: SearchSchemaI = {
  limit: 10,
  page: 0,
  orderBy: 'id',
  gFilter: '',
  order: 'desc' as 'desc',
  filters: [],
  filtersFn: {},
};

export const DEFAULT_REFUND_SEARCH = {
  ...DEFAULT_SEARCH_VALUES,
  orderBy: 'processFortnight',
};
