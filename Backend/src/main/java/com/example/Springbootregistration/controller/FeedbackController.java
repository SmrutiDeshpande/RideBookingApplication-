package com.example.Springbootregistration.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.Springbootregistraotion.entity.Customer;
import com.example.Springbootregistraotion.entity.Feedback;
import com.example.Springbootregistration.service.FeedbackService;
import com.example.Springbootregistration.service.RegistrationService;

@RestController
@CrossOrigin(origins = "*")
public class FeedbackController {
	
	
	@Autowired
	private FeedbackService service;

	
	
	 
	 @GetMapping("/feedback")
		public Iterable<Feedback>getFeedback()
		{
		return service.listAll();    
		}
//	 
//	 @RequestMapping(method=RequestMethod.DELETE ,value="/topic/{id}" )
//	 public void delete(@PathVariable int id) {
//		 service.deletefeedback(id);
//	 }
//	 
//	 @DeleteMapping("/delete/{id}")
//	 private void deleteFeed(@PathVariable("id") int id) {
//		 service.delete(id);
//	 }
//	 
//	 @GetMapping("/find/{id}")
//	 private Feedback getfeedback(@PathVariable("id") int id) {
//		 return service.getFeedById(id);
//	 }
//	 
//	 
//	 @GetMapping("/namecheck/{name}")
//	 private List<Feedback>  getfeedback1(@PathVariable("name") String name) {
//		 return service.getallbyName(name);
//	 }
	 

		@PostMapping(value = "/feedbackmsg")
		 private String saveBook(@RequestBody Feedback msg)  
		 {  

	
		
			
			service.save(msg);  
			
		
			 
			 return  "Feedback Stored";  
		 }
	 
}
