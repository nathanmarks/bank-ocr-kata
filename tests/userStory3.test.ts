import {assert} from 'chai';
import * as path from 'path';
import {getValidationReport} from '../src';

describe('User Story 3', () => {
  describe('getValidationReport', () => {
    it('should parse, validate and create a report', () =>
      getValidationReport(path.resolve(__dirname, 'fixtures/validation.txt'))
        .then((report) => {
          const lines: string[] = report.split('\n');
          assert.strictEqual(lines[0], '000000051');
          assert.strictEqual(lines[1], '49006771? ILL');
          assert.strictEqual(lines[2], '1234?678? ILL');
        }),
    );
  });
});
