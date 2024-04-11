class Calculator {
  logger
  constructor (logger) {
    this.logger = logger
    this.current = 0
  }

  add (n) {
    this.logger.handle(this.current, '+', n)
    this.current += n
  }

  answer () {
    return this.current
  }
}
module.exports = Calculator
