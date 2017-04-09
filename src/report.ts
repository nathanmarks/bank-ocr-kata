import {AccountNumber} from './accountNumber';
import {parseScan} from './parse';
import {validate} from './validate';

export interface ReportOptions {
  autocorrect?: boolean;
}

export function createReport(data: string, options: ReportOptions = {}): string {
  const {autocorrect} = options;
  if (autocorrect) {
    console.log('autocorrect');
  }
  const accountNumbers: AccountNumber[] = parseScan(data);
  let report: string = '';

  accountNumbers.forEach((accountNumber) => {
    const accountNumberString: string = accountNumber.toString();

    if (accountNumberString.indexOf('?') !== -1) {
      report += `${accountNumberString} ILL\n`;
    } else if (validate(accountNumberString)) {
      report += `${accountNumberString}\n`;
    } else {
      report += `${accountNumberString} ERR\n`;
    }
  });

  return report;
}

