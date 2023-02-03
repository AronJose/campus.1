import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  login(data:boolean):Observable<any>{
    return this.http.post(environment.baseUrl + '/login',data);
  }

  userreg(param:any):Observable<any>{
    return this.http.post(environment.baseUrl + '/users',param);
  }

  addschool(param:any):Observable<any>{
    let tocken=localStorage.getItem('accesstoken')
    let  head_obj=new HttpHeaders({"Authorization":"Campus " + tocken})
    return this.http.post(environment.baseUrl + '/school',param,{headers:head_obj});
  }

  getPricipalList():Observable<any>{
    let tocken=localStorage.getItem('accesstoken')
    let  head_obj=new HttpHeaders({"Authorization":"Campus " + tocken})
    return this.http.get(environment.baseUrl + '/users',  {headers:head_obj});
  }
}
