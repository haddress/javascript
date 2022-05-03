<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>application.jsp</title>
</head>
<body>
	<%
		String name = (String) application.getAttribute("name"); // getAttribute가 오브젝트이므로 String타입으로 변경
		out.print("<h3>" + name + "</h3>");
	%>
</body>
</html>