package com.example.Springbootregistraotion.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Rideinfo")
public class Rideinfo {
	
	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getRidetype() {
		return ridetype;
	}

	public void setRidetype(String ridetype) {
		this.ridetype = ridetype;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name="source")
	private String source;
	
	@Column(name="destination")
    private String destination;
    
    @Column(name="date")
    private String date;
    
    @Column(name="ridetype")
    private String ridetype;
    
    @Column(name="mobile")
    private String mobile;

}
