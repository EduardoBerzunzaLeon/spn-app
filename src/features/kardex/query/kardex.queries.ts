import { queryOptions } from '@tanstack/react-query';
import { serverFn } from '~/server/functions';
import { KardexSearchByRFCI } from "~/shared";

export const kardexKey = {
    all: ['kardex'] as const,
    lists: () => [...kardexKey.all, 'list'] as const,
    list: (props: KardexSearchByRFCI) => [...kardexKey.lists(), { ...props }] as const
}

export const kardexQueries = {
    rfcSearch: (props: KardexSearchByRFCI) => 
        queryOptions({
            queryKey: kardexKey.list(props),
            queryFn: ({ signal }) => serverFn.kardex.getPaymentCodeByRFC({
                data: { ...props },
                signal
            }),
        })
}
