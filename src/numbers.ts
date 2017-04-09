export const numbers: string[] = [
  ' _ | ||_|',
  '     |  |',
  ' _  _||_ ',
  ' _  _| _|',
  '   |_|  |',
  ' _ |_  _|',
  ' _ |_ |_|',
  ' _   |  |',
  ' _ |_||_|',
  ' _ |_| _|',
];

export function getNumber(data: string): string {
  const num: number = numbers.indexOf(data);
  return num !== -1 ? num.toString() : '?';
}
