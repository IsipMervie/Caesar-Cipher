// script.js
function caesarCipher(message, shift, encrypt = true) {
  let result = '';
  shift = encrypt ? shift : -shift;

  for (let i = 0; i < message.length; i++) {
      let charCode = message.charCodeAt(i);

      if (charCode >= 65 && charCode <= 90) {
          result += String.fromCharCode(((charCode - 65 + shift + 26) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) {
          result += String.fromCharCode(((charCode - 97 + shift + 26) % 26) + 97);
      } else {
          result += message.charAt(i);
      }
  }
  return result;
}

document.getElementById("encryptButton").addEventListener("click", function() {
  const message = document.getElementById("message").value;
  const shift = parseInt(document.getElementById("shift").value);
  const ciphertext = caesarCipher(message, shift);
  document.getElementById("ciphertextDisplay").textContent = "Ciphertext: " + ciphertext;
});

document.getElementById("decryptButton").addEventListener("click", function() {
  const shift = parseInt(document.getElementById("shift").value);
  const ciphertext = document.getElementById("ciphertextDisplay").textContent.replace("Ciphertext: ","");
  const decryptedMessage = caesarCipher(ciphertext, shift, false);
  document.getElementById("decryptedDisplay").textContent = "Decrypted Message: " + decryptedMessage;
});