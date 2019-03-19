const isPrime =(n)=>{//checks if the current number provided is prime
  var num;
  if (n < 2) {
    return false;//returns false if the number is less than 2,since 2 is the first prime number
  }
  for (num=2; num<n;num++) {//iterates through and returns true for prime number
    if (n%num===0)
    return false;
  }
  return true;
}

const isEven = (n)=> {//checks if the current number provided is even
  if (n%2!==0) {
    return false;
    }
    return true;//returns true if condition is passed

  }

const isOdd = (n)=> {//checks if number is odd
  if (n%2===0) {
    return false;
    }
    return true;//returns true if condition is passed

  }

  const isFizzbuzz = (n)=> {//checks if number is divisible by 3 and by 5(fizzbuzz number)
    if ((num%3!==0)||(num%5!==0)) {
      return false;
    }
    return true;//returns true if conditioned is passed
  }
  const isFizz = (n)=> {//checks if number is divisible by 3 only(fizz number)
    if ((num%3!==0)) {
      return false;
    }
    return true;//returns true if conditoned is passed
  }
  const isBuzz = (n)=> {//checks if number is divisible by 5 only(buzz number)
    if ((num%5!==0)) {
      return false;
    }
    return true;//returns true if condition is passed
  }


const numberIdentifier = (n)=> {//checks through given numbers from 0 to maximum number while printing their corresponding identifiers
  var
    case1=[],case1_dup=[],case2=[],case2_dup=[],case3=[],case3_dup=[],case4=[],case4_dup=[],case5=[],case5_dup=[],case6=[],case6_dup=[],case7=[],case7_dup=[],case8=[],case8_dup=[],case9=[],case9_dup=[],case10=[],case10_dup=[],case11=[],case11_dup=[],case12=[],case12_dup=[],overallArray=[],addedArray=[],counter

  for (num=0; num<=n; num++) {//iterates through the numbers starting from 0
    if (isFizzbuzz(num) && isEven(num)) {
      case1.push(num,"even","fizzBuzz");//pushes the number(s) and its identifiers to an empty array called case1 if the condition is passed
      case1_dup.push("even","fizzBuzz");//pushed only the identifiers to a different empty array(case1_dup), this will make it easy to count the occurrences of the identifiers
    }
    else if (isFizzbuzz(num) && isOdd(num)) {
      case2.push(num,"odd","fizzBuzz");
      case2_dup.push("odd","fizzBuzz");
    }
    else if (isBuzz(num) && isOdd(num) && isPrime(num)) {
      case3.push(num,"odd","prime","buzz");
      case3_dup.push("odd","prime","buzz");
    }
    else if (isFizz(num) && isOdd(num) && isPrime(num)){
      case4.push(num,"odd","prime","fizz");
      case4_dup.push("odd","prime","fizz");
    }
    else if (isBuzz(num) && isOdd(num)) {
      case5.push(num,"odd","buzz");
      case5_dup.push("odd","buzz");
    }
    else if (isFizz(num) && isOdd(num)) {
      case6.push(num,"odd","fizz");
      case6_dup.push("odd","fizz");
    }
    else if (isBuzz(num) && isEven(num)) {
      case7.push(num,"even","buzz");
      case8_dup.push("even","buzz");
    }
    else if (isFizz(num) && isEven(num)) {
      case8.push(num,"even","fizz");
      case8_dup.push("even","fizz");
    }
    else if (isOdd(num) && isPrime(num)) {
      case9.push(num,"odd","prime");
      case9_dup.push("odd","prime");
    }
    else if (isEven(num) && isPrime(num)) {
      case10.push(num,"even","prime");
      case10_dup.push("even","prime");
    }
    else if (isOdd(num)) {
      case11.push(num,"odd")
      case11_dup.push("odd");
    }
    else {
      case12.push(num,"even")
      case12_dup.push("even");
    }
  }

  overallArray.push(case1,case2,case3,case4,case5,case6,case7,case8,case9,case10,case11,case12);
  console.log(overallArray);
  /*pushes the arrays with the numbers and there identifiers to a single array called overallArray,
  all numbers which pass a specific condition are grouped in one array and then pushed to the overall array
  which which lead to formation of a 2D nested array.
  */
  addedArray=case1_dup.concat(case2_dup,case3_dup,case4_dup,case5_dup,case6_dup,case7_dup,case8_dup,case8_dup,case9_dup,case10_dup,case11_dup,case12_dup);
  return addedArray;
  /*the arrays with only the identifiers are added to form a single array called addedArray
  this makes counting the occurrences of the identifiers easy
  */
}
var array=numberIdentifier(100);//declares a variable array to hold result of the function numberIdentifier upto 100


const counter =(array) => {//counts the occurrences of the identifiers
  var count = [];

  for (var i = 0; i < array.length; i++) {
    /*iterates through an array starting from element at first position and keeps count of
    the number of occurrences of different identifiers until everything in the array has been counted
    */
    if (count[array[i]]) {
    count[array[i]] += 1;
    } else {
    count[array[i]] = 1;
   }
}
return count;//returns the number of occurrences of each element

}
counter(array);
