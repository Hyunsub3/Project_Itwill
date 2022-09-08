package jsppack;

public class MemberVo2 {

	public MemberVo2() {

	}

	public MemberVo2(String movieTitle, String theaterSelect, String citySelect, String areaSelect, String reservId) {
		this.movieTitle = movieTitle;
		this.areaSelect = areaSelect;
		this.citySelect = citySelect;
		this.theaterSelect = theaterSelect;
		this.reservid = reservId;
	}

	public String getMovieTitle() {
		return movieTitle;
	}

	public void setMovieTitle(String movieTitle) {
		this.movieTitle = movieTitle;
	}

	public String getTheaterSelect() {
		return theaterSelect;
	}

	public void setTheaterSelect(String theaterSelect) {
		this.theaterSelect = theaterSelect;
	}

	public String getCitySelect() {
		return citySelect;
	}

	public void setCitySelect(String citySelect) {
		this.citySelect = citySelect;
	}

	public String getAreaSelect() {
		return areaSelect;
	}

	public void setAreaSelect(String areaSelect) {
		this.areaSelect = areaSelect;
	}

	private String movieTitle;
	private String theaterSelect;
	private String citySelect;
	private String areaSelect;
	private String reservid;

	public String getReservid() {
		return reservid;
	}

	public void setReservid(String reservid) {
		this.reservid = reservid;
	}
}
