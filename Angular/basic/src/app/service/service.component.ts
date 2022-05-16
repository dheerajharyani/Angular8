import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  product: any;

  constructor(public _http:HttpserviceService) { }
  
  ngOnInit() {
    this._http.product().subscribe((data)=> this.product=data)
  }
}
