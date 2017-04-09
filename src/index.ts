import {readFile} from 'fs-promise';
import {AccountNumber} from './accountNumber';
import {parseScan} from './parse';
import {createReport, ReportOptions} from './report';

export function getAccountNumbersFromFile(filePath: string): Promise<AccountNumber[]> {
  return readFile(filePath, 'utf8').then(parseScan);
}

export function getValidationReport(filePath: string, options?: ReportOptions): Promise<string> {
  return readFile(filePath, 'utf8')
    .then((data) => createReport(data, options));
}