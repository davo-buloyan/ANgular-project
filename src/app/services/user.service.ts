import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';



@Injectable()
export class UserService {

  constructor(private http: HttpClient){ }
      
  getConfigResponse(): Observable<any> {
    return this.http.get<any>('https://reqres.in/api/users?page=2')
  }

}
