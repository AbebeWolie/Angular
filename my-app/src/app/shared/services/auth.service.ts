import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class AuthServices{
   constructor(private http:HttpClient){}

   signUp(email:string,password:string){
       return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDBqJTTZYh9Yo8AeMPOCLlBvIHnAxfzzgc',{
            email:email,
            password:password
        })
   }
}