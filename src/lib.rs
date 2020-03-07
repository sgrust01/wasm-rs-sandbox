extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

use log::{info, warn};
use std::panic;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
}

#[wasm_bindgen]
pub fn helloworld() {
    panic::set_hook(Box::new(console_error_panic_hook::hook));
    log("Using JS log");
    femme::start(log::LevelFilter::Trace).unwrap();
    info!("Using Rust log");
    warn!("Still using Rust log");
    panic!("something..");
}