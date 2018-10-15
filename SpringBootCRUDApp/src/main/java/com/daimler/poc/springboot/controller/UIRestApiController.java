package com.daimler.poc.springboot.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api")
public class UIRestApiController {

	@Autowired
	RestTemplate restTemplate;

	private static String MANAGER_SERVICE = "http://manager-service:8082/api/manager/";
	//private static String MANAGER_SERVICE = "http://localhost:8082/api/manager/";

	@RequestMapping(value = "/manager/", method = RequestMethod.GET)
	public ResponseEntity<List<com.daimler.poc.springboot.controller.User>> getAllManagers() {

		List<com.daimler.poc.springboot.controller.User> response = restTemplate
				.exchange(MANAGER_SERVICE, HttpMethod.GET, null, new ParameterizedTypeReference<List<User>>() {
				}).getBody();

		System.out.println("Response Received as " + response);

		return new ResponseEntity<List<User>>(response, HttpStatus.OK);

	}

	/********************************************************************************************/

	private static String LOAD_MANAGER_SERVICE = "http://manager-service:8082/api/user/";
	//private static String LOAD_MANAGER_SERVICE = "http://localhost:8082/api/user/";

	@RequestMapping(value = "/loadManager/", method = RequestMethod.GET)
	public ResponseEntity<com.daimler.poc.springboot.controller.User> getManager(@RequestParam("id") int id) {

		User response = restTemplate
				.exchange(LOAD_MANAGER_SERVICE + id, HttpMethod.GET, null, new ParameterizedTypeReference<User>() {
				}).getBody();

		System.out.println("Response Received as " + response);

		return new ResponseEntity<User>(response, HttpStatus.OK);

	}

	/********************************************************************************************/

	private static String CREATE_MANAGER_SERVICE = "http://manager-service:8082/api/user/";
	//private static String CREATE_MANAGER_SERVICE = "http://localhost:8082/api/user/";

	@RequestMapping(value = "/addManager/", method = RequestMethod.POST)
	public ResponseEntity<List<com.daimler.poc.springboot.controller.User>> addManager(@RequestBody User user) {

		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		HttpEntity<User> entity = new HttpEntity<>(user, httpHeaders);

		List<com.daimler.poc.springboot.controller.User> response = restTemplate.exchange(CREATE_MANAGER_SERVICE,
				HttpMethod.POST, entity, new ParameterizedTypeReference<List<User>>() {
				}).getBody();

		System.out.println("Response Received as " + response);

		return new ResponseEntity<List<User>>(response, HttpStatus.OK);

	}

	/********************************************************************************************/

	private static String REMOVE_MANAGER_SERVICE = "http://manager-service:8082/api/user/";
	//private static String REMOVE_MANAGER_SERVICE = "http://localhost:8082/api/user/";

	@RequestMapping(value = "/removeManager/", method = RequestMethod.DELETE)
	public ResponseEntity<com.daimler.poc.springboot.controller.User> RemoveManager(@RequestParam("id") int id) {

		User response = restTemplate
				.exchange(REMOVE_MANAGER_SERVICE + id, HttpMethod.DELETE, null, new ParameterizedTypeReference<User>() {
				}).getBody();

		System.out.println("Response Received as " + response);

		return new ResponseEntity<User>(response, HttpStatus.OK);

	}

	/********************************************************************************************/

	private static String EMPLOYEE_SERVICE = "http://emp-service:8081/api/employee/";
	//private static String EMPLOYEE_SERVICE = "http://localhost:8081/api/employee/";

	@RequestMapping(value = "/employee/", method = RequestMethod.GET)
	public ResponseEntity<List<com.daimler.poc.springboot.controller.User>> addEmployeeDetails() {

		List<com.daimler.poc.springboot.controller.User> response = restTemplate
				.exchange(EMPLOYEE_SERVICE, HttpMethod.GET, null, new ParameterizedTypeReference<List<User>>() {
				}).getBody();

		System.out.println("Response Received as " + response);

		return new ResponseEntity<List<User>>(response, HttpStatus.OK);
	}

	/********************************************************************************************/

	private static String CREATE_EMPLOYEE_SERVICE = "http://emp-service:8081/api/user/";
	//private static String CREATE_EMPLOYEE_SERVICE = "http://localhost:8081/api/user/";

	@RequestMapping(value = "/addEmployee/", method = RequestMethod.POST)
	public ResponseEntity<List<com.daimler.poc.springboot.controller.User>> addEmployee(@RequestBody User user) {

		HttpHeaders httpHeaders = new HttpHeaders();
		httpHeaders.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		HttpEntity<User> entity = new HttpEntity<>(user, httpHeaders);

		List<com.daimler.poc.springboot.controller.User> response = restTemplate.exchange(CREATE_EMPLOYEE_SERVICE,
				HttpMethod.POST, entity, new ParameterizedTypeReference<List<User>>() {
				}).getBody();

		System.out.println("Response Received as " + response);

		return new ResponseEntity<List<User>>(response, HttpStatus.OK);

	}

	/********************************************************************************************/

	private static String LOAD_EMPLOYEE_SERVICE = "http://emp-service:8081/api/user/";
	//private static String LOAD_EMPLOYEE_SERVICE = "http://localhost:8081/api/user/";

	@RequestMapping(value = "/loadEmlpoyee/", method = RequestMethod.GET)
	public ResponseEntity<com.daimler.poc.springboot.controller.User> getEmployee(@RequestParam("id") int id) {

		User response = restTemplate
				.exchange(LOAD_EMPLOYEE_SERVICE + id, HttpMethod.GET, null, new ParameterizedTypeReference<User>() {
				}).getBody();

		System.out.println("Response Received as " + response);

		return new ResponseEntity<User>(response, HttpStatus.OK);

	}

	/********************************************************************************************/

	private static String REMOVE_EMPLOYEE_SERVICE = "http://emp-service:8081/api/user/";
	//private static String REMOVE_EMPLOYEE_SERVICE = "http://localhost:8081/api/user/";

	@RequestMapping(value = "/removeEmployee/", method = RequestMethod.DELETE)
	public ResponseEntity<com.daimler.poc.springboot.controller.User> RemoveEmployee(@RequestParam("id") int id) {

		User response = restTemplate.exchange(REMOVE_EMPLOYEE_SERVICE + id, HttpMethod.DELETE, null,
				new ParameterizedTypeReference<User>() {
				}).getBody();

		System.out.println("Response Received as " + response);

		return new ResponseEntity<User>(response, HttpStatus.OK);

	}

	/********************************************************************************************/

	@Bean
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}

}