package com.example.Springbootregistration.repository;

import javax.transaction.Transactional;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.example.Springbootregistraotion.entity.Feedback;

import java.util.List;


@Repository
public interface FeedbackRepository extends JpaRepository<Feedback,Integer> {

	

//	
//	List<Feedback> findByEmail(String email);
}
