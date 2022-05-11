<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>메인화면입니다.</title>
</head>
<body>
<!-- 	<h3>첫페이지입니다.</h3> -->
<%-- 	<a href="${pageContext.request.contextPath }/memberView/memberInsert.tiles">회원정보생성</a><br>
	<a href="${pageContext.request.contextPath }/memberView/memberSearch.tiles">회원정보검색</a><br>
	<a href="${pageContext.request.contextPath }/memberView/memberUpdate.tiles">회원정보수정</a><br>
	<a href="${pageContext.request.contextPath }/memberView/memberDelete.tiles">회원정보삭제</a><br>
	<a href="${pageContext.request.contextPath }/memberList.do">모든회원정보</a><br>
	<a href="${pageContext.request.contextPath }/ajax.html">Ajax호출</a> --%>
	<!-- Sidebar-->
  <div class="border-end bg-white" id="sidebar-wrapper">
    <div class="sidebar-heading border-bottom bg-light">첫페이지입니다.</div>
    <div class="list-group list-group-flush">
       <a class="list-group-item list-group-item-action list-group-item-light p-3" href="${pageContext.request.contextPath }/memberView/memberInsert.tiles">회원정보생성</a>
       <a class="list-group-item list-group-item-action list-group-item-light p-3" href="${pageContext.request.contextPath }/memberView/memberSearch.tiles">회원정보검색</a>
       <a class="list-group-item list-group-item-action list-group-item-light p-3" href="${pageContext.request.contextPath }/memberView/memberUpdate.tiles">회원수정검색</a>
       <a class="list-group-item list-group-item-action list-group-item-light p-3" href="${pageContext.request.contextPath }/memberView/memberDelete.tiles">회원삭제검색</a>
       <a class="list-group-item list-group-item-action list-group-item-light p-3" href="${pageContext.request.contextPath }/memberList.do">모든회원정보</a>
       <a class="list-group-item list-group-item-action list-group-item-light p-3" href="${pageContext.request.contextPath }/ajax.html">Ajax호출</a>
     </div>
   </div>
	
</body>
</html>