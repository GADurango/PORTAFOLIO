const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function encryptText() {
  const inputText = document.getElementById('inputText').value.toUpperCase();

  if (inputText.trim() !== '') {
    const shift = 1; 
    const encryptedText = encryptAlgorithm(inputText, shift);
    document.getElementById('resultText').value = encryptedText;
    showMessage('Texto encriptado con éxito.', 'success');
  } else {
    showMessage('Error: el texto no puede estar vacío.', 'error');
  }
}

function decryptText() {
  const inputText = document.getElementById('inputText').value.toUpperCase();

  if (inputText.trim() !== '') {
    const shift = 1; 
    const decryptedText = decryptAlgorithm(inputText, shift);
    document.getElementById('resultText').value = decryptedText;
    showMessage('Texto desencriptado con éxito.', 'success');
  } else {
    showMessage('Error: el texto no puede estar vacío.', 'error');
  }
}

function encryptAlgorithm(text, shift) {
  let encryptedText = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === ' ') {
      encryptedText += ' ';
      continue;
    }
    const charIndex = ALPHABET.indexOf(char);
    const encryptedIndex = (charIndex + shift) % ALPHABET.length;
    encryptedText += ALPHABET[encryptedIndex];
  }
  return encryptedText;
}

function decryptAlgorithm(text, shift) {
  let decryptedText = '';
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === ' ') {
      decryptedText += ' ';
      continue;
    }
    const charIndex = ALPHABET.indexOf(char);
    const decryptedIndex = (charIndex - shift + ALPHABET.length) % ALPHABET.length;
    decryptedText += ALPHABET[decryptedIndex];
  }
  return decryptedText;
}

function showMessage(message, messageType) {
  const messageSection = document.getElementById('messageSection');
  messageSection.innerText = message;
  messageSection.className = messageType;
}
