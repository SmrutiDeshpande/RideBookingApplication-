package com.example.Springbootregistration.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.stereotype.Service;

import com.example.Springbootregistraotion.entity.Customer;
import com.example.Springbootregistraotion.entity.Feedback;
import com.example.Springbootregistraotion.entity.Rideinfo;
import com.example.Springbootregistration.repository.RegistrartionRepository;
import com.example.Springbootregistration.repository.RidebookingRepository;

@Service
public class RegistrationService {

	
	@Autowired
	private RegistrartionRepository regrepo;
	
	
	@Autowired
	private RidebookingRepository riderepo;
	
	
	 private final String ACCOUNT_SID ="AC2b7b44a14226f183d90c602f37dd6879";

	    private final String AUTH_TOKEN = "8bc770e3daa0fe0ac744b876960b46a4";

	    private final String FROM_NUMBER = "+13025261528";

	    public void sendsms(Rideinfo sms,String otp) {
	    	Twilio.init(ACCOUNT_SID, AUTH_TOKEN);

	        Message message = Message.creator(new PhoneNumber(sms.getMobile()), new PhoneNumber(FROM_NUMBER), otp )
	                .create();
	        System.out.println("here is otp:"+otp);// Unique resource ID created to manage this transaction

	    }
	

	public Iterable<Customer> listAll(){
		return this.regrepo.findAll();
	}
	
	public void saveOrUpdate(Customer cust) {
		regrepo.save(cust);
	}
	
	
	 public Customer login(String email, String password) {
		 Customer   user = regrepo.findByEmailAndPassword(email, password);
		   return user;
		  }

	public Customer forgetPassword(String email) {
		Customer user = regrepo.findByEmail(email);
		return user;
	}

	public void save(Customer customers) {
		regrepo.save(customers);
	}
	
	public void saveRideInfo(Rideinfo info) {
		riderepo.save(info);
	}
	
	
	
}
