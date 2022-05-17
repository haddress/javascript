package co.test.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import co.test.service.BookService;
import co.test.vo.BookVO;

public class AddBookControl implements Controller {
	
//	book_code
//    ,book_title
//    ,book_author
//    ,book_press
//    ,book_price

	@Override
	public void execute(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		// db insert
		// addBook.do -> 실제로는 이 페이지인 AddBookControl.java가 실행 -> addOutput.jsp 로 넘어감 
		
		System.out.println("입력처리 컨트롤");
		
		String bt = request.getParameter("title");
		String ba = request.getParameter("author");
		String bpress = request.getParameter("press");
		int bprice = Integer.parseInt(request.getParameter("price"));
		
		String title = request.getParameter("title");
		
		BookVO vo = new BookVO();
		vo.setBookTitle(bt);
		vo.setBookAuthor(ba);
		vo.setBookPress(bpress);
		vo.setBookPrice(bprice);
		
		BookService service = new BookService();
		service.addBook(vo);
		
		request.setAttribute("bookTitle", bt);
		request.setAttribute("title", title);
		
		request.getRequestDispatcher("result/addOutput.jsp").forward(request, response);
	}

}
