import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(public http:HttpClient) { }
  product():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/posts/1/comments")
  }
}
