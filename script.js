function append(value) {
  const display = document.getElementById('display');
  if (value === 'Math.sqrt(') {
    display.value += 'Math.sqrt(';
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById('display');
  try {
    display.value = eval(display.value.replace('÷', '/').replace('×', '*'));
  } catch {
    display.value = 'Error';
  }
}
