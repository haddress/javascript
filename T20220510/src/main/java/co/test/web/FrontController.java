package co.test.web;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/FrontController")
public class FrontController extends HttpServlet {
	private static final long serialVersionUID = 1L;

	Map<String, Controller> map;
	String enc;

	public FrontController() {
		super();
	}

	public void init(ServletConfig config) throws ServletException { // 페이지 실행 시 최초 한 번만 실행

		enc = config.getInitParameter("encoding");

		map = new HashMap<String, Controller>();

		map.put("/addBook.do", new AddBookControl());
		map.put("/listBook.do", new ListBookControl());
		map.put("/searchBook.do", new SearchBookControl());
		map.put("/modifyBook.do", new ModifyBookControl());
		map.put("/removeBook.do", new RemoveBookControl());

	}

	protected void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException { // 페이지가 실행되면 실제 시행되는 건 service라는 메소드가 실행

		request.setCharacterEncoding(enc);
		
		// 사용자가 실행한 url을 보고 어떤 페이지를 요청했는지
		String uri = request.getRequestURI();
		String context = request.getContextPath();
		String path = uri.substring(context.length());

		Controller controller = map.get(path); // ~Control()이 실행
		controller.execute(request, response);

	}

}
