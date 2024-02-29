const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('floating point wholw numbers', () => {
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
  });
});
