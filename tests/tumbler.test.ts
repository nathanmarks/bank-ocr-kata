import {assert} from 'chai';
import {numbers} from '../src/numbers';
import {tumbleDigit} from '../src/tumbler';

describe('tumbler', () => {
  describe('tumbleDigit', () => {
    describe('finding possible numbers for valid digits', () => {
      it('for 0', () => {
        assert.deepEqual(tumbleDigit(numbers[0]), ['0', '8']);
      });

      it('for 1', () => {
        assert.deepEqual(tumbleDigit(numbers[1]), ['1', '7']);
      });

      it('for 2', () => {
        assert.deepEqual(tumbleDigit(numbers[2]), ['2']);
      });

      it('for 3', () => {
        assert.deepEqual(tumbleDigit(numbers[3]), ['3', '9']);
      });

      it('for 5', () => {
        assert.deepEqual(tumbleDigit(numbers[5]), ['5', '9', '6']);
      });

      it('for 6', () => {
        assert.deepEqual(tumbleDigit(numbers[6]), ['6', '8', '5']);
      });

      it('for 7', () => {
        assert.deepEqual(tumbleDigit(numbers[7]), ['7', '1']);
      });

      it('for 8', () => {
        assert.deepEqual(tumbleDigit(numbers[8]), ['8', '0', '6', '9']);
      });

      it('for 9', () => {
        assert.deepEqual(tumbleDigit(numbers[9]), ['9', '3', '5', '8']);
      });
    });

    describe('finding possible numbers for invalid digits', () => {
      it('should return 0', () => {
        const singlePipe: string = ' _ | || |';
        assert.deepEqual(tumbleDigit(singlePipe), ['0']);
      });

      it('should return 1', () => {
        const singlePipe: string = '        |';
        assert.deepEqual(tumbleDigit(singlePipe), ['1']);
      });

      it('should return 1', () => {
        const singlePipe: string = '   _ |  |';
        assert.deepEqual(tumbleDigit(singlePipe), ['1']);
      });

      it('should return 5', () => {
        const singlePipe: string = ' _ |   _|';
        assert.deepEqual(tumbleDigit(singlePipe), ['5']);
      });
    });
  });
});
