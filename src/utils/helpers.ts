/**
 *
 * @param {number} currency
 * @returns
 */
export const formatCurrency = (currency: number) => currency.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
