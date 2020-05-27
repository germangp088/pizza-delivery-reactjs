// eslint-disable-next-line
const exchange = (price, symbol) => symbol === "$" ? parseFloat(eval(price) + (eval(price) * .1)).toFixed(2) :parseFloat(price).toFixed(2);

export default exchange;