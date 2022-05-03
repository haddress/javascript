package co.edu;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/request1.do")
public class RequestServ extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public RequestServ() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		String id = request.getParameter("id");
		String name = request.getParameter("name");
		
		request.setAttribute("id", id); // 요청정보에 "id"라는 키값에 id라고 지정한 파라메터 값 담기
		request.setAttribute("name", name);
		
		StudentDAO dao = new StudentDAO();
		Student result = dao.searchStudent(id);
		request.setAttribute("result", result);
		
		// response.jsp로 id와 name 속성을 받아서 전달
		request.getRequestDispatcher("response.jsp").forward(request, response); // request.jsp의 폼인 /request1.do에서 받아온 정보를 response.jsp로 공유. jsp의 내장객체인 request를 매개값으로 사용
		// 또 다른 jsp페이지에서 request.~ 을 이용하여 값을 가져올 수는 없음
		// request.sendRedirect("response.jsp"); // getRequestDispatcher.forward와 sendRedirect의 차이 파악하기
		// sendRedirect는 request값을 공유할 수 있는 방법이 없음
		// forward : 건네주기
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}

}
