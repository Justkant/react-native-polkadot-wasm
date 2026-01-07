import * as foobar from './generated/foobar';

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
  return new Uint8Array(foobar.extEdFromSeed(seed.buffer as ArrayBuffer));
};

export const ed25519Sign = (
  pubkey: Uint8Array,
  seckey: Uint8Array,
  message: Uint8Array
): Uint8Array => {
  return new Uint8Array(
    foobar.extEdSign(
      pubkey.buffer as ArrayBuffer,
      seckey.buffer as ArrayBuffer,
      message.buffer as ArrayBuffer
    )
  );
};

export const ed25519Verify = (
  signature: Uint8Array,
  message: Uint8Array,
  pubkey: Uint8Array
): boolean => {
  return foobar.extEdVerify(
    signature.buffer as ArrayBuffer,
    message.buffer as ArrayBuffer,
    pubkey.buffer as ArrayBuffer
  );
};

// export const secp256k1FromSeed = /*#__PURE__*/ withWasm(
//   (wasm, seckey: Uint8Array): Uint8Array => {
//     wasm.ext_secp_from_seed(8, ...bridge.allocU8a(seckey));

//     return bridge.resultU8a();
//   }
// );

// export const secp256k1Compress = /*#__PURE__*/ withWasm(
//   (wasm, pubkey: Uint8Array): Uint8Array => {
//     wasm.ext_secp_pub_compress(8, ...bridge.allocU8a(pubkey));

//     return bridge.resultU8a();
//   }
// );

// export const secp256k1Expand = /*#__PURE__*/ withWasm(
//   (wasm, pubkey: Uint8Array): Uint8Array => {
//     wasm.ext_secp_pub_expand(8, ...bridge.allocU8a(pubkey));

//     return bridge.resultU8a();
//   }
// );

// export const secp256k1Recover = /*#__PURE__*/ withWasm(
//   (
//     wasm,
//     msgHash: Uint8Array,
//     sig: Uint8Array,
//     recovery: number
//   ): Uint8Array => {
//     wasm.ext_secp_recover(
//       8,
//       ...bridge.allocU8a(msgHash),
//       ...bridge.allocU8a(sig),
//       recovery
//     );

//     return bridge.resultU8a();
//   }
// );

// export const secp256k1Sign = /*#__PURE__*/ withWasm(
//   (wasm, msgHash: Uint8Array, seckey: Uint8Array): Uint8Array => {
//     wasm.ext_secp_sign(
//       8,
//       ...bridge.allocU8a(msgHash),
//       ...bridge.allocU8a(seckey)
//     );

//     return bridge.resultU8a();
//   }
// );

export const sr25519DeriveKeypairHard = (
  pair: Uint8Array,
  cc: Uint8Array
): Uint8Array => {
  return new Uint8Array(
    foobar.extSrDeriveKeypairHard(
      pair.buffer as ArrayBuffer,
      cc.buffer as ArrayBuffer
    )
  );
};

export const sr25519DeriveKeypairSoft = (
  pair: Uint8Array,
  cc: Uint8Array
): Uint8Array => {
  return new Uint8Array(
    foobar.extSrDeriveKeypairSoft(
      pair.buffer as ArrayBuffer,
      cc.buffer as ArrayBuffer
    )
  );
};

export const sr25519DerivePublicSoft = (
  pubkey: Uint8Array,
  cc: Uint8Array
): Uint8Array => {
  return new Uint8Array(
    foobar.extSrDerivePublicSoft(
      pubkey.buffer as ArrayBuffer,
      cc.buffer as ArrayBuffer
    )
  );
};

export const sr25519KeypairFromSeed = (seed: Uint8Array): Uint8Array => {
  return new Uint8Array(foobar.extSrFromSeed(seed.buffer as ArrayBuffer));
};

export const sr25519Sign = (
  pubkey: Uint8Array,
  secret: Uint8Array,
  message: Uint8Array
): Uint8Array => {
  return new Uint8Array(
    foobar.extSrSign(
      pubkey.buffer as ArrayBuffer,
      secret.buffer as ArrayBuffer,
      message.buffer as ArrayBuffer
    )
  );
};

export const sr25519Verify = (
  signature: Uint8Array,
  message: Uint8Array,
  pubkey: Uint8Array
): boolean => {
  return foobar.extSrVerify(
    signature.buffer as ArrayBuffer,
    message.buffer as ArrayBuffer,
    pubkey.buffer as ArrayBuffer
  );
};

export const sr25519Agree = (
  pubkey: Uint8Array,
  secret: Uint8Array
): Uint8Array => {
  return new Uint8Array(
    foobar.extSrAgree(
      pubkey.buffer as ArrayBuffer,
      secret.buffer as ArrayBuffer
    )
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
      secret.buffer as ArrayBuffer,
      context.buffer as ArrayBuffer,
      message.buffer as ArrayBuffer,
      extra.buffer as ArrayBuffer
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
    pubkey.buffer as ArrayBuffer,
    context.buffer as ArrayBuffer,
    message.buffer as ArrayBuffer,
    extra.buffer as ArrayBuffer,
    outAndProof.buffer as ArrayBuffer
  );
};

export const blake2b = (
  data: Uint8Array,
  key: Uint8Array,
  size: number
): Uint8Array => {
  return new Uint8Array(
    foobar.extBlake2b(
      data.buffer as ArrayBuffer,
      key.buffer as ArrayBuffer,
      size
    )
  );
};

export const hmacSha256 = (key: Uint8Array, data: Uint8Array): Uint8Array => {
  return new Uint8Array(
    foobar.extHmacSha256(key.buffer as ArrayBuffer, data.buffer as ArrayBuffer)
  );
};

export const hmacSha512 = (key: Uint8Array, data: Uint8Array): Uint8Array => {
  return new Uint8Array(
    foobar.extHmacSha512(key.buffer as ArrayBuffer, data.buffer as ArrayBuffer)
  );
};

export const keccak256 = (data: Uint8Array): Uint8Array => {
  return new Uint8Array(foobar.extKeccak256(data.buffer as ArrayBuffer));
};

export const keccak512 = (data: Uint8Array): Uint8Array => {
  return new Uint8Array(foobar.extKeccak512(data.buffer as ArrayBuffer));
};

export const pbkdf2 = (
  data: Uint8Array,
  salt: Uint8Array,
  rounds: number
): Uint8Array => {
  return new Uint8Array(
    foobar.extPbkdf2(
      data.buffer as ArrayBuffer,
      salt.buffer as ArrayBuffer,
      rounds
    )
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
    foobar.extScrypt(
      password.buffer as ArrayBuffer,
      salt.buffer as ArrayBuffer,
      log2n,
      r,
      p
    )
  );
};

export const sha256 = (data: Uint8Array): Uint8Array => {
  return new Uint8Array(foobar.extSha256(data.buffer as ArrayBuffer));
};

export const sha512 = (data: Uint8Array): Uint8Array => {
  return new Uint8Array(foobar.extSha512(data.buffer as ArrayBuffer));
};

export const twox = (data: Uint8Array, rounds: number): Uint8Array => {
  return new Uint8Array(foobar.extTwox(data.buffer as ArrayBuffer, rounds));
};

export function isReady(): boolean {
  return true;
}

export async function waitReady(): Promise<boolean> {
  // With uniffi bindings, initialization is synchronous
  return true;
}
