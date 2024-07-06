function checkLeapYear() {
  const year = document.getElementById("leapYearInput").value;
  const result = isLeapYear(year);
  document.getElementById("leapYearResult").innerText = `${year} is ${
    result ? "a leap year" : "not a leap year"
  }`;
}

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

function getPrice() {
  const age = document.getElementById("ageInput").value;
  const price = getTicketPrice(age);
  document.getElementById(
    "priceResult"
  ).innerText = `The ticket price for age ${age} is $${price}`;
}

function getTicketPrice(age) {
  if (age <= 12) {
    return 10;
  } else if (age <= 17) {
    return 15;
  } else {
    return 20;
  }
}

function getFibonacci() {
  const n = document.getElementById("fibonacciInput").value;
  const result = fibonacci(n);
  document.getElementById(
    "fibonacciResult"
  ).innerText = `The ${n}th Fibonacci number is ${result}`;
}

function fibonacci(n) {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

function checkPalindrome() {
  const str = document.getElementById("palindromeInput").value;
  const result = isPalindrome(str);
  document.getElementById("palindromeResult").innerText = `"${str}" is ${
    result ? "" : "not "
  }a palindrome`;
}

function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  function checkPalindrome(s, start, end) {
    if (start >= end) {
      return true;
    }
    if (s[start] !== s[end]) {
      return false;
    }
    return checkPalindrome(s, start + 1, end - 1);
  }
  return checkPalindrome(str, 0, str.length - 1);
}
