package jsppack;

public class MemberVo {

	public String getId() {
		return Id;
	}

	public void setId(String id) {
		Id = id;
	}

	public String getPw() {
		return Pw;
	}

	public void setPw(String pw) {
		Pw = pw;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getNickname() {
		return Nickname;
	}

	public void setNickname(String nickname) {
		Nickname = nickname;
	}

	public String getEmail() {
		return Email;
	}

	public void setEmail(String email) {
		Email = email;
	}

	private String Id;
	private String Pw;
	private String Name;
	private String Nickname;
	private String Email;

	public MemberVo() {

	}

	public MemberVo(String Id, String Pw, String Name, String Nickname, String Email) {
		this.Id = Id;
		this.Pw = Pw;
		this.Name = Name;
		this.Nickname = Nickname;
		this.Email = Email;
	}

	// @Override
	// public String toString() {
	// return "MemberVO [id ="+Id+", pw = "+Pw+", name = "+Name+", nick =
	// "+Nickname+", email = "+Email+"]";
	// }
}
