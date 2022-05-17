<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>result/addOutput.jsp</title>
</head>
<body>

	<%=request.getAttribute("Hello") %> <!-- 표현식 -->
	${!empty Hello } <!-- getAttribute를 쓰지 않아도 hello를 불러올 수 있음  -->
	
	${Hello ne null } <!-- el관계연산자도 참고 -->
	
	<h3>도서 [${bookTitle}] 등록완료</h3>
	
    <a href="${pageContext.servletContext.contextPath }/index.jsp">첫페이지</a>

</body>
</html>