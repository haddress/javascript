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
		
		System.out.println("입력처리 컨트롤");
		
		String bt = request.getParameter("title");
		String ba = request.getParameter("author");
		String bpress = request.getParameter("press");
		int bprice = Integer.parseInt(request.getParameter("price"));
		
		BookVO vo = new BookVO();
		vo.setBookTitle(bt);
		vo.setBookAuthor(ba);
		vo.setBookPress(bpress);
		vo.setBookPrice(bprice);
		
		BookService service = new BookService();
		service.addBook(vo);
		
		request.setAttribute("bookTitle", bt);
		
		request.getRequestDispatcher("result/addOutput.jsp").forward(request, response);
	}

}
