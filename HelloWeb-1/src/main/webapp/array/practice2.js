// array/practice2.js

let data =
  `[{"id":1,"first_name":"Sammie","last_name":"Kemsley","email":"skemsley0@behance.net","gender":"Male","ip_address":"237.218.129.122"},
{"id":2,"first_name":"Lazaro","last_name":"Willstrop","email":"lwillstrop1@fc2.com","gender":"Male","ip_address":"208.223.240.194"},
{"id":3,"first_name":"Denver","last_name":"Jeffery","email":"djeffery2@joomla.org","gender":"Male","ip_address":"144.17.205.120"},
{"id":4,"first_name":"Dennis","last_name":"Calwell","email":"dcalwell3@barnesandnoble.com","gender":"Non-binary","ip_address":"234.91.2.178"},
{"id":5,"first_name":"Madella","last_name":"Millar","email":"mmillar4@last.fm","gender":"Female","ip_address":"211.22.97.21"},
{"id":6,"first_name":"Mikel","last_name":"Rosoni","email":"mrosoni5@plala.or.jp","gender":"Polygender","ip_address":"51.0.133.58"},
{"id":7,"first_name":"Richmond","last_name":"Morfell","email":"rmorfell6@hao123.com","gender":"Male","ip_address":"28.109.116.98"},
{"id":8,"first_name":"Jobyna","last_name":"Densie","email":"jdensie7@usatoday.com","gender":"Female","ip_address":"209.65.230.33"},
{"id":9,"first_name":"Levon","last_name":"Sloyan","email":"lsloyan8@liveinternet.ru","gender":"Male","ip_address":"165.27.95.69"},
{"id":10,"first_name":"Simmonds","last_name":"Ybarra","email":"sybarra9@blogger.com","gender":"Male","ip_address":"54.76.3.87"},
{"id":11,"first_name":"Ollie","last_name":"Bennetts","email":"obennettsa@marriott.com","gender":"Female","ip_address":"112.237.154.24"},
{"id":12,"first_name":"Lissy","last_name":"Enticott","email":"lenticottb@vkontakte.ru","gender":"Female","ip_address":"208.227.148.3"},
{"id":13,"first_name":"Bevin","last_name":"Shoulders","email":"bshouldersc@biblegateway.com","gender":"Male","ip_address":"186.97.82.146"},
{"id":14,"first_name":"Cart","last_name":"Maplethorpe","email":"cmaplethorped@live.com","gender":"Male","ip_address":"28.185.15.106"},
{"id":15,"first_name":"Roman","last_name":"Puden","email":"rpudene@behance.net","gender":"Male","ip_address":"87.123.174.142"}]`;


let objAry = JSON.parse(data); // 문자열 = Object 변환

console.log(objAry);

// tag를 누적시킴
let result = objAry.reduce(function(accum, elem, ind) { // elem -> id가 **인 사람의 값을 가져옴 / ind -> 인덱스값. 배열에서의 인덱스
  // <ul> ~ </ul>
  if(ind == 0) {
  accum += '<ul>';
  }
  accum += `<li> id : ${elem['id']}, first_name : ${elem['first_name']} </li>`;
  if(ind == objAry.length -1) {
    accum += '</ul>';
  }
  return accum; // 여기서 나온 리턴값은 다음순번의 초기값(다음순번에서 그 값을 받아와 계속 누적해서 tag 생성)

}, ''); // '' -> 공란. 문자열의 초기값으로 사용
console.log(result);
document.write(result);