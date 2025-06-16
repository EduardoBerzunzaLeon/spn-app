import { ErrorApp } from '~/server/core';
import { repository } from '~/server/repositories';

export const getLastConsecutive = async () => {
  const [[siconFortnight], [spnFortnight]] = await Promise.all([
    repository.sicon.refunds.getLastConsecutive(),
    repository.spn.refunds.getLastConsecutive(),
  ]);

  if (!siconFortnight) {
    throw ErrorApp.internal('No se encontraron consecutivos de SICON');
  }

  if (!spnFortnight) {
    return {
      siconFortnight,
      spnFortnight,
      warning: 'No se encontro consecutivo en SPN',
    };
  }

  const areEqualFortnights = siconFortnight.fortnight === spnFortnight.fortnight;
  const differencesConsecutive = Number(siconFortnight.consecutive) - spnFortnight.consecutive;
  const fortnights = {
    siconFortnight,
    spnFortnight,
    warning: '',
  };

  let isImportant = false;

  if ((areEqualFortnights && differencesConsecutive > 1) || differencesConsecutive < 0) {
    isImportant = true;
  }

  if (!areEqualFortnights && siconFortnight.consecutive !== 1) {
    isImportant = true;
  }

  if (!areEqualFortnights || differencesConsecutive !== 0) {
    const extraText = isImportant && 'La diferencia es mayor a un consecutivo, ¡VERIFICALO!';

    fortnights.warning = `Existe un desfase entre quincenas y consecutivos del SICON (quincena: ${siconFortnight.fortnight}, consecutivo: ${siconFortnight.consecutive})  y SPN (quincena: ${spnFortnight.fortnight}, consecutivo: ${spnFortnight.consecutive}). ${extraText}`;
    return fortnights;
  }

  return fortnights;
};
