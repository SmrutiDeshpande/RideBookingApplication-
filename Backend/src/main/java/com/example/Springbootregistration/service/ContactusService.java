package com.example.Springbootregistration.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Springbootregistraotion.entity.Contactus;
import com.example.Springbootregistration.repository.ContactusRepository;
import com.example.Springbootregistration.repository.RegistrartionRepository;

@Service
public class ContactusService {

	
	@Autowired
	private ContactusRepository contactrepo;

	public void save(Contactus customers) {
		// TODO Auto-generated method stub
		contactrepo.save(customers);
	}
}
