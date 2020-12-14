import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

export interface LoginData { 
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }

  login( data : LoginData ): Observable<LoginSuccess>{
    return this.http.post<LoginSuccess>(`${baseUrl}/auth/login`, data);
  }
}

export interface LoginSuccess {
  authToken: string;
  
}