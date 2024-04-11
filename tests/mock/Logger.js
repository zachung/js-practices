const Logger = require('../../src/Logger')

class MockLogger extends Logger {
  handle (a, operator, b) {
  }
}
module.exports = MockLogger
