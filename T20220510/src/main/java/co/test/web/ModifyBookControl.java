package co.test.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.test.service.BookService;
import co.test.vo.BookVO;

public class ModifyBookControl implements Controller {

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println("수정처리");
		
		String bookCode = request.getParameter("bookCode");
		
		if (bookCode.isEmpty()) {
			request.setAttribute("error", "모든 항목을 입력하세요.");
			request.getRequestDispatcher("view/modify.jsp").forward(request, response);
			return;
		}
		
		BookVO book = new BookVO();
		book.setBookCode(bookCode);
		
		BookService service = new BookService();
		service.modifyBook(book);
		
		request.setAttribute("bookCode", bookCode);
		
		request.getRequestDispatcher("result/modifyOutput.jsp").forward(request, response);
	}

}
