// array/practice1.js

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
'<id>15</id><first_name>Dotti</first_name><last_name>Gonning</last_name>';

let objAry = JSON.parse(data); // 문자열 => object 변경
console.log(objAry);

// filter() : 반환조건 참인 요소 => 새로운 배열
let newAry = objAry.filter(function (elem) {
  console.log(elem);
  return elem.gender == 'Female';
});

console.log(newAry);

// 함수 : femaleList(ary);
// document.write() => ul > li * 8 생성
function femaleList(ary) {
  let tag = '<ul>';
  ary.forEach(function (elem) {
    tag += '<li>';
    for (let field in elem) { // elem이 오브젝트 타입이므로 field만큼 반복
      tag += `${field} : ${elem[field]} <br> ${field=='ip_address'? '' : ''}`;
    }
    tag += `</li><br>`;
  });
  tag += '</ul>';
  document.write(tag);

}
femaleList(newAry);

// function femaleList(ary) {
//   let target = document.getElementById('show')

//   let ul = document.createElement('ul');
//   ary.forEach(function (elem, idx) {
//     let li = document.createElement('li')
//     let val = ``;
//     for (let field in elem) {
//       val = `${field} : ${elem[field]} ${idx==(5)?'':','}`;
//     }
//     li.textContent = val;
//     ul.appendChild(li);
//   })
//   target.appendChild(ul);
// }
// document.addEventListener('DOMContentLoaded', function () {

// })
// femaleList(newAry);