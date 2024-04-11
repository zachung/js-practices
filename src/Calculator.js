class Calculator {
  constructor(logger) {
    this.logger = logger;
    this.current = 0;
  }

  add(n) {
    this.logger.handle(this.current, '+', n);
    this.current += n;
  }

  answer() {
    return this.current;
  }
}

export default Calculator;
