package co.edu;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// IOC : Introversion of control
public class StudentServlet extends HttpServlet {
	@Override
	public void init(ServletConfig config) throws ServletException {
		System.out.println("init() 호출."); // 최초 호출할 때만 init 한 번 실행, 그 후에는 service 호출
	}
	
	// HttpServlet에 이미 doGet, doPost가 정의되어있으나 service를 먼저 정의해두었으므로 service를 먼저 실행
	// get방식 요청이면 doGet 실행, post방식 요청이면 doPost가 실행되도록
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 호출되는방식이 get호출이든 post호출방식이든 service 호출이 되었으나, 아래처럼 if로 조건을 걸어둘 경우 달라짐
		// 요청정보 req, 응답정보 resp
		resp.setContentType("text/html;charset=UTF-8"); // 태그들을 html형식으로 처리
		
		String method = req.getMethod(); // req.getMethod() : req가 갖고있는 요청정보 중 요청방식을 갖고오는 메소드
		PrintWriter out = resp.getWriter(); // 출력스트림 생성
		out.print("<h3>Student Sample page.</h3>");
		
		if(method.equals("GET")) {
			out.print("<h3>Get방식 호출<h3>");
			doGet(req, resp);
		} else if (method.equals("POST")) {
			out.print("<h3>Post방식 호출<h3>");
		}
		out.print("<a href='../index.jsp?user_name=kildong&user_id=hong'>index page</a>");
	}
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	}
	
	@Override
	public void destroy() {
		System.out.println("destroy() 호출.");
	}
}
