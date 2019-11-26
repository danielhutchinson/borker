import { NgModule } from '@angular/core';
import { AuthenticationContainerComponent } from './containers/authentication-container/authentication-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AuthenticationContainerComponent],
  imports: [ReactiveFormsModule, HttpClientModule, BrowserModule],
})
export class AuthenticationModule {}
