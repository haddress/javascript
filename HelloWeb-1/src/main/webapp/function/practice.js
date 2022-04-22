// practice.js

const numbers = [23, 45, 32, 55, 34, 72];

let sum = 0;

for(let i=0; i<numbers.length; i++) {
  if(numbers[i] % 2 == 0){
    sum +=numbers[i];
  }
}
console.log('합: ' + sum);

sum=0;
for (let number of numbers) {
  if(number % 2 ==0) {
    sum+=number;
  }
}
console.log('합: ' + sum);



// 표현식으로
sum=0;
let evenSum = (param, idx) => {
  console.log(param, idx);
  if(param % 2 == 0) {
    sum+=param;
  }
};

let oddSum = (param, idx) => {
  console.log(param, idx);
  if(param % 2 == 1) {
    sum+=param;
  }
};
sum=0;
numbers.forEach(oddSum); // 변수를 evenSum, oddSum 중 무엇으로 넣느냐에따라 출력값이 달라짐

// numbers.forEach((param, idx) => { // forEach->forEach에 들어있는 갯수만큼 반복하시오 / param, idx ->콜백함수
//   console.log(param, idx)
//   if(param % 2 == 0) {
//     sum+=param;
//     }
//   });
console.log('합: ' + sum);



// numbers.forEach(evenSum); // evenSum -> sum에 있는 짝수만 담을 변수
