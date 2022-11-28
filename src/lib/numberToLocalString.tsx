import { BigNumber } from 'ethers';

export function NumberToLocalString(value: number, precision: number) {
  return value.toLocaleString('en-US', { maximumFractionDigits: precision });
}

export function BigNumberToLocalString(value: BigNumber, precision: number) {
  return (Number(value) / 1e18).toLocaleString('en-US', {
    maximumFractionDigits: precision,
  });
}
