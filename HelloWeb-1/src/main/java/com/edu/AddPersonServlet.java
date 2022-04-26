package com.edu;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class AddPersonServlet
 */
@WebServlet("/addPersonServlet")
public class AddPersonServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public AddPersonServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		response.setContentType("text/html; charset=UTF-8");

//		doGet(request, response);
		String id = request.getParameter("uid"); //
		String name = request.getParameter("uname");
		String score = request.getParameter("uscore");
		String age = request.getParameter("uage");

		System.out.println("아이디: " + id);
		System.out.println("이름: " + name);
		System.out.println("점수: " + score);
		System.out.println("나이: " + age);
		
		// db insert/update/delete/select
		
		PrintWriter out = response.getWriter(); // InputStream, OutputStream, Reader, Writer;
		// 응답정보에 getWriter를 호출해오면 웹페이지에 출력스트림을 하나 쓰겠다는 뜻(fileWriter는 파일에 씀)
		out.println("<h3>응답결과</h3>");
		out.println("<h4>입력아이디: " + id + "</h4>");
		out.println("<h4>입력이름: " + name + "</h4>");
		out.println("<h4>입력점수: " + score + "</h4>");
		out.println("<h4>입력나이: " + age + "</h4>");
		
		// 위에 있는 HttpServlet을 상속받아서 out.println()을 통해 html을 사용할 수 있음
	}

}
