<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>index.jsp</title>
</head>
<body>
	<h3>반갑습니다.</h3>
	<% // 자바코드로 쓸 수 있음
	 	String name = "홍길동";
		out.println("<h3>" + name + "</h3>");
		
		String id = request.getParameter("user_id"); // 내장객체 / 파라메터값을 읽어와서 내장객체 실행 / id태그의 user_id 파라미터값을 가져와서 값을 리턴
		String name2 = request.getParameter("user_name");
		out.println("<h4>입력값: " + id + ", name: " + name2 + "</h4>");
	%>

	<a href="./student/student.do">Student Servlet</a>
</body>
</html>