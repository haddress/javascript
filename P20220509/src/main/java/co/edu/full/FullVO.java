package co.edu.full;

public class FullVO {
	
	private String title;
	private String startDate;
	private String endDate;
	
	public FullVO() { // 기본생성자
		
	}
	
	public FullVO(String title, String startDate, String endDate) { // 필드를 다 가지고 있는 생성자
		super();
		this.title = title;
		this.startDate = startDate;
		this.endDate = endDate;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getStartDate() {
		return startDate;
	}

	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}

	public String getEndDate() {
		return endDate;
	}

	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	@Override
	public String toString() {
		return "FullVO [title=" + title + ", startDate=" + startDate + ", endDate=" + endDate + "]";
	}
	

}
