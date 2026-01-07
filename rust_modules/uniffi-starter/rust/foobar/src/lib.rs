uniffi::setup_scaffolding!();

#[path = "bip39.rs"]
pub mod bip39;

#[path = "ed25519.rs"]
pub mod ed25519;

#[path = "hashing.rs"]
pub mod hashing;

// #[path = "secp256k1.rs"]
// pub mod secp256k1;

#[path = "sr25519.rs"]
pub mod sr25519;

#[path = "vrf.rs"]
pub mod vrf;
