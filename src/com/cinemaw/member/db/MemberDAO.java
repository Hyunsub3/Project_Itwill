package com.cinemaw.member.db;

import java.sql.*;

import org.apache.catalina.connector.Request;

public class MemberDAO {
	
	// DAO : �����ͺ��̽� ���� ��ü_���������� DB���� ȸ�������� �ҷ����ų� ���� �� �����
	
	// ���뺯�� (�ν��Ͻ� ����)
	private Connection con = null; 
	private PreparedStatement pstmt = null; 
	private ResultSet rs = null;
	private String sql = "";
	int count = 0;

	// ��� ����
//	private Connection getConnect() throws Exception {

	
	// mysql�� �����ϴ� �κ�
	public void MemberInsert(MemberVo vo) { 
      
		
		
         try {
            String DRIVER = "com.mysql.cj.jdbc.Driver";
            String DBURL = "jdbc:mysql://localhost:3306/movieswill";
            String DBID = "root";
            String DBPW = "1234";

            //드라이버 로드
            Class.forName(DRIVER);
            con = DriverManager.getConnection(DBURL, DBID, DBPW);
            
            
            // Sql작성 
            String sql = "insert into user_master(u_id,u_pw,u_nm,u_join_dt,birth,email,"
                  + "phone,snstype,snsid,favorit,mailing) "
                  + "values(?,?,?,?,?,?,?,?,?,?,?)";
            
            pstmt = con.prepareStatement(sql);

            // ????? 
            pstmt.setString(1,vo.getU_id());
            pstmt.setString(2,vo.getU_pw());
            pstmt.setString(3,vo.getU_nm());
            //pstmt.setString(4,dto.getU_join_dt()); 둘중에 하나
            pstmt.setDate(4, vo.getU_join_dt());
            pstmt.setString(5,vo.getBirth());
            pstmt.setString(6,vo.getEmail());
            pstmt.setString(7,vo.getPhone());
            pstmt.setString(8,vo.getSnstype());
            pstmt.setString(9,vo.getSnsid());
            pstmt.setString(10,vo.getFavorit());
            pstmt.setString(11,vo.getMailing());
            

            //     
            count = pstmt.executeUpdate();
            
            
            if (count > 0) { 
               System.out.println(" 자원해제 ");
            }

         }catch (Exception e) { 
            e.printStackTrace();
         }
         finally { 
            try {
               // 자원 해제
               con.close();
               pstmt.close();
            } catch (Exception e) {
               e.printStackTrace();
               } 
            } 
            
         }  
      
   
   }
