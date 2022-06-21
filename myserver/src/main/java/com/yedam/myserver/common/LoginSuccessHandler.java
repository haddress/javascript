package com.yedam.myserver.common;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.yedam.myserver.users.vo.UserVO;

// 로그인 처리가 끝나고 나면 이 핸들러로 넘어옴 -> session에 기능을 추가하는 등의 추가작업 -> 이후 페이지 forward
@Component
public class LoginSuccessHandler implements AuthenticationSuccessHandler{  // AuthenticationSuccessHandler를 상속받아서 오버라이드 추가
	
	private static final Logger logger = LoggerFactory.getLogger(LoginSuccessHandler.class); // 실행결과를 로그로 출력하기 위함
	
	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
			Authentication authentication) throws IOException, ServletException {
		String name = authentication.getName(); // 접속한 사용자 id
		UserVO vo = (UserVO)authentication.getPrincipal();
		request.getSession().setAttribute("suser", vo);
		logger.info("handler===" + name);
		response.sendRedirect("top.jsp");
	}
	

}
