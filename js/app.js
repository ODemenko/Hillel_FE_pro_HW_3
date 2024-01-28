let operation; 

function func() {
  let result;
  let numOne = Number(document.getElementById("numOne").value);
  let numTwo = Number(document.getElementById("numTwo").value);
  switch (operation) {
    case '+':
      result = numOne + numTwo;
      break;
    case '-':
      result = numOne - numTwo;
      break;
    case '*':
      result = numOne * numTwo;
      break;
    case '/':
      result = numOne / numTwo;
      break;
  }

  document.getElementById("result").innerHTML = result;

}