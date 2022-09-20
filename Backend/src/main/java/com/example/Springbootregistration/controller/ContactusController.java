package com.example.Springbootregistration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Springbootregistraotion.entity.Contactus;
import com.example.Springbootregistraotion.entity.Customer;
import com.example.Springbootregistration.repository.ContactusRepository;
import com.example.Springbootregistration.service.ContactusService;

@RestController
@CrossOrigin(origins = "*")
public class ContactusController {
	
	@Autowired
	private ContactusService contactservice;
	
	
	@PostMapping(value = "/contactus")
	 private String saveBook(@RequestBody Contactus info)   
	 {  
	contactservice.save(info);  
	return  "Thankyou ";  
	 }
	

}
