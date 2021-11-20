package testermatcher.services;

import javax.ws.rs.GET;
import javax.ws.rs.Path;

@Path("/message")
public class HelloService {
	@GET
	public String getMsg() {
		return "Hello, world!";
	}
}