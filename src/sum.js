const Calculator = require('./Calculator')
const Logger = require('./Logger')

function sum (a, b) {
  const calculator = new Calculator(new Logger())
  calculator.add(a)
  calculator.add(b)
  return calculator.answer()
}
module.exports = sum
