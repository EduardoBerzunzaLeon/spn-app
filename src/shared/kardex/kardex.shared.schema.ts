import * as v from 'valibot';

export const KardexSearchByRFC = v.object({
    rfc: v.pipe(v.string(), v.trim()),
});

export type KardexSearchByRFCI = v.InferOutput<typeof KardexSearchByRFC>;
