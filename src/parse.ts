import {AccountNumber} from './accountNumber';

export function parseScan(data: string): AccountNumber[] {
  return data
    .split('\n\n')
    .map((numbers) => new AccountNumber(parseScannedAccountNumber(numbers)));
}

export function parseScannedAccountNumber(scannedAccountNumber: string): string[] {
  const lines: string[] = scannedAccountNumber.split('\n');
  const numbers: string[] = Array(9).fill('');

  for (let i: number = 0; i < 3; i += 1) {
    for (let j: number = 0; j < 27; j += 1) {
      numbers[Math.floor(j / 3)] += lines[i][j] || ' ';
    }
  }

  return numbers;
}
