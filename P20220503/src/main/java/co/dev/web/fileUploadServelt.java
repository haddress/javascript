package co.dev.web;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.oreilly.servlet.MultipartRequest;
import com.oreilly.servlet.multipart.DefaultFileRenamePolicy;

@WebServlet("/fileUploadServelt")
public class fileUploadServelt extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public fileUploadServelt() {
		super();
	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// multipart 요청
		// request(요청정보), 저장위치(String), 최대사이즈, 인코딩(String), 리네임정책(서버에 파일을 올렸는데 똑같은 파일이 있으면 업로드한 파일의 이름을 새로 지정하도록 하는 기능)
		// 리네임정책: file.jpg -> file1.jpg
		String title =  request.getParameter("title");
		String content = request.getParameter("content");
		System.out.println("title: " + title + ", content: " + content);
		
		String saveDir = "upload";
		saveDir = getServletContext().getRealPath(saveDir);
		int maxSize = 1024 * 1024 * 10;
		String encoding = "UTF-8";
		MultipartRequest multi = new MultipartRequest(request, saveDir, maxSize, encoding, new DefaultFileRenamePolicy());
		title = multi.getParameter("title");
		content = multi.getParameter("content");
		String profile = multi.getOriginalFileName("profile"); // 원래 파일 이름
		String fileName = multi.getFilesystemName("profile"); // 리네임정책에 의해 변경된 이름
		System.out.println("title1: " + title + ", content1: " + content + ", profile: " + profile + ", file: " + fileName);
	}

}
