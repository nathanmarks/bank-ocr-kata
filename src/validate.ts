
export function validate(accountNumber: string): boolean {
  let total: number = 0;

  for (let i: number = 0; i < 9; i += 1) {
    total += (i + 1) * parseInt(accountNumber[8 - i], 10);
  }

  return total % 11 === 0;
}