<div align="center">
 <p><h1>Rust Wasm Sandbox</h1> </p>
 <p><strong>Sandbox to test WASM with Rust</strong> </p>
</div>

## Features
* Routes panics to browser console
* Logs appears with rust file number
* Auto-reloading with webpack

#### Pre-requisite:
___
* Requires npm

```shell script
$ npm install
```

* Requires wasm

```shell script
$ rustup target add wasm32-unknown-unknown 
```

#### Execute:
___

```shell script
$ npm run dev
```