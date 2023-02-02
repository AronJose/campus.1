import { HttpClient} from '@angular/common/http';
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
}
