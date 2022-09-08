package com.cinemaw.member.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.cinemaw.member.db.MemberDAO;
import com.cinemaw.member.db.MemberVo;

public class MemberInsertAction implements Action {

	@Override
	public ActionForward execute(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		
		request.setCharacterEncoding("UTF-8");
		   String u_id = request.getParameter("u_id");
		   String u_pw= request.getParameter("u_pw");
		   String u_nm= request.getParameter("u_nm");
		   String birth= request.getParameter("birth");
		   String email = request.getParameter("email");
		   String phone = request.getParameter("phone");
		   String favorit = request.getParameter("favorit");
		   String mailing = request.getParameter("mailing");
		   
		   //System.out.println(mailing);

		   MemberVo vo = new MemberVo();
		   vo.setU_id(u_id);
		   vo.setU_pw(u_pw);
		   vo.setU_nm(u_nm);
		   vo.setBirth(birth);
		   vo.setEmail(email);
		   vo.setPhone(phone);
		   vo.setFavorit(favorit);
		   vo.setMailing(mailing);
		   
		   MemberDAO dao = new MemberDAO();
		   dao.MemberInsert(vo);
//		   response.sendRedirect("main.jsp");
		   
		   ActionForward forward = new ActionForward();
		   forward.setPath("./MemberLogin.me");
			forward.setRedirect(true); //주소바뀜
			
			return forward;
		}
		
	}