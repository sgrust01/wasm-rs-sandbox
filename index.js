const rs = import('./pkg/wasm_rs_sandbox.js');
rs.then(m =>m.helloworld()).catch(console.error);
