package com.daimler.poc.springboot.service;


import java.util.List;

import com.daimler.poc.springboot.model.User;

public interface UserService {
	
	User findById(Long id);

	User findByName(String name);

	void saveUser(User user);

	void updateUser(User user);

	void deleteUserById(Long id);

	void deleteAllUsers();

	List<User> findAllUsers();

	boolean isUserExist(User user);
}