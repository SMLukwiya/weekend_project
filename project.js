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

const even = (n)=> {
  if (n%2!==0) {
    return false;
    }
    return true;

  }

const odd = (n)=> {
  if (n%2===0) {
    return false;
    }
    return true;

  }

  const fizzbuzz = (n)=> {
    if ((num%3!==0)||(num%5!==0)) {
      return false;
    }
    return true;
  }
  const fizz = (n)=> {
    if ((num%3!==0)) {
      return false;
    }
    return true;
  }
  const buzz = (n)=> {
    if ((num%5!==0)) {
      return false;
    }
    return true;
  }


const numberLogger = (n)=> {
  var
    case1=[],case1_dup=[],case2=[],case2_dup=[],case3=[],case3_dup=[],case4=[],case4_dup=[],case5=[],case5_dup=[],case6=[],case6_dup=[],case7=[],case7_dup=[],case8=[],case8_dup=[],case9=[],case9_dup=[],case10=[],case10_dup=[],case11=[],case11_dup=[],case12=[],case12_dup=[],overallArray=[],addedArray=[],counter

  for (num=0; num<=n; num++) {
    if (fizzbuzz(num) && even(num)) {
      case1.push(num,"even","fizzBuzz");
      case1_dup.push("even","fizzBuzz")
    }
    else if (fizzbuzz(num) && odd(num)) {
      case2.push(num,"odd","fizzBuzz");
      case2_dup.push("odd","fizzBuzz");
    }
    else if (buzz(num) && odd(num) && isPrime(num)) {
      case3.push(num,"odd","prime","buzz");
      case3_dup.push("odd","prime","buzz");
    }
    else if (fizz(num) && odd(num) && isPrime(num)){
      case4.push(num,"odd","prime","fizz");
      case4_dup.push("odd","prime","fizz");
    }
    else if (buzz(num) && odd(num)) {
      case5.push(num,"odd","buzz");
      case5_dup.push("odd","buzz");
    }
    else if (fizz(num) && odd(num)) {
      case6.push(num,"odd","fizz");
      case6_dup.push("odd","fizz");
    }
    else if (buzz(num) && even(num)) {
      case7.push(num,"even","buzz");
      case8_dup.push("even","buzz");
    }
    else if (fizz(num) && even(num)) {
      case8.push(num,"even","fizz");
      case8_dup.push("even","fizz");
    }
    else if (odd(num) && isPrime(num)) {
      case9.push(num,"odd","prime");
      case9_dup.push("odd","prime");
    }
    else if (even(num) && isPrime(num)) {
      case10.push(num,"even","prime");
      case10_dup.push("even","prime");
    }
    else if (odd(num)) {
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
  addedArray=case1_dup.concat(case2_dup,case3_dup,case4_dup,case5_dup,case6_dup,case7_dup,case8_dup,case8_dup,case9_dup,case10_dup,case11_dup,case12_dup);
  return addedArray;
}
var array=numberLogger(100);


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
