package com.portal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ConfigurableApplicationContext;
import java.io.IOException;
import java.util.*;

@SpringBootApplication
public class PortalApplication {
	public record BeanInfo(String name, String pkg) {}

	@Autowired
	private ApplicationContext applicationContext;

	public static void main(String[] args) throws IOException {
		ConfigurableApplicationContext context =  SpringApplication.run(PortalApplication.class, args);
	}


}
