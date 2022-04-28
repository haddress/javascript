/**
 * post.js 
 */

document.addEventListener('DOMContentLoaded', init);

// 리스트 -> 초기화하는 함수. 제일 먼저 실행
function init() {
	let xhtp = new XMLHttpRequest(); // XMLHttpRequest() <- 얘 중요함
	xhtp.open('get', '../studentList.json'); // 파일 위치가 webapp/ajax이므로 한 단계 위로 / studentList.json 데이터를 불러와서 사용
	xhtp.send();
	xhtp.onload = function () {
		let data = JSON.parse(xhtp.responseText); // json -> object로
		console.log(data);
		let tbodyList = document.getElementById('list');
		data.forEach(function (elem /*student 1건을 의미*/ ) { // data 반복해서 넣어주기
			console.log(elem); // console에서 확인용
			let newTr = makeTr(elem);
			tbodyList.appendChild(newTr);
		})
	} // end onload

	// modBtn 수정
	let modBtn = document.querySelector('input[type="button"]');
	modBtn.addEventListener('click', function () {
		let no = document.querySelector('input[name=sno]').value;
		let name = document.querySelector('input[name=sname]').value;
		let eScore = document.querySelector('input[name=eScore]').value;
		let kScore = document.querySelector('input[name=kScore]').value;

		let xhtp = new XMLHttpRequest();
		xhtp.open('get', `modStudentServlet?a=${no}&b=${name}&c=${eScore}&d=${kScore}`);
		xhtp.send();
		xhtp.onload = function () {
			let result = JSON.parse(xhtp.responseText);
			console.log(result);
			if (result.retCode == 'Success') {
				// 결과값으로 받은 값을 => 새로운 tr로
				let obj = {
					studentNo: result.studentNo,
					studentName: result.studentName,
					engScore: result.engScore,
					korScore: result.korScore
				}
				let newTr = makeTr(obj);
				let oldTr = document.getElementById(result.studentNo);
				alert('변경되었습니다.');
				document.getElementById('list').replaceChild(newTr, oldTr); // 새로운 tr
				
			} else {
				alert('변경 중 오류');
			}
		} // onload=function()
	}); // modBtn.add~
} // end of init()

// 변경처리
function modStudent() {

}


// 한건추가
function addStudent(e) { // e명만큼 add(?)
	e.preventDefault(); // submit -> 차단
	console.log(e);

	let no = document.querySelector('input[name="sno"]').value;
	let name = document.querySelector('input[name="sname"]').value;
	let eng = document.querySelector('input[name="eScore"]').value;
	let kor = document.querySelector('input[name="kScore"]').value;

	let xhtp = new XMLHttpRequest(); // 비동기방식으로 서버의 파일요청, 처리된 결과를 받아오도록
	xhtp.open('get', `addStudentServlet?sno=${no}&sname=${name}&eScore=${eng}&kScore=${kor}`);
	xhtp.send();
	xhtp.onload = function () {
		console.log(xhtp.responseText); // {"retCode":""Success"}
		let result = JSON.parse(xhtp.responseText); // {retCode:"Success"}
		if (result.retCode == 'Success') {
			// 리스트 새로운 값 추가
			successCallBack2(result); // {retCode:?, studNo:?, studName:?, escore:?, kscore:?}
		} else if (result.retCode == 'Fail') {
			// 처리 중 에러가 발생
			failCallBack();
		}
	} // end of function()
} // end of addStudent(e)

// makeTr
function makeTr(student) {
	let tr = document.createElement('tr');
	tr.setAttribute('id', student.studentNo); // 라인삭제를 id로 지정 => getElementById / json리스트에 있는 속성값을 가져온 것
	for (let field in student) {
		let td = document.createElement('td');
		td.innerHTML = student[field];
		tr.appendChild(td);
	}
	// 삭제버튼 생성
	let delBtn = document.createElement('button'); // <button></button>
	delBtn.innerHTML = '삭제';

	// 삭제버튼 이벤트 등록
	delBtn.addEventListener('click', function () {
		// 삭제(id파악 => ajax 호출) / this => 이벤트 click이 실행됐을때의 대상element(요소)
		let id = this.parentElement.parentElement.firstChild.innerHTML;
		console.log(id);
		let xhtp = new XMLHttpRequest();
		xhtp.open('get', 'delStudentServlet?delId=' + id);
		xhtp.send(); // send()를 호출해야 실행됨
		xhtp.onload = function () {
			let result = JSON.parse(xhtp.responseText);
			if (result.retCode == 'OK') {
				alert(result.retVal + '번이 삭제되었습니다.');
				document.getElementById(result.retVal).remove();
			} else {
				console.log(result.retVal);
			}
		}
	})

	let td = document.createElement('td'); // <td></td>
	td.appendChild(delBtn); // <td><button></button></td>
	tr.appendChild(td);

	return tr;
} // end of makeTr(student)

function successCallBack2(retObj) {
	console.log(retObj);
	let obj = {
		studentNo: retObj.studentNo,
		studName: retObj.studName,
		engScore: retObj.engScore,
		korScore: retObj.korScore,
	}
	document.getElementById('list').appendChild(makeTr(obj));
} // end of successCallBack2()

//function successCallBack() {
//	// 사용자 입력값을 id='list' 하위 추가
//	let no = document.querySelector('input[name="sno"]').value;
//	let name = document.querySelector('input[name="sname"]').value;
//	let eng = document.querySelector('input[name="eScore"]').value;
//	let kor = document.querySelector('input[name="kScore"]').value;
//
//	let obj = {
//		studNo: no,
//		studName: name,
//		engScore: eng,
//		korScore: kor,
//	};
//
//	let row = makeTr(obj);
//	document.getElementById('list').appendChild(row);
//}

function failCallBack() {
	alert('처리 중 에러발생.')

}