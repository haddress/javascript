package co.edu.full;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

@WebServlet("/FullCalendarServlet")
public class FullCalendarServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public FullCalendarServlet() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 전체조회 -> get방식
		response.setCharacterEncoding("utf-8");
		response.setContentType("text/json;charset=utf-8");
		
		FullDAO dao = new FullDAO(); // 
		List<FullVO> list = dao.getList(); // dao가 가지고 있는 list를 가져오기 위해
		
		Gson gson = new GsonBuilder().create();
		response.getWriter().print(gson.toJson(list)); // gson의 데이터를 json형태로 데이터를 생성
		
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 입력, 삭제 -> post방식
		
		// 입력
		request.setCharacterEncoding("utf-8");
		String job = request.getParameter("job");
		
		FullDAO dao = new FullDAO(); // dao클래스로 입력, 삭제하기 위
		
		if(job.equals("insert")) {
			String title = request.getParameter("title");
			String start = request.getParameter("start");
			String end = request.getParameter("end");
			
			FullVO vo = new FullVO(title, start, end); // 생성자타입
			dao.insertSchedule(vo);
			
		// 삭제
		} else if(job.equals("delete")) {
			String title = request.getParameter("title");
			dao.deleteSchedule(title);
		}
		
	}

}
