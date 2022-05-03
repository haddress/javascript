<%@page import="co.edu.Student"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>response.jsp</title>
</head>
<body>
	<%
		String id = (String) request.getAttribute("id"); // id로 담아놓은 값 읽어오기 / request -> jsp가 갖고있는 내장객체(따로 선언하지 않아도 존재).setAttribute를 이용하여 내장객체에 담긴 id를 가져옴
		// request는 요청단위당 공유하는 방법(?)
		String name = (String) request.getAttribute("name"); 
		Student student = (Student) request.getAttribute("result");
	%>
	
	<h3>id: <%=id %></h3> <!-- %사이에 쓴 내용은 자바로 읽으므로 자바에서 id 변수에 담아놓은 값을 가져옴 -->
	<h3>name: <%=name %></h3>
	<h3>no: <%=student.getStudentNo() %></h3>
	<h3>name: <%=student.getStudentName() %></h3>
</body>
</html>