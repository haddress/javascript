package co.dev.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

import co.dev.service.MemberService;
import co.dev.vo.MemberVO;

public class MemberInsertControl implements Control {
	
	

	// Control 인터페이스를 구현하는 클래스
	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// multipart 요청에 필요한 것 : request(요청정보), saveDir, maxSize, encoding, renamePolicy
		String saveDir = "upload";
		saveDir = request.getServletContext().getRealPath(saveDir); // 요청정보에도 getServletContext() 제공됨
		int maxSize = 1024 * 1024 * 10;
		String encoding = "UTF-8";
		MultipartRequest multi = new MultipartRequest(request, saveDir, maxSize, encoding, new DefaultFileRenamePolicy());
		
		System.out.println("입력처리하는 컨트롤입니다.");
		
		String id = multi.getParameter("id");
		String ps = multi.getParameter("passwd");
		String nm = multi.getParameter("name");
		String em = multi.getParameter("email");
		String pf = multi.getFilesystemName("profile");
		
		MemberVO vo = new MemberVO();
		vo.setId(id);
		vo.setName(nm);
		vo.setEmail(em);
		vo.setPasswd(ps);
		vo.setProfile(pf);
		
		MemberService service = new MemberService();
		service.memberInsert(vo);
		
		request.setAttribute("id", id);
		request.setAttribute("name", nm);
		
		// Dispatcher 객체가 가지고 있는 기능 중 forward -> memberResult/memberInsertOutput.jsp 페이지로 이동할 때 setAttribute에 담아놨던 값을 건네줌
		request.getRequestDispatcher("memberResult/memberInsertOutput.jsp").forward(request, response);
		
	}

}
