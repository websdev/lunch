import static spark.Spark.*;

public class HelloWorld {
	public static void main(String[] args) {
		get("/", (req, res) -> "Hello, World!");
	}
}
