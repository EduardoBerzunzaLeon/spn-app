export const getFortnight = (fortnight: number) => {
  return fortnight.toString().slice(-2);
};

export const getYear = (fortnight: number) => {
  return fortnight.toString().slice(0, -2);
};

export const addFortnight = (fortnight: number, quantity: number) => {
  const specificFortnight = getFortnight(fortnight);

  if (specificFortnight === '24' && quantity > 0) {
    return fortnight + 76 + quantity;
  }

  return fortnight + quantity;
};

export const subtractFortnight = (fortnight: number, quantity: number) => {
  const specificFortnight = getFortnight(fortnight);

  if (specificFortnight === '01' && quantity > 0) {
    return fortnight - 76 - quantity;
  }

  return fortnight - quantity;
};
