import {getNumber} from './numbers';

const digitCache: Map<string, string[]> = new Map();

export function tumbleDigit(scannedDigit: string): string[] {
  if (digitCache.has(scannedDigit)) {
    return digitCache.get(scannedDigit);
  }

  const results: string[] = [];

  addResult(results, scannedDigit);

  for (let i: number = 0; i < scannedDigit.length; i += 1) {
    const char: string = scannedDigit[i];
    const start: string = scannedDigit.slice(0, i);
    const end: string = scannedDigit.slice(i + 1);

    if (char === ' ') {
      addResult(results, `${start}|${end}`);
      addResult(results, `${start}_${end}`);
    } else {
      addResult(results, `${start} ${end}`);
    }
  }

  digitCache.set(scannedDigit, results);

  return results;
}

function addResult(results: string[], scannedDigit: string): void {
  const num: string = getNumber(scannedDigit);
  if (num !== '?') {
    results.push(num);
  }
}