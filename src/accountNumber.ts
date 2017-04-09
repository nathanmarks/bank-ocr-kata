import {getNumber} from './numbers';

export class AccountNumber {
  private accountNumber: string;
  private scannedNumbers: string[];

  constructor(scannedNumbers: string[]) {
    this.scannedNumbers = scannedNumbers;
    this.accountNumber = scannedNumbers.map(getNumber).join('');
  }

  public toString(): string {
    return this.accountNumber;
  }
}
