import WasmCryptoTest from './NativeWasmCryptoTest';

export function multiply(a: number, b: number): number {
  return WasmCryptoTest.multiply(a, b);
}
