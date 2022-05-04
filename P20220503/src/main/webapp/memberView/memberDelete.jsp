<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>memberDelete.jsp</title>
</head>
<body>
	${error }
	
	<h3>회원삭제검색</h3>
	<form action="${pageContext.servletContext.contextPath }/memberSearch.do" method="get">
		조회 아이디: <input type="text" name="id"><br>
		<input type="hidden" name="job" value="delete">
		<input type="submit" value="Search">
	</form>
	
	<c:choose>
		<c:when test="${!empty result }"><h3>${result }</h3></c:when>
		<c:otherwise>
			<h3>회원정보삭제</h3>
			<form action="${pageContext.servletContext.contextPath }/memberDelete.do" method="post">
			아이디: ${member.id }<br>
			<input type="hidden" name="id" value="${member.id }"> <!-- 이걸 넣어줘야 id값이 넘어감 -->
			이름: ${member.name }<br>
			이메일: ${member.email }<br>
			<input type="submit" value="삭제">
			</form>
		</c:otherwise>
	</c:choose>
	<jsp:include page="../memberResult/home.jsp"></jsp:include>
</body>
</html>