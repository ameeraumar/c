document.getElementById('addBtn').addEventListener('click', function() {
    calculate('add');
  });
  
  document.getElementById('subtractBtn').addEventListener('click', function() {
    calculate('subtract');
  });
  
  document.getElementById('multiplyBtn').addEventListener('click', function() {
    calculate('multiply');
  });
  
  document.getElementById('divideBtn').addEventListener('click', function() {
    calculate('divide');
  });
  
  function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
  
    let result;
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        result = num1 / num2;
        break;
      default:
        result = 'Invalid operation';
    }
  
    document.getElementById('result').textContent = 'Result: ' + result;
  }