<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

	<h3>검색결과</h3>
		<c:if test="${!empty result }"><h4>${result }</h4></c:if>
		<c:if test="${!empty book }">
			도서코드: ${book.bookCode }<br>
			도서명: ${book.bookTitle }<br>
			도서저자: ${book.bookAuthor }<br>
			도서출판사: ${book.bookPress }<br>
			도서가격: ${book.bookPrice }<br>
		</c:if>
    <a href="${pageContext.servletContext.contextPath }/index.jsp">첫페이지</a>

</body>
</html>