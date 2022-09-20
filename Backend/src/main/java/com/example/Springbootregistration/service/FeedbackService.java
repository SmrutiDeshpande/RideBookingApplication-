package com.example.Springbootregistration.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Springbootregistraotion.entity.Feedback;
import com.example.Springbootregistration.repository.FeedbackRepository;
import com.example.Springbootregistration.repository.RegistrartionRepository;
@Transactional
@Service
public class FeedbackService {
	
	@Autowired
	private FeedbackRepository feedrepo;

	public Iterable<Feedback> listAll() {
		return this.feedrepo.findAll();
	}
//
//	public void deletefeedback(int id) {
//	
//		feedrepo.deleteById(id);
//	
//	
//	}
//
//	public void delete(int id) {
//		feedrepo.deleteById(id);
//	}
//
//	public Feedback getFeedById(int id) {
//	
//		return feedrepo.findById(id).get();
//	}
//
//	public List<Feedback> getallbyName(String name) {
//	
//		return feedrepo.findByEmail(name);
//	}

	public void save(Feedback msg) {
		
		feedrepo.save(msg);
		
	}  
	
	

}
