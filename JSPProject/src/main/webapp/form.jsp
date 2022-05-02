<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>form.jsp</title>
</head>
<body>
	<form name="frm" action="StudentGetServlet" method="get">
		<input type="hidden" name="cmd" value="search">
		ID: <input type="number" name="user_id"><br>
		Name: <input type="text" name="user_name"><br>
		Eng: <input type="number" name="eng_score"><br>
		Kor: <input type="number" name="kor_score"><br>
		<input type="submit" value="조회"> <!-- 조회만 get방식 -->
		<input id="addBtn" type="button" value="입력">
		<input id="modBtn" type="button" value="수정">
		<input id="delBtn" type="button" value="삭제">
	</form>
	<hr>
	<a href="studentList.jsp">학생목록</a>

	<script>
		// 수정
		let modBtn = document.getElementById('modBtn');
		modBtn.addEventListener('click', function() {
			let frm = document.forms.frm;
			frm.method = "post";
			frm.cmd.value = "mod";
			frm.submit(); // submit 버튼을 클릭
		});
		
		// 삭제
		let delBtn = document.getElementById('delBtn');
		delBtn.addEventListener('click', function() {
			// 메소드는 post 방식으로 -> StudentGetServlet.java에서 doPost가 실행
			let frm = document.forms.frm;
			frm.method = "post";
			frm.cmd.value = "del";
			frm.submit(); // submit 버튼을 클릭
		});
		
		// 추가
		let btn = document.querySelector('#addBtn'); // 태그 찾아서 click이벤트를 달기 위함
		btn.addEventListener('click', function() {
			let frm = document.forms.frm; // document의 forms 태그들을 컬렉션 형태로 다 가져옴. 그 중 frm
			
			frm.action = "StudentGetServlet";
			frm.method = "post"; <!-- 입력할 때 비공개로 넘기기 위해 post방식 -->
			frm.cmd.value = "add";
			
			frm.submit(); // form의 submit(버튼누르면 submit됐던것과 같은 기능) 함수 실행
		});
	</script>
</body>
</html>