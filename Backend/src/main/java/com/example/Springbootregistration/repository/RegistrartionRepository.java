package com.example.Springbootregistration.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.Springbootregistraotion.entity.Customer;

@Repository
public interface RegistrartionRepository extends JpaRepository<Customer,Long> {
	Customer findByEmailAndPassword(String email, String password);

	Customer findByEmail(String email);
	


}
