const isPrime =(n)=>{
  var num;
  if (n < 2) {
    return false;
  }
  for (num=2; num<n;num++) {
    if (n%num===0)
    return false;
  }
  return true;
}

const isEven = (n)=> {
  if (n%2!==0) {
    return false;
    }
    return true;

  }

const isOdd = (n)=> {
  if (n%2===0) {
    return false;
    }
    return true;

  }

  const isFizzbuzz = (n)=> {
    if ((num%3!==0)||(num%5!==0)) {
      return false;
    }
    return true;
  }
  const isFizz = (n)=> {
    if ((num%3!==0)) {
      return false;
    }
    return true;
  }
  const isBuzz = (n)=> {
    if ((num%5!==0)) {
      return false;
    }
    return true;
  }


const numberIdentifier = (n)=> {
  var
    case1=[],case1_dup=[],overallArray,addedArray,counter

  for (num=0; num<=n; num++) {
    if (isFizzbuzz(num) && isEven(num)) {
      case1.push([num,"even","fizzBuzz"]);
      case1_dup.push("even","fizzBuzz");
    }
    else if (isFizzbuzz(num) && isOdd(num)) {
      case1.push([num,"odd","fizzBuzz"]);
      case1_dup.push("odd","fizzBuzz");
    }
    else if (isBuzz(num) && isOdd(num) && isPrime(num)) {
      case1.push([num,"odd","prime","buzz"]);
      case1_dup.push("odd","prime","buzz");
    }
    else if (isFizz(num) && isOdd(num) && isPrime(num)){
      case1.push([num,"odd","prime","fizz"]);
      case1_dup.push("odd","prime","fizz");
    }
    else if (isBuzz(num) && isOdd(num)) {
      case1.push([num,"odd","buzz"]);
      case1_dup.push("odd","buzz");
    }
    else if (isFizz(num) && isOdd(num)) {
      case1.push([num,"odd","fizz"]);
      case1_dup.push("odd","fizz");
    }
    else if (isBuzz(num) && isEven(num)) {
      case1.push([num,"even","buzz"]);
      case1_dup.push("even","buzz");
    }
    else if (isFizz(num) && isEven(num)) {
      case1.push([num,"even","fizz"]);
      case1_dup.push("even","fizz");
    }
    else if (isOdd(num) && isPrime(num)) {
      case1.push([num,"odd","prime"]);
      case1_dup.push("odd","prime");
    }
    else if (isEven(num) && isPrime(num)) {
      case1.push([num,"even","prime"]);
      case1_dup.push("even","prime");
    }
    else if (isOdd(num)) {
      case1.push([num,"odd"])
      case1_dup.push("odd");
    }
    else {
      case1.push([num,"even"])
      case1_dup.push("even");
    }
  }

  overallArray=(case1);
  console.log(overallArray);
  addedArray=case1_dup;
  return addedArray;
}
var array=numberIdentifier(100);


const counter =(array) => {
  var count = [];

  for (var i = 0; i < array.length; i++) {
    if (count[array[i]]) {
    count[array[i]] += 1;
    } else {
    count[array[i]] = 1;
   }
}
return count;

}
counter(array);
