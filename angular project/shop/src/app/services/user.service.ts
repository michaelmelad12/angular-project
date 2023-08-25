import { user } from './../interfaces/user';
import { Observable, BehaviorSubject, first } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';



@Injectable({
   providedIn: 'root'
})
export class UserService {


   userData: any = new BehaviorSubject(null)

   constructor(private http: HttpClient, public _Router: Router) {


      if (localStorage.getItem("data") != null) {
         this.saveUserData()
      }


   }

   saveUserData(): any {

      let data = JSON.stringify(localStorage.getItem("data"))
      this.userData.next(jwtDecode(data))
      console.log(this.userData)
      return this.userData.value.user.firstName

   }
   userIdData(): any {

      let data = JSON.stringify(localStorage.getItem("data"))
      this.userData.next(jwtDecode(data))
      return this.userData.value.user._id
   }


   logOut() {
      localStorage.removeItem("data")
      this.userData.next(null)
      this._Router.navigate(["login"])
   }

   register(formData: object): Observable<any> {
      return this.http.post(`https://store-5hap.onrender.com/signup`, formData)
   }
   loginn(formData: object): Observable<any> {
      return this.http.post(`https://store-5hap.onrender.com/login`, formData)
   }
   payment(formData: object): Observable<any> {
      return this.http.post(`https://store-5hap.onrender.com/order`, formData)
   }

}
