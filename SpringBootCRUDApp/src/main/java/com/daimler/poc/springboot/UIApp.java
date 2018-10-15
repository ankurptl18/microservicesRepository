package com.daimler.poc.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//same as @Configuration @EnableAutoConfiguration @ComponentScan
@SpringBootApplication(scanBasePackages={"com.daimler.poc.springboot"})
public class UIApp {

	public static void main(String[] args) {
		SpringApplication.run(UIApp.class, args);
	}
}
