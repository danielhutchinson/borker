import { NgModule } from "@angular/core";
import { AuthenticationContainerComponent } from "./containers/authentication-container/authentication-container.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AuthenticationContainerComponent],
  imports: [ReactiveFormsModule]
})
export class AuthenticationModule {}
