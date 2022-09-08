package jsppack;

//좌석까지 선택한 후의 데이터베이스 관련 Vo 클래스
public class MemberVo3 {

	private String reservid;
	private String datetime;
	private String sitnum;
	private String reservKid;
	private String reservTeen;
	private String reservAdult;

	public MemberVo3() {

	}

	public String getReservKid() {
		return reservKid;
	}

	public void setReservKid(String reservKid) {
		this.reservKid = reservKid;
	}

	public String getReservTeen() {
		return reservTeen;
	}

	public void setReservTeen(String reservTeen) {
		this.reservTeen = reservTeen;
	}

	public String getReservAdult() {
		return reservAdult;
	}

	public void setReservAdult(String reservAdult) {
		this.reservAdult = reservAdult;
	}

	public String getReservid() {
		return reservid;
	}

	public void setReservid(String reservid) {
		this.reservid = reservid;
	}

	public String getDatetime() {
		return datetime;
	}

	public void setDatetime(String datetime) {
		this.datetime = datetime;
	}

	public String getSitnum() {
		return sitnum;
	}

	public void setSitnum(String sitnum) {
		this.sitnum = sitnum;
	}

	public MemberVo3(String reservid, String Datetime, String Sitnum, String reservKid, String reservTeen,
			String reservAdult) {
		this.datetime = Datetime;
		this.reservid = reservid;
		this.sitnum = Sitnum;
		this.reservKid = reservKid;
		this.reservTeen = reservTeen;
		this.reservAdult = reservAdult;
	}

}
