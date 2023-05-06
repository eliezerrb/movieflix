package com.devsuperior.movieflix.services.exceptions;

// RuntimeException - não é obrigatório tratar a exception 

public class ForbiddenException extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
	//ForbiddenException - tratar o erro 403 token válido, mas não tem permissão para o recurso.
	
	public ForbiddenException(String msg) {
		super(msg);
	}

}
