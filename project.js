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
    case1,case2=[]//variable case 2 is assigned outside the loop because we want it to collect all the elements that will be pushed

  for (num=0; num<=n; num++) {
    case1=[];//this variable is located inside the loop so that each time a value is pushed, the result will be printed.
    if (isFizzbuzz(num) && isEven(num)) {
      case1.push("even","fizzBuzz");//pushes the identifiers to an empty array called case1 located inside the for loop if the condition is passed
    }
    else if (isFizzbuzz(num) && isOdd(num)) {
      case1.push("odd","fizzBuzz");
    }
    else if (isBuzz(num) && isOdd(num) && isPrime(num)) {
      case1.push("odd","prime","buzz");
    }
    else if (isFizz(num) && isOdd(num) && isPrime(num)){
      case1.push("odd","prime","fizz");
    }
    else if (isBuzz(num) && isOdd(num)) {
      case1.push("odd","buzz");
    }
    else if (isFizz(num) && isOdd(num)) {
      case1.push("odd","fizz");
    }
    else if (isBuzz(num) && isEven(num)) {
      case1.push("even","buzz");
    }
    else if (isFizz(num) && isEven(num)) {
      case1.push("even","fizz");
    }
    else if (isOdd(num) && isPrime(num)) {
      case1.push("odd","prime");
    }
    else if (isEven(num) && isPrime(num)) {
      case1.push("even","prime");
    }
    else if (isOdd(num)) {
      case1.push("odd")
    }
    else {
      case1.push("even")
    }
    console.log(num,case1);//prints the num alongside its identifiers starting from 0
    case2.push(case1)//the values from case1 is continously pushed to the array case2 after every iteration
  }

  return case2;
  /*the array case2 located outside the loop returns all the
  identifiers, this will be used for ounting the occurrences of the identifiers
  */
}
var array=numberIdentifier(100);//declares a variable array to hold result of the function numberIdentifier upto 100


const counter =(array) => {//counts the occurrences of the identifiers
  var count = [];

  for (var i = 0; i < array.length; i++) {
    /*iterates through an array starting from element at first position and keeps count of
    the number of occurrences of different identifiers until everything in the array has been counted
    */
    for( var j=0;j<array[i].length; j++) {
      if (count[array[i][j]]) {
      count[array[i][j]] += 1;
      } else {
      count[array[i][j]] = 1;
      }
    }
}
return count;//returns the number of occurrences of each element

}

console.log("Occurences of each identifier:" ,counter(array));
