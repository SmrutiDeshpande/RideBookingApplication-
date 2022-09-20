package com.example.Springbootregistration.controller;

import java.io.UnsupportedEncodingException;
import java.util.Objects;
import java.util.Random;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Springbootregistraotion.entity.Customer;
import com.example.Springbootregistraotion.entity.Rideinfo;
import com.example.Springbootregistration.service.RegistrationService;
import com.example.Springbootregistration.controller.Utility;

@RestController
@CrossOrigin(origins = "*")
public class CustomerController {

	String globalemail="";
	
	
	@Autowired
	private RegistrationService services;
	
	
	
	@Autowired
	private JavaMailSender mailsender;
	
	@GetMapping("/")
	public Iterable<Customer>getCustomer()
	{
	return services.listAll();    
	}
	
	@PostMapping(value = "/register")
	 private String saveBook(@RequestBody Customer customers)  throws Exception  
	 {  
	String email= customers.getEmail();
	System.out.println(email);

	Customer existemail=services.forgetPassword(email);
	System.out.println(existemail);
	if(existemail==null) {
		
		services.save(customers);  
		
	}
	else {
		throw new Exception();
	}
//	System.out.print(existemail.getEmail());
	
	
//	if(email==)
		 
		 return  customers.getEmail();  
	 }
	
	
	 @PostMapping("/login")
	    public String login(@RequestBody  Customer user ) {
	    	
	    	Customer oauthUser = services.login(user.getEmail(), user.getPassword());
	    	

	    	System.out.print(oauthUser);
	    	if(Objects.nonNull(oauthUser)) 
	    	{	
	  
	    		return "redirect:/";
	    	
	    		
	    	} else {
	    		return "redirect:/login";
	    		
	    	
	    	}
	    	
	    	
	    	

	}
	 
	 
//	 
//	 @PostMapping("/forgot_password")
//	 public String processForgotPassword(@RequestBody  Customer user , Model model) {
//	     String email = user.getEmail();
////	     String token = RandomString.make(30);
//	      
//	     try {
////	         customerService.updateResetPasswordToken(token, email);
//	         String resetPasswordLink = Utility.getSiteURL(request) ;
//	         sendEmail(email, resetPasswordLink);
//	         model.addAttribute("message", "We have sent a reset password link to your email. Please check.");
//	          
//	     } catch (CustomerNotFoundException ex) {
//	         model.addAttribute("error", ex.getMessage());
//	     } catch (UnsupportedEncodingException | MessagingException e) {
//	         model.addAttribute("error", "Error while sending email");
//	     }
//	          
//	     return "forgot_password_form";
//	 }
//	
	 public void sendEmail(String recipientEmail, String link)
		        throws MessagingException, UnsupportedEncodingException {
		    MimeMessage message = mailsender.createMimeMessage();              
		    MimeMessageHelper helper = new MimeMessageHelper(message);
		     
		    helper.setFrom("smrutideshpande12@gmail.com", "Ride Booking Application");
		    helper.setTo(recipientEmail);
		     
		    String subject = "Here's the link to reset your password";
		     
		    String content = "<p>Hello,</p>"
		            + "<p>You have requested to reset your password.</p>"
		            + "<p>Click the link below to change your password:</p>"
		            + "<p><a href=\"" + link + "\">Change my password</a></p>"
		            + "<br>"
		            + "<p>Ignore this email if you do remember your password, "
		            + "or you have not made the request.</p>";
		     
		    helper.setSubject(subject);
		     
		    helper.setText(content, true);
		     
		    mailsender.send(message);
		}
	 
	 
	 @PostMapping("/forgetpassword")
	    public String forgetPassword(@RequestBody  Customer user, Model model )throws Exception {
	    	String email=user.getEmail();
	    	globalemail=email;
	    	Customer oauthUser = services.forgetPassword(user.getEmail());
	    	
//	    	System.out.println(email);
//	    	System.out.print(oauthUser);
	    	if(Objects.nonNull(oauthUser))
	    		
	    	{
	    		
	    		try {
	    			
		         String resetPasswordLink ="http://localhost:3000/passwordchange" ;
		         sendEmail(email, resetPasswordLink);
		         model.addAttribute("message", "We have sent a reset password link to your email. Please check.");
		          
		     } 
//		         catch (ClassNotFoundException ex) {
//		         model.addAttribute("error", ex.getMessage());
//		     } 
	    		catch (UnsupportedEncodingException | MessagingException e ) {
		         model.addAttribute("error", "Error while sending email");
		     }
	    	   catch(Exception ex) {
	    		   
	    	   }
	  
	    		return "redirect:/";
	    	
	    		
	    	} else {
	    		throw new Exception();
//	    		return "redirect:/login";
	    		
	    	
	    	}

	}
	 
	 
//	 @PostMapping("/login")
//	    public String login(HttpServletRequest request ) {
//		 String email = request.getParameter("email");
//		 String password=request.getParameter("password");
//		 System.out.println(request);
//		 
//		 System.out.println(email);
//		 System.out.println(password);
//	    	
//	    	Customer oauthUser = services.login(email, password);
//	    	
//	    	 
//	    	 
//	    	System.out.print(oauthUser);
//	    	if(Objects.nonNull(oauthUser)) 
//	    	{	
//	  
//	    		return "redirect:/";
//	    	
//	    		
//	    	} else {
//	    		return "redirect:/login";
//	    		
//	    	
//	    	}
//
//
//}
	 
	 @PutMapping("/resetpassword")
	 private String  update(@RequestBody Customer user ){
		 System.out.println(globalemail);
		 user.setEmail(globalemail);
		 user.setPassword(user.getPassword());
		 services.saveOrUpdate(user);
		 return "update successful";
		 
		 
	 }
	 
	 
	 
	 @PostMapping("/bookride")
	    public void smsSubmit(@RequestBody Rideinfo sms) {
		 services.saveRideInfo(sms);
//	
//		 String phone=sms.getMobile();
		 
		 Random rnd = new Random();
		    int number = rnd.nextInt(9999);
		    String otp= String.format("%04d", number);
		 
//		 String otp="1234";
//		    System.out.println("our otp: "+ otp);
	 
	        try{
	            services.sendsms(sms,otp);
	        }
	        catch(Exception e){

	       System.out.println(e);

	    }
}
	 
	 
	 
	 
	 
	
}
