/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const numberOfDays = days;
  const basePrice = 40;
  const totalAmount = numberOfDays * basePrice;

  const LONG_TERM = 7;
  const LONG_TERM_DISCOUNT = 50;
  const SHORT_TERM = 3;
  const SHORT_TERM_DISCOUNT = 20;

  if (numberOfDays >= LONG_TERM) {
    return totalAmount - LONG_TERM_DISCOUNT;
  }

  if (numberOfDays >= SHORT_TERM) {
    return totalAmount - SHORT_TERM_DISCOUNT;
  }

  return totalAmount;
}

module.exports = calculateRentalCost;
