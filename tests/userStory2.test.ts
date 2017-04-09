import {assert} from 'chai';
import {validate} from '../src/validate';

describe('User Story 2', () => {
  describe('validate', () => {
    it('should return true for valid account numbers', () => {
      assert.strictEqual(validate('345882865'), true);
      assert.strictEqual(validate('123456789'), true);
    });

    it('should return false for invalid account numbers', () => {
      assert.strictEqual(validate('000823123'), false);
      assert.strictEqual(validate('917381023'), false);
    });
  });
});
