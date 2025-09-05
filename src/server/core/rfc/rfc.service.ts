import { ErrorApp } from '~/shared';

interface GroupByRFCData {
  rfc: string;
}

export const groupByRFC = (data: GroupByRFCData[]) => {
  return data.reduce((acc, item) => {
    if (!item.rfc) {
      throw ErrorApp.badRequest('Se encontro un RFC vacio');
    }

    const rfc = item.rfc.trim().toUpperCase();

    if (rfc === '' || rfc.length < 13) {
      throw ErrorApp.badRequest(`El RFC ${item.rfc} de la captura no es válido`);
    }

    if (rfc in acc) {
      return acc;
    }

    acc.push(rfc);
    return acc;
  }, [] as string[]);
};

export const groupByRFCtoSQL = (data: GroupByRFCData[]) => {
  return groupByRFC(data).map((data) => [data]);
};

// TODO: move this
type NonNullableBulk<T> = T extends null ? never : T;

interface PrepareToSQLBulkValuesI<T extends string | number | null> {
  columns: string[];
  data: Record<string, T>[];
}

export const prepareToSQLBulkValues = <
  T extends string | number | null,
  W extends boolean = false,
>({
  columns,
  data,
  withoutNull,
}: PrepareToSQLBulkValuesI<T> & { withoutNull?: W }) => {
  return data.map((item) =>
    columns.map((column) => {
      if (!(column in item)) {
        throw ErrorApp.badRequest(`La columna ${column} no existe en el registro`);
      }
      if (withoutNull && item[column] === null) {
        throw ErrorApp.badRequest(`La columna ${column} no puede ser nula`);
      }
      // Si withoutNull es true, el tipo será NonNullableBulk<T>
      return withoutNull ? (item[column] as NonNullableBulk<T>) : item[column];
    })
  );
};
