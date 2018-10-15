package com.daimler.poc.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

import com.daimler.poc.springboot.configuration.JpaConfiguration;

//same as @Configuration @EnableAutoConfiguration @ComponentScan
@Import(JpaConfiguration.class)
@SpringBootApplication(scanBasePackages={"com.daimler.poc.springboot"})
public class EmployeeApp {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeApp.class, args);
	}
}
