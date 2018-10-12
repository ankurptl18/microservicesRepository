package com.daimler.poc.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api")
public class RestApiController {

	@Autowired
	RestTemplate restTemplate;

	private static String MANAGER_SERVICE = "http://manager-service/api/manager/";

	@RequestMapping(value = "/managerDetails/", method = RequestMethod.POST)
	public String addManagerDetails() {

		String response = restTemplate
				.exchange(MANAGER_SERVICE, HttpMethod.GET, null, new ParameterizedTypeReference<String>() {
				}).getBody();

		System.out.println("Response Received as " + response);

		return "Manager Details " + response;
	}

	/********************************************************************************************/

	private static String MANAGER_SERVICE_8080 = "http://manager-service:8080/api/manager/";

	@RequestMapping(value = "/managerDetails8080/", method = RequestMethod.POST)
	public String addManagerDetails8080() {

		String response = restTemplate
				.exchange(MANAGER_SERVICE_8080, HttpMethod.GET, null, new ParameterizedTypeReference<String>() {
				}).getBody();

		System.out.println("Response Received as " + response);

		return "Manager Details " + response;
	}

	/********************************************************************************************/

	private static String MANAGER_SERVICE_30003 = "http://manager-service:30003/api/manager/";

	@RequestMapping(value = "/managerDetails30003/", method = RequestMethod.POST)
	public String addManagerDetails30003() {

		String response = restTemplate
				.exchange(MANAGER_SERVICE_30003, HttpMethod.GET, null, new ParameterizedTypeReference<String>() {
				}).getBody();

		System.out.println("Response Received as " + response);

		return "Manager Details " + response;
	}

	/********************************************************************************************/

	private static String EMPLOYEE_SERVICE = "http://emp-service/api/employee/";

	@RequestMapping(value = "/employeeDetails/", method = RequestMethod.POST)
	public String addEmployeeDetails() {

		String response = restTemplate
				.exchange(EMPLOYEE_SERVICE, HttpMethod.GET, null, new ParameterizedTypeReference<String>() {
				}).getBody();

		System.out.println("Response Received as " + response);

		return " Employee Details " + response;
	}

	/********************************************************************************************/

	private static String EMPLOYEE_SERVICE_8080 = "http://emp-service:8080/api/employee/";

	@RequestMapping(value = "/employeeDetails8080/", method = RequestMethod.POST)
	public String addEmployeeDetails8080() {

		String response = restTemplate
				.exchange(EMPLOYEE_SERVICE_8080, HttpMethod.GET, null, new ParameterizedTypeReference<String>() {
				}).getBody();

		System.out.println("Response Received as " + response);

		return " Employee Details " + response;
	}

	/********************************************************************************************/

	private static String EMPLOYEE_SERVICE_30003 = "http://emp-service:30003/api/employee/";

	@RequestMapping(value = "/employeeDetails30003/", method = RequestMethod.POST)
	public String addEmployeeDetails30003() {

		String response = restTemplate
				.exchange(EMPLOYEE_SERVICE_30003, HttpMethod.GET, null, new ParameterizedTypeReference<String>() {
				}).getBody();

		System.out.println("Response Received as " + response);

		return "Manager Details " + response;
	}

	/********************************************************************************************/

	@Bean
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}

}