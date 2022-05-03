package co.dev.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.dev.service.MemberService;
import co.dev.vo.MemberVO;

public class MemberInsertControl implements Control {
	
	

	// Control 인터페이스를 구현하는 클래스
	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("입력처리하는 컨트롤입니다.");
		String id = request.getParameter("id");
		String ps = request.getParameter("passwd");
		String nm = request.getParameter("name");
		String em = request.getParameter("email");
		
		MemberVO vo = new MemberVO();
		vo.setId(id);
		vo.setName(nm);
		vo.setEmail(em);
		vo.setPasswd(ps);
		
		MemberService service = new MemberService();
		service.memberInsert(vo);
		
		request.setAttribute("id", id);
		request.setAttribute("name", nm);
		
		// Dispatcher 객체가 가지고 있는 기능 중 forward -> memberResult/memberInsertOutput.jsp 페이지로 이동할 때 setAttribute에 담아놨던 값을 건네줌
		request.getRequestDispatcher("memberResult/memberInsertOutput.jsp").forward(request, response);
		
	}

}
