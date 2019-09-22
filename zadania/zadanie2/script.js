function makeArray(min, max) {
  const array = new Array();
  for (let i = min; i <= max; i++) {
    i % 2 === 0 ? array.push(i) : "";
  }
  console.log(array);

  const divisibleArray = isDivisibleBy(array, 6);
  console.log(divisibleArray);

  const sum = sumArray(divisibleArray);
  console.log(sum);
}

function isDivisibleBy(arr, number) {
  const divisible = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % number === 0) divisible.push(arr[i]);
  }
  return divisible;
}

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i] + 1;
  }
  return sum;
}

makeArray(1, 100);
