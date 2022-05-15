package co.dev.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.dev.service.MemberService;
import co.dev.vo.MemberVO;

public class MemberSearchControl implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String id = request.getParameter("id");
		String job = request.getParameter("job"); // memberSearch.jsp의 input name="job" / update값이 넘어옴
		
		
		String path = "";
		if(job.equals("search")) { // 검색페이지에서 job 조회헀을때
			path = "memberView/memberSearch.jsp";
		} else if(job.equals("update")) { // 수정페이지에서 job 조회헀을때
			path = "memberView/memberUpdate.jsp";
		} else if(job.equals("delete")) { // 삭제페이지에서 job 조회했을때
			path = "memberView/memberDelete.jsp";
		}
		
		if(id.isEmpty()) { // id가 null일때
			request.setAttribute("error", "아이디를 입력하세요.");
			request.getRequestDispatcher(path).forward(request, response); // 아이디 입력 페이지로 돌아가게 됨
		}
		
		MemberService service = new MemberService();
		MemberVO member = service.memberSearch(id);
		
		if (member == null) {
			request.setAttribute("result", "조회된 정보가 없습니다.");
		}
		request.setAttribute("member", member); // null이 아니면(값이 있으면) member를 뿌려주도록
		
		if (job.equals("search")) {
			path = "memberResult/memberSearchOutput.jsp";
		}
		request.getRequestDispatcher(path).forward(request, response);
	}

}

