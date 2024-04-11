const container = require('./Container')
const TYPES = require('./types')

function sum (a, b) {
  const calculator = container.get(TYPES.Calculator)
  calculator.add(a)
  calculator.add(b)
  return calculator.answer()
}
module.exports = sum
