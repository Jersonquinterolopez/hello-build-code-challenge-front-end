// GENERATING CODE VERIFIER

const dec2hex = (dec) => {
  return ('0' + dec.toString(16)).substr(-2);
};

const codeVerifier = () => {
  let array = new Uint32Array(56 / 2);
  window.crypto.getRandomValues(array);
  return Array.from(array, dec2hex).join('');
};

// GENERATE CODE CHALLENGE FROM CODE VERIFIER

function sha256(plain) {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return window.crypto.subtle.digest('SHA-256', data);
}

function base64urlencode(a) {
  let str = '';
  let bytes = new Uint8Array(a);
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    str += String.fromCharCode(bytes[i]);
  }
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

const generateStateParameter = (verifier) => {
  let hashed = sha256(verifier);
  let test = base64urlencode(hashed);
  return test;
};

export { codeVerifier, generateStateParameter };
