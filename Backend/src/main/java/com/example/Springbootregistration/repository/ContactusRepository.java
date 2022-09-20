package com.example.Springbootregistration.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Springbootregistraotion.entity.Contactus;

@Repository
public interface ContactusRepository extends JpaRepository<Contactus,Integer> {

	

}
