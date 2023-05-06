package com.devsuperior.movieflix.services.exceptions;

// RuntimeException - não é obrigatório tratar a exception 

public class UnauthorizedException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	//UnauthorizedException - tratar o erro 401 - token inválido
	
	public UnauthorizedException(String msg) {
		super(msg);
	}

}
