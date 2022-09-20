package com.example.Springbootregistration.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Springbootregistraotion.entity.Customer;
import com.example.Springbootregistraotion.entity.Rideinfo;

@Repository
public interface RidebookingRepository  extends JpaRepository<Rideinfo,Integer>  {

}
