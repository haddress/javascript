package co.edu.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class Info extends HttpServlet {

	// Info 페이지 요청 -> Init() -> 페이지를 요청할때마다 실행되는 Service() 메소드 -> 종료 후 Destroy()
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// HttpServletRequest -> 요청정보 처리
		resp.setCharacterEncoding("UTF-8"); // 응답정보를 내보내는데 한글이 있으면 utf-8로 변환
		resp.setContentType("text/html;charset=UTF-8"); // 응답정보를 보여주는 메소드
		
		PrintWriter out = resp.getWriter(); // 출력스트림
		
		out.print("<h3>서블릿 페이지</h3>");
		out.print("<h3>하이</h3>");
		out.print("");
		out.print("<a href=\"../index.html\">index</a>");
		// 문자 그대로 표현하려면 \" 로 묶어줘야함
		
	}

}
