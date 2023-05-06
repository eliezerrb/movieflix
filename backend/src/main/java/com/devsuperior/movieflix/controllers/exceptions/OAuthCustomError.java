package com.devsuperior.movieflix.controllers.exceptions;

import java.io.Serializable;

import com.fasterxml.jackson.annotation.JsonProperty;

public class OAuthCustomError implements Serializable{

	private static final long serialVersionUID = 1L;
	
	// @JsonProperty - anotação para na hora de serializar o Json - converter para snake case(error_description)
	
	private String error;
	
	@JsonProperty("error_description")
	private String errorDescription;

	public OAuthCustomError() {
	}

	public OAuthCustomError(String error, String errorDescription) {
		super();
		this.error = error;
		this.errorDescription = errorDescription;
	}

	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}

	public String getErrorDescription() {
		return errorDescription;
	}

	public void setErrorDescription(String errorDescription) {
		this.errorDescription = errorDescription;
	}
	
}
