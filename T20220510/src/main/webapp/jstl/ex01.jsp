<%@page import="co.test.vo.BookVO"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>jstl/ex01.jsp</title>
</head>
<body>
<% String name = "Hong"; %>
	<c:set var="name" value="Hong"></c:set>
	<c:set var="pi" value="3.14"></c:set>
	<c:out value="${name }"></c:out>
	<c:out value="${pi }"></c:out>
	<h3>${pi }</h3>
	
	<%
		// 컨트롤러에서 해야하는 작업을 그냥 여기서 함..귀찮아서
		BookVO vo = new BookVO("20220501001", "이것이자바다", "오정임", "루비페이퍼", 10000);
		request.setAttribute("vo", vo);
	%>
	
	<c:if test="${vo eq null }">
		<h3>저장값이 없습니다.</h3>
	</c:if>
	
	<%
	 // c:when = else if랑 똑같아서 여러개 써도 됨
	 // c:otherwise = else
	%>
	<c:choose>
		<c:when test="${vo eq null }"><h3>no data.</h3></c:when>
		<c:when test="${vo.bookTitle eq '이것이자바다' }"><h3>책 제목이 일치합니다</h3></c:when>
		<c:when test="${vo.bookPrice > 2000 }"><h3>너무 비쌉니다.</h3></c:when>
		<c:when test="${vo.bookPrice > 1000 }"><h3>비쌉니다.</h3></c:when>
		<c:otherwise><h3>북코드: ${vo.bookCode }, 저자: ${vo.bookAuthor }</h3></c:otherwise>
	</c:choose>
	<%
		for(int i=1; i<=10; i++)
	%>
	<c:forEach begin="1" end="10" var="cnt">
		<p>2 * ${cnt } = ${cnt * 2 }</p>
	</c:forEach>
	
	<%//확장for문 %>
	<c:forEach items="${list }" var="book">
		<p>${book.bookCode }, ${book.bookTitle }</p>
	</c:forEach>
	
	<% // delims->구분자(ex.슬래시/로 구분) %>
	<c:forTokens items="소설/역사/인문/정치" delims="/" var="token">
		<p>token: ${token }</p>
	</c:forTokens>
	
	<h3>북코드: ${vo.bookCode }, 저자: ${vo.bookAuthor }</h3>
</body>
</html>