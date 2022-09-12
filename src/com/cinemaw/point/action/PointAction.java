package com.cinemaw.point.action;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.cinemaw.point.db.PointDAO;
import com.cinemaw.point.db.PointDTO;

public class PointAction implements Action {
	
	@Override
	public ActionForward execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("M : PointAction_execute() 호출");
		
		//BoardDAO 객체 생성 
		PointDAO dao = new PointDAO();
		
		//dao 메서드 중에서 게시판 글정보를 모두 가져오는 메서드 호출 
		List<PointDTO> pointList = dao.getPointList(); //리스트 생김
		
		System.out.println("M : 포인트 정보 저장완료");
		
		//view 페이지 정보 전달을 위해서 request 영역에 전달 
		request.setAttribute("pointList", pointList);

		
		//화면에 출력
		//페이지 이동(화면 전환)
		ActionForward forward = new ActionForward();
		forward.setPath("./mypoint.jsp");
		forward.setRedirect(false);
		
		return forward;
	}

}
