<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>memberUpdate.jsp</title>
</head>
<body>
	${error }
	
	<h3>회원수정검색</h3>
	<form action="${pageContext.servletContext.contextPath }/memberSearch.do" method="get"> <!-- pageContext.servletContext.contextPath로 경로를 설정하면 절대경로이기때문에 어디서 호출하든 호출이 가능 --> 
		조회 아이디: <input type="text" name="id"><br>
		<input type="hidden" name="job" value="update">
		<input type="submit" value="Search">
	</form>

	<c:choose>
		<c:when test="${!empty result }"><h3>${result }</h3></c:when>
		<c:otherwise>
			<h3>회원정보수정</h3>
			<form action="${pageContext.servletContext.contextPath }/memberUpdate.do " method="post">
				아이디: <input type="text" name="id" readonly value="${member.id }"><br>
				이름: <input type="text" name="name" value="${member.name }"><br>
				이메일: <input type="email" name="email" value="${member.email }"><br>
				비밀번호: <input type="text" name="passwd" value="${member.passwd }"><br>
				<input type="submit" value="수정">
			</form>
		</c:otherwise>
	</c:choose>

	<jsp:include page="../memberResult/home.jsp"></jsp:include>
</body>
</html>

<!-- !empty result -> 값이 있을때 result 출력 -->
<!-- action="호출할페이지" -->
<!-- memberUpdate.jsp 페이지로 넘어올 때 attribute가 member라는 이름으로 넘어옴. 따라서 value에 넘어온 attribute의 값을 담아줌 -->
<!-- input 수정을 누르면 memberUpdate.do로 넘어감 -->