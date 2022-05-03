<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>main.jsp</title>
</head>
<body>
	<%
		// 세션은 어떻게 쓸 수 있을까?
		String id = (String) session.getAttribute("id");
	
		if(id == null) {
//			out.print("<button onclick='location.href=session.jsp'>로그인</button>"); // on~ : 이벤트 관련 속성
	%>
	<!-- html 영역 -->
	<button onclick = 'location.href="session.jsp"'>로그인</button>
	
	<%
		} else {
//			out.print("<h3>로그인한 아이디는 " + id + "</h3><br><button onclick='location.href=\"logout.do\"'>로그아웃</button>");
		
	%>
		<h3>로그인한 아이디는 <%=id %></h3>
		<button onclick = 'location.href="logout.do"'>로그아웃</button> <!-- 사용하던 세션을 삭제해버리고 logout.do로 감  -->
	<%
		}
	%>
</body>
</html>