package co.edu;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/RequestServelt.do")
public class RequestServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public RequestServlet() {
		super();
	}

	@Override
	public void init(ServletConfig config) throws ServletException {
		System.out.println("init() call.");
	}

	@Override
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("service() call.");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html;charset=UTF-8");
		
		PrintWriter out = response.getWriter(); // 출력스트림
		out.print("<h3>홍길동</h3>");
		out.print("<h3>네트워크 정보</h3>");
		out.print("Request Scheme: " + request.getScheme() + "<br>"); // 스키마 정보 읽어오기
		out.print("Server Name: " + request.getServerName() + "<br>");
		out.print("Server Address: " + request.getLocalAddr()  + "<br>");
		out.print("Client Address: " + request.getRemoteAddr() + "<br>"); 
		out.print("Client Port: " + request.getRemotePort() + "<br>"); // 서버네임,주소,클라이언트주소,클라이언트포트 같은 요청정보 호출
		
		out.print("<h3>요청 프로토콜</h3>");
		out.print("Request URI: " + request.getRequestURI() + "<br>");
		out.print("Request URL: " + request.getRequestURL() + "<br>"); // URI의 상세정보
		out.print("Context path: " + request.getContextPath() + "<br>");
		out.print("Request protocol: " + request.getProtocol() + "<br>");
		out.print("Server Path: " + request.getServletPath() + "<br>"); // 요청한 페이지
		
		out.print("queryString: " + request.getQueryString() + "<br>");
		out.print("id: " + request.getParameter("id") + "<br>");
		out.print("pw: " + request.getParameter("passwd") + "<br>");
		out.print("name: " + request.getParameter("username") + "<br>");
		
		out.close();
		
		
	}

}
