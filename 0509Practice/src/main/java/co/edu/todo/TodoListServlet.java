package co.edu.todo;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@WebServlet("/TodoListServlet")
public class TodoListServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public TodoListServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 전체조회
		response.setCharacterEncoding("utf-8");
		response.setContentType("html/json;charset=utf-8");
		
		TodoDAO dao = new TodoDAO();
		List<TodoVO> list = dao.getLIst();
		
		Gson gson = new GsonBuilder().create();
		response.getWriter().print(gson.toJson(list));
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 입력, 삭제
		request.setCharacterEncoding("utf-8");
		String job = request.getParameter("job");
		
		TodoDAO dao = new TodoDAO();
		
		if(job.equals("insert")) {
			String title = request.getParameter("title");
			
			TodoVO vo = new TodoVO(title);
			dao.insertTodo(vo);
		} else if (job.equals("delete")) {
			String title = request.getParameter("title");
			dao.deleteTodo(title);
		}
	}

}
