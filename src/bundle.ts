import * as foobar from './generated/foobar';

/**
 * Safely converts a Uint8Array to ArrayBuffer.
 * If the Uint8Array is a view with an offset, creates a new buffer with only the view's data.
 */
const toArrayBuffer = (arr: Uint8Array): ArrayBuffer => {
  if (arr.byteOffset === 0 && arr.byteLength === arr.buffer.byteLength) {
    // No offset, can use buffer directly
    return arr.buffer as ArrayBuffer;
  }
  // Has offset or is a subarray, create a copy
  return arr.slice().buffer as ArrayBuffer;
};

export const bip39Generate = (words: 12 | 15 | 18 | 21 | 24): string => {
  return foobar.extBip39Generate(words);
};

export const bip39ToEntropy = (phrase: string): Uint8Array => {
  return new Uint8Array(foobar.extBip39ToEntropy(phrase));
};

export const bip39ToMiniSecret = (
  phrase: string,
  password: string
): Uint8Array => {
  return new Uint8Array(foobar.extBip39ToMiniSecret(phrase, password));
};

export const bip39ToSeed = (phrase: string, password: string): Uint8Array => {
  return new Uint8Array(foobar.extBip39ToSeed(phrase, password));
};

export const bip39Validate = (phrase: string): boolean => {
  return foobar.extBip39Validate(phrase);
};

export const ed25519KeypairFromSeed = (seed: Uint8Array): Uint8Array => {
  return new Uint8Array(foobar.extEdFromSeed(toArrayBuffer(seed)));
};

export const ed25519Sign = (
  pubkey: Uint8Array,
  seckey: Uint8Array,
  message: Uint8Array
): Uint8Array => {
  return new Uint8Array(
    foobar.extEdSign(
      toArrayBuffer(pubkey),
      toArrayBuffer(seckey),
      toArrayBuffer(message)
    )
  );
};

export const ed25519Verify = (
  signature: Uint8Array,
  message: Uint8Array,
  pubkey: Uint8Array
): boolean => {
  return foobar.extEdVerify(
    toArrayBuffer(signature),
    toArrayBuffer(message),
    toArrayBuffer(pubkey)
  );
};

export const secp256k1FromSeed = (seckey: Uint8Array): Uint8Array => {
  return new Uint8Array(foobar.extSecpFromSeed(toArrayBuffer(seckey)));
};

export const secp256k1Compress = (pubkey: Uint8Array): Uint8Array => {
  return new Uint8Array(foobar.extSecpPubCompress(toArrayBuffer(pubkey)));
};

export const secp256k1Expand = (pubkey: Uint8Array): Uint8Array => {
  return new Uint8Array(foobar.extSecpPubExpand(toArrayBuffer(pubkey)));
};

export const secp256k1Recover = (
  msgHash: Uint8Array,
  sig: Uint8Array,
  recovery: number
): Uint8Array => {
  return new Uint8Array(
    foobar.extSecpRecover(toArrayBuffer(msgHash), toArrayBuffer(sig), recovery)
  );
};

export const secp256k1Sign = (
  msgHash: Uint8Array,
  seckey: Uint8Array
): Uint8Array => {
  return new Uint8Array(
    foobar.extSecpSign(toArrayBuffer(msgHash), toArrayBuffer(seckey))
  );
};

export const sr25519DeriveKeypairHard = (
  pair: Uint8Array,
  cc: Uint8Array
): Uint8Array => {
  return new Uint8Array(
    foobar.extSrDeriveKeypairHard(toArrayBuffer(pair), toArrayBuffer(cc))
  );
};

export const sr25519DeriveKeypairSoft = (
  pair: Uint8Array,
  cc: Uint8Array
): Uint8Array => {
  return new Uint8Array(
    foobar.extSrDeriveKeypairSoft(toArrayBuffer(pair), toArrayBuffer(cc))
  );
};

export const sr25519DerivePublicSoft = (
  pubkey: Uint8Array,
  cc: Uint8Array
): Uint8Array => {
  return new Uint8Array(
    foobar.extSrDerivePublicSoft(toArrayBuffer(pubkey), toArrayBuffer(cc))
  );
};

export const sr25519KeypairFromSeed = (seed: Uint8Array): Uint8Array => {
  return new Uint8Array(foobar.extSrFromSeed(toArrayBuffer(seed)));
};

export const sr25519Sign = (
  pubkey: Uint8Array,
  secret: Uint8Array,
  message: Uint8Array
): Uint8Array => {
  return new Uint8Array(
    foobar.extSrSign(
      toArrayBuffer(pubkey),
      toArrayBuffer(secret),
      toArrayBuffer(message)
    )
  );
};

export const sr25519Verify = (
  signature: Uint8Array,
  message: Uint8Array,
  pubkey: Uint8Array
): boolean => {
  return foobar.extSrVerify(
    toArrayBuffer(signature),
    toArrayBuffer(message),
    toArrayBuffer(pubkey)
  );
};

export const sr25519Agree = (
  pubkey: Uint8Array,
  secret: Uint8Array
): Uint8Array => {
  return new Uint8Array(
    foobar.extSrAgree(toArrayBuffer(pubkey), toArrayBuffer(secret))
  );
};

export const vrfSign = (
  secret: Uint8Array,
  context: Uint8Array,
  message: Uint8Array,
  extra: Uint8Array
): Uint8Array => {
  return new Uint8Array(
    foobar.extVrfSign(
      toArrayBuffer(secret),
      toArrayBuffer(context),
      toArrayBuffer(message),
      toArrayBuffer(extra)
    )
  );
};

export const vrfVerify = (
  pubkey: Uint8Array,
  context: Uint8Array,
  message: Uint8Array,
  extra: Uint8Array,
  outAndProof: Uint8Array
): boolean => {
  return foobar.extVrfVerify(
    toArrayBuffer(pubkey),
    toArrayBuffer(context),
    toArrayBuffer(message),
    toArrayBuffer(extra),
    toArrayBuffer(outAndProof)
  );
};

export const blake2b = (
  data: Uint8Array,
  key: Uint8Array,
  size: number
): Uint8Array => {
  return new Uint8Array(
    foobar.extBlake2b(toArrayBuffer(data), toArrayBuffer(key), size)
  );
};

export const hmacSha256 = (key: Uint8Array, data: Uint8Array): Uint8Array => {
  return new Uint8Array(
    foobar.extHmacSha256(toArrayBuffer(key), toArrayBuffer(data))
  );
};

export const hmacSha512 = (key: Uint8Array, data: Uint8Array): Uint8Array => {
  return new Uint8Array(
    foobar.extHmacSha512(toArrayBuffer(key), toArrayBuffer(data))
  );
};

export const keccak256 = (data: Uint8Array): Uint8Array => {
  return new Uint8Array(foobar.extKeccak256(toArrayBuffer(data)));
};

export const keccak512 = (data: Uint8Array): Uint8Array => {
  return new Uint8Array(foobar.extKeccak512(toArrayBuffer(data)));
};

export const pbkdf2 = (
  data: Uint8Array,
  salt: Uint8Array,
  rounds: number
): Uint8Array => {
  return new Uint8Array(
    foobar.extPbkdf2(toArrayBuffer(data), toArrayBuffer(salt), rounds)
  );
};

export const scrypt = (
  password: Uint8Array,
  salt: Uint8Array,
  log2n: number,
  r: number,
  p: number
): Uint8Array => {
  return new Uint8Array(
    foobar.extScrypt(toArrayBuffer(password), toArrayBuffer(salt), log2n, r, p)
  );
};

export const sha256 = (data: Uint8Array): Uint8Array => {
  return new Uint8Array(foobar.extSha256(toArrayBuffer(data)));
};

export const sha512 = (data: Uint8Array): Uint8Array => {
  return new Uint8Array(foobar.extSha512(toArrayBuffer(data)));
};

export const twox = (data: Uint8Array, rounds: number): Uint8Array => {
  return new Uint8Array(foobar.extTwox(toArrayBuffer(data), rounds));
};

export function isReady(): boolean {
  return true;
}

export async function waitReady(): Promise<boolean> {
  // With uniffi bindings, initialization is synchronous
  return true;
}
