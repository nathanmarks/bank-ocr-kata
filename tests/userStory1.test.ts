import {assert} from 'chai';
import * as path from 'path';
import {getAccountNumbersFromFile} from '../src';

describe('User Story 1', () => {
  describe('getAccountNumbersFromFile', () => {
    it('should parse an account number from a file', () =>
      getAccountNumbersFromFile(path.resolve(__dirname, 'fixtures/simple.txt'))
        .then((accountNumbers) => {
          assert.strictEqual(accountNumbers[0].toString(), '123456789');
        }),
    );

    it('should parse multiple account numbers from a file', () =>
      getAccountNumbersFromFile(path.resolve(__dirname, 'fixtures/multiple.txt'))
        .then((accountNumbers) => {
          for (let i: number = 0; i < 10; i += 1) {
            assert.strictEqual(accountNumbers[i].toString(), Array(9).fill(i.toString()).join(''));
            assert.strictEqual(accountNumbers[10].toString(), '123456789');
          }
        }),
    );
  });
});
