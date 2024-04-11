import inversify from 'inversify';
import 'reflect-metadata';
import TYPES from './types';
import Calculator from './Calculator';
import Logger from './Logger';

// Declare as injectable and its dependencies
inversify.decorate(inversify.injectable(), Calculator);
inversify.decorate(inversify.injectable(), Logger);
inversify.decorate(inversify.inject(TYPES.Logger), Calculator, 0);

// Declare bindings
const container = new inversify.Container();
container.bind(TYPES.Calculator).to(Calculator);
container.bind(TYPES.Logger).to(Logger);

export default container;
