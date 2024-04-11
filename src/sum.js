import container from './Container';
import TYPES from './types';

function sum(a, b) {
  const calculator = container.get(TYPES.Calculator);
  calculator.add(a);
  calculator.add(b);
  return calculator.answer();
}

export default sum;
