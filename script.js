const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.getAttribute('data-value');
    if (btn.id === 'clear') {
      currentInput = '';
      updateDisplay();
    } else if (btn.id === 'equal') {
      calculateResult();
    } else {
      currentInput += value;
      updateDisplay();
    }
  });
});

function updateDisplay() {
  display.value = currentInput;
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
    updateDisplay();
  } catch (e) {
    currentInput = 'Error';
    updateDisplay();
    setTimeout(() => {
      currentInput = '';
      updateDisplay();
    }, 1000);
  }
}

// Keyboard support
document.addEventListener('keydown', (e) => {
  const validKeys = '0123456789+-*/.=';
  if (validKeys.includes(e.key)) {
    if (e.key === '=') {
      calculateResult();
    } else {
      currentInput += e.key;
      updateDisplay();
    }
  } else if (e.key === 'Enter') {
    calculateResult();
  } else if (e.key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
  } else if (e.key === 'Escape') {
    currentInput = '';
    updateDisplay();
  }
});
