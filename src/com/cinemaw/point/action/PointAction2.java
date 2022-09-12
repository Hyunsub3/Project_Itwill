package com.cinemaw.point.action;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.cinemaw.point.db.PointDAO;
import com.cinemaw.point.db.PointDAO2;
import com.cinemaw.point.db.PointDTO;
import com.cinemaw.point.db.PointDTO2;

public class PointAction2 implements Action {
	
	@Override
	public ActionForward execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		System.out.println("M : PointAction_execute() 호출");
		
		//BoardDAO 객체 생성 
		PointDAO2 dao2 = new PointDAO2();
		
		//dao 메서드 중에서 게시판 글정보를 모두 가져오는 메서드 호출 
		List<PointDTO2> pointList2 = dao2.getPointList2(); //리스트 생김
		// 위의 시점에서 토탈은 안받아오는거 같아요 빈값(0)으로 되어있어서
		
		System.out.println("M : 게시판 글정보 저장완료");
		
		//view 페이지 정보 전달을 위해서 request 영역에 전달 
		pointList2.get(0).setTotal(dao2.PointTotal3());
		//pointlist2가 하나밖에없으니까 그냥 0번 인덱스에 세터로 때려박음
		request.setAttribute("pointList2", pointList2);
		//System.out.println("test!!!::"+dao2.PointTotal3());
//		request.setAttribute("total", dao2.PointTotal3());
		
		//화면에 출력
		//페이지 이동(화면 전환)
		ActionForward forward = new ActionForward();
		forward.setPath("./mypoint.jsp");
		forward.setRedirect(false);
		
		return forward;
	}

}
