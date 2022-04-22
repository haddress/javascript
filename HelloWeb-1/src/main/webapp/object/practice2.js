// object/pratice2.js
// 달력만들기

let year = 0;
let month = 0;
showCalendar(2022, 5);

function showCalendar(year, month) {

  let firstDay = getFirstDay(year, month); // 1일의 위치지정하기 위한 함수
  let lastDate = getLastDate(year, month); // 해당월의 마지막 날을 계산하는 함수

  document.write(`${month}월`);
  document.write('<table border=1><tr>');
  showDayInfo();

  // 빈공간 작성
  for (let i = 0; i < firstDay; i++) {
    document.write(`<td> </td>`)
  }
  // 날짜 화면 출력
  for (let i = 1; i <= lastDate; i++) {
    if ((i + firstDay) % 7 == 0) {
      document.write(`<td style="background:cyan;">${i}</td>`);
    } else if ((i + firstDay) % 7 == 1) {
      document.write(`<td style="background:red;">${i}</td>`);
    } else {
      document.write(`<td>${i}</td>`);
    }
    if ((i + firstDay) % 7 == 0) { // 줄바꿈
      document.write(`</tr><tr>`);
    }
  }
  document.write('</tr></table>');
};

function showDayInfo() {
  // 요일 정보 함수
  let days = ['일', '월', '화', '수', '목', '금', '토'];
  days.forEach(function (day) {
    document.write(`<th style="background-color:yellow; color:brown;">${day}</th>`)
  })
  document.write('</tr>');
}

function getLastDate(year, month) {
  // 말일 정보를 가지고 오는 함수
  switch (month) {
    case 1:
      return 31;
    case 2:
      return 28;
    case 3:
      return 31;
    case 4:
      return 30;
    case 5:
      return 31;
    case 6:
      return 30;
    case 7:
      return 31;
    case 8:
      return 31;
    case 9:
      return 30;
    case 10:
      return 31;
    case 11:
      return 30;
    case 12:
      return 31;
  }

}

function getFirstDay(year, month) {
  switch (month) {
    case 1:
      return 6;
    case 2:
      return 2;
    case 3:
      return 2;
    case 4:
      return 5;
    case 5:
      return 0;
    case 6:
      return 3;
    case 7:
      return 5;
    case 8:
      return 1;
    case 9:
      return 4;
    case 10:
      return 6;
    case 11:
      return 2;
    case 12:
      return 4;
  }
}