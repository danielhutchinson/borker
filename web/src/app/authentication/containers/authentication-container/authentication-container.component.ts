import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './authentication-container.component.html',
  styleUrls: ['./authentication-container.component.scss'],
})
export class AuthenticationContainerComponent implements OnInit {
  message: Observable<any>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.message = this.httpClient.get('http://localhost:3000');
  }
}
