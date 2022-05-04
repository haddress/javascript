package co.dev.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.dev.service.MemberService;
import co.dev.vo.MemberVO;

public class MemberDeleteControl implements Control {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("삭제하는 컨트롤입니다.");
		
		String id = request.getParameter("id");
		
		MemberService service = new MemberService();
		service.memberDelete(id);
		
		request.setAttribute("id", id);
		
		request.getRequestDispatcher("memberResult/memberDeleteOutput.jsp").forward(request, response);
	}

}
