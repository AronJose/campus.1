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
    console.log("Nahiii",param)
    let tocken=localStorage.getItem('accesstoken')
    let  head_obj=new HttpHeaders({"Authorization":"Campus " + tocken})
    return this.http.post(environment.baseUrl + '/school',param,{headers:head_obj});
  }

  getPricipalList():Observable<any>{
    let tocken=localStorage.getItem('accesstoken')
    let  head_obj=new HttpHeaders({"Authorization":"Campus " + tocken})
    return this.http.get(environment.baseUrl + '/users/principal',  {headers:head_obj});
  }

  getSchoollist():Observable<any>{
    let tocken=localStorage.getItem('accesstoken')
    let  head_obj=new HttpHeaders({"Authorization":"Campus " + tocken})
    return this.http.get(environment.baseUrl + '/school',  {headers:head_obj});
  }

  deleteschool(schoolId:any):Observable<any>{
    let tocken=localStorage.getItem('accesstoken')
    let  head_obj=new HttpHeaders({"Authorization":"Campus " + tocken})
    return this.http.delete(environment.baseUrl + '/school/'+schoolId,{headers:head_obj});
  }

  getschool(schoolId:any):Observable<any>{
    let tocken=localStorage.getItem('accesstoken')
    let  head_obj=new HttpHeaders({"Authorization":"Campus " + tocken})
    return this.http.get(environment.baseUrl + '/school/'+ schoolId,{headers:head_obj});
  }

  updateschool(item:any,schoolId:any):Observable<any>{
    let tocken=localStorage.getItem('accesstoken')
    let  head_obj=new HttpHeaders({"Authorization":"Campus " + tocken})
    return this.http.put(environment.baseUrl + '/school/'+ schoolId,item,{headers:head_obj});
  }

  search(srh:any):Observable<any>{
    let tocken=localStorage.getItem('accesstoken')
    let  head_obj=new HttpHeaders({"Authorization":"Campus " + tocken})
    return this.http.get(environment.baseUrl + '/school?keyword='+ srh,{headers:head_obj});
  }
}
