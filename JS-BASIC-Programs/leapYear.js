// Method 1:

function leapYear(year) {
  // if the year is divisible by 4,100 and 400 then its not a leap year;
  // if the year is divisible by 4 then its a leap year
  // 2024 is divible by 4 = 506, hence 2024 is a leap year but not by100 or 400
  // if a year is divisible by 100 then it should be divisible by 400 to be a leap year
  // As 2100 is divisible by 100 but not by 400 hence its not a leap year.
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      return year % 400 == 0;
    } else {
      return true;
    }
  } else {
    return false;
  }
}

const check = 2024;
if (leapYear(check)) {
  console.log(`${check} is a leap year.`);
} else {
  console.log(`${check} is not a leap year.`);
}

// Method 2:

function isLeapYear(year) {
  return year % 4 === 0 && !(year % 100 === 0 || year % 400 === 0);
}

const year = 2100;
const checkLeapYear = isLeapYear(year);

if (checkLeapYear) {
  console.log("The year " + year + " is a leap year.");
} else {
  console.log("The year " + year + " is not a leap year.");
}
