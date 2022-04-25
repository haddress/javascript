// string/basic.js
// 문자열 vs 문자열 객체

let str1 = '문자열';
console.log(typeof str1);

let str2 = new String('문자열'); // 오브젝트
console.log(typeof str2);

console.log(str1 == str2); // 비교연산자 == 값을 비교
console.log(str1 === str2); // 비교연산자 === 값 & type도 같이 비교
// str1은 문자열, str2는 오브젝트라 false

let result = str1.substring(0, 2); // index:0 ~ index:2 의 값을 잘라내기
console.log(result);
result = str2.substr(0, 2); // index:0부터 크기 2만큼 잘라내기
console.log(result);

const cal1 = '1+2*3'; // string
const cal2 = new String('1+2*3'); // object

// eval() : 문자열 => 수식변경
console.log(eval(cal1)); // 단순히 문자열은 return을 할수없으므로 실제 연산을 할 수 있도록 수식으로 변경
// 1 + 2 * 3 => 7
console.log(eval(cal2.valueOf())); // object는 eval함수를 쓰더라도 그대로 object. 따라서 valueOf() 사용 필요
// 1 + 2 * 3 => 7

// trim() : 좌우의 여백을 잘라내는 역할
console.log(' 문자열 공백 테스트 ');
console.log(' 문자열 공백 테스트 '.trim());
console.log(' 문자열 공백 테스트 '.trimStart().trimEnd());

// 문자열의 공백을 제거
result = ' 문자열 공백 테스트 '.split(' '); // 매개변수에 들어온 값을 기준으로 왼쪽의 문자열을 잘라내서 배열형태로 return 해줌
result = result.filter(function (val, ind, ary) {
  return val; // [''. '문자열', '공백', '테스트', '']
}); // 매개변수에 어떤 함수가 들어오느냐를 보고 배열의 각 요소의 true값을 배열로 형성 
console.log(result);
console.log(result.join('')); // 메소드 join() : 배열을 문자열로 반환

result = ' 문자열 공백 테스트 '.split(' ').filter(val => val).join(', '); // filter()도 함수가 매개값으로 옴. val값을 받아서 val로 return
console.log(result);

// 자바스크립트 boolean 값이 null, '', 0, undefined => js에서는 false로 나타남
// false값은 리턴을 안해줌. true값만 출력됨
if (!null) { // if구문에서는 조건식으로 참(true)이나 거짓(false)값만 올 수 있는데, null이라는 값은 js에서 false라는 의미이므로 사용가능. 하지만 false이므로 출력안됨
  // true인 값만 담아주겠다는 뜻
  console.log('false값')
}

if ('문자열') { 
  console.log('false값')
}

// 문자열 잘라내는 메소드 : slice, substring, substr(Deprecated);
console.log('안녕하세요 반갑습니다'.slice(0, 6)); // 앞의 index값부터 뒤의 index값까지, 보통 js에서 앞의 index값은 포함이고 뒤의 index값은 제외됨
// slice 메소드는 -값도 사용 가능
// 인덱스 기준 0~5 잘라내기
console.log('안녕하세요 반갑습니다'.substring(0, 6));
console.log('안녕하세요 반갑습니다'.substr(2, 3)); // 뒤의 숫자는 index값이 아니라 갯수.크기(몇 개 만큼 잘라오겠다)

// toString() : 문자열로 반환
let num1 = 123;
console.log(typeof num1);
num1 = num1.toString(); // num1값을 toString으로 변환
console.log(typeof num1);

true.toString(); // true값을 문자열로 바꿀 수 있다

let obj = {
  key: 'Hong',
  value: 15
}
console.log(obj.toString());
console.log(obj.key.toString());
console.log(obj.value.toString());