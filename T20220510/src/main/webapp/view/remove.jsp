<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Insert title here</title>
</head>

<body>

	<h3>${error }</h3>

    <h3>도서삭제조회</h3>
    <form action="../searchBook.do" method="get">
        <input type="text" name="bookCode" id=""><br>
        <input type="hidden" name="job" value="remove">
        <input type="submit" value="조회">
    </form>

    <!-- 도서삭제를 위한 화면 작성코드를 입력하세요. -->
    <c:choose>
    	<c:when test="${!empty result }"><h3>${result }</h3></c:when>
    	<c:otherwise>
    		<h3>도서삭제</h3>
    		<form action="${pageContext.servletContext.contextPath }/removeBook.do" method="post">
    		도서코드: ${book.bookCode }<br>
    		<input type="hidden" name="bookCode" value="${book.bookCode }">
    		도서명: ${book.bookTitle }<br>
    		도서저자: ${book.bookAuthor }<br>
				도서출판사: ${book.bookPress }<br>
				도서가격: ${book.bookPrice }<br>
				<input type="submit" value="삭제">
    		</form>
    	</c:otherwise>
		</c:choose>
    <a href="${pageContext.servletContext.contextPath }/index.jsp">첫페이지</a>

</body>

</html>