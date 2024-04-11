const inversify = require('inversify')
require('reflect-metadata')
const TYPES = require('./types')
const Calculator = require('./Calculator')
const Logger = require('./Logger')

// Declare as injectable and its dependencies
inversify.decorate(inversify.injectable(), Calculator)
inversify.decorate(inversify.injectable(), Logger)
inversify.decorate(inversify.inject(TYPES.Logger), Calculator, 0)

// Declare bindings
const container = new inversify.Container()
container.bind(TYPES.Calculator).to(Calculator)
container.bind(TYPES.Logger).to(Logger)

module.exports = container
