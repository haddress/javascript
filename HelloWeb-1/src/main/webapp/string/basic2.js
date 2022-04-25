// string/basic2.js

// indexOf(), lastIndexOf() : 찾을 문자열의 위치인덱스 반환.
// 찾으면 위치값을 출력, 찾는 값이 없을 경우&못찾으면 -1을 출력.
let result = '안녕하세요 홍길동입니다, 대구의 홍길동입니다.'.indexOf('홍길동');
result = '안녕하세요 홍길동입니다, 대구의 홍길동입니다.'.lastIndexOf('홍길동');
result = '안녕하세요 홍길동입니다, 서울의 홍길동, 대구의 홍길동입니다.'.indexOf('홍길동', 15); // 15번째인덱스 이후부터 나타나는 홍길동 찾아오도록
let str1 = '안녕하세요 홍길동입니다, 서울의 홍길동, 부산의 홍길동,  대구의 홍길동입니다.';
let position = str1.indexOf('부산'); // '부산'의 위치인덱스
result = str1.indexOf('홍길동', position);
console.log(result);


// charAt(인덱스) : 인덱스위치의 문자를 반환
let str2 = str1.charAt(result);

// toLowerCase(), toUpperCase() : 문자변경
let str3 = 'Lorem ipsum DOLOR sit, amet consectetur dolor';
console.log(str3.toUpperCase().toLowerCase()); // 둘 다 넣으면 마지막에 넣은 함수로 출력(더 뒤에 있는 toLowerCase)

// includes('찾을 문자열') : 있으면 true/없으면 false
result = str3.includes('dolor');
console.log(result); // 단어가 있으므로 true 리턴

// search('찾을 문자열') -> 추가기능 : search(정규표현식)>찾을 문자열의 인덱스를 반환
result = str3.search('dolor');
// result = str3.toLowerCase().search('dolor');
console.log(result);

// search(정규표현식) -> 정규표현식 오브젝트 / /(new RegExp()), 배열[](new Array(1,2)), 
// i : 대소문자 구분 x
// g : 여러개 있어도 다 찾아오겠다는 뜻
// m : 멀티라인(ex.nextline같은)이어도 찾아옴
result = str3.search('dolor');
result = str3.search(/dolor/i); // 여기 들어간 i는 대소문자구분없이 찾겠다는 뜻
result = str3.search(/dolor/ig);
console.log(result);

// match('찾을 문자열') : 문자열 or null 반환
let str4 = 'bad MORNING, goodmorning, GOOD AFTERNOON, good evening, and good night';
result = str4.match('good');
result = str4.match(/good/gi);
result = str4.match(/good\s\w+/gi); // s: 공백 /  w: 문자하나(+가 붙으면 문자여러개 가져옴)
console.log(result);

// replace('찾을 문자열', '바꿀 문자열');
result = str4.replace('good', 'better');
result = str4.replace(/good/ig, 'better'); // 대소문자 구분없이 모두 바꿈
// W : 문자 이외의 것. d : 숫자. D : 숫자 이외의 것
result = str4.replace(/\W/ig, '-'); // 문자이외의것(W)을 -으로 바꿈
result = 'morning1 morning12 morning123'.replace(/\d/g, ''); // 문장전체에서(g) 숫자(d)만 제외('')
result = 'morning1 morning12 morning123'.replace(/\D/g, ''); // 문장전체에서(g) 숫자이외의 것(D)을 제외('')

let sso = ['970101-1234567', '970101 2234565', '9701013234567', '970101/423456'];
sso.forEach(num => console.log(num.replace(/\D/g, '')));
console.log(result);

// 문자열 합치기: +, concat()
console.log('hello' + ' world');
console.log('hello'.concat(' world', '!!', 'welcome'));








