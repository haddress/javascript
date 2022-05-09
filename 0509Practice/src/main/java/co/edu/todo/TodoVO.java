package co.edu.todo;

public class TodoVO {

	private String title;
	
	public TodoVO() {
		
	}
	
	public TodoVO(String title) {
		super();
		this.title = title;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	@Override
	public String toString() {
		return "TodoVO [title=" + title + "]";
	}
	
	

}
