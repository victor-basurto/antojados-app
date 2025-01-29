/**
 * checks if number is type number
 * @param {number} num
 * @returns bool
 */
export const isNumber = (num: string | number) =>
  (typeof num === 'number' || (typeof num === 'string' && num.trim() !== '')) &&
  !isNaN(num as number);
/**
 *
 * @param {number} currency
 * @returns
 */
export const formatCurrency = (currency: number) => {
  if (!isNumber(currency)) return;
  return currency.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};
