/**
 * checks if number is type number
 * @param {number} num
 * @returns bool
 */
export const isNumber = (num: string | number) => {
  return (
    (typeof num === 'number' ||
      (typeof num === 'string' && num.trim() !== '')) &&
    !isNaN(num as number)
  );
};
/**
 * Format number to us-dlls
 * @param {number} currency - desired amount to be converted
 * @example formatCurrency(40) => `$40.00dlls`
 * @returns string | undefined
 */
export const formatCurrency = (currency: number) => {
  if (!isNumber(currency)) return;
  return currency.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
