package com.daimler.poc.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Import;

import com.daimler.poc.springboot.configuration.JpaConfiguration;


@Import(JpaConfiguration.class)
@SpringBootApplication(scanBasePackages={"com.daimler.poc.springboot"})// same as @Configuration @EnableAutoConfiguration @ComponentScan
public class ManagerApp {

	public static void main(String[] args) {
		SpringApplication.run(ManagerApp.class, args);
	}
}
