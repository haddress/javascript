<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>ajax.jsp</title>
</head>
<body>
	<script>
		// 자바스크립트 영역
	
		// ajax -> 비동기방식. Asynchronous Javascript And Xml
		// fetch()라는 함수를 가지고
		let url = 'StudentGetServlet';
		fetch(url) // StudentGetServlet을 실행해서 넘어오는 타입이 json타입.
				.then(result => { // 매개값 result를 받아서 {}블럭값 실행. json형태로 결과값 stream 타입 변경
					console.log(result);
					return result.json(); // result값이 가지고 있는 body(처리된 결과값을 갖고있는 부분)를 자바스크립트에서 사용하는 key:value형식의 json타입으로 변환해서 return // {"id":23,"name":"hong"}
				}) // 성공시
				.then(result => {
					console.log(result);
				})
				.catch(error => {
					console.log(error);
				}) // 실패시(에러가 나면)
				
	</script>

</body>
</html>