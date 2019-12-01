import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidecardComponent } from './components/sidecard/sidecard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [SidecardComponent];
const modules = [CommonModule, FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules],
})
export class SharedModule {}
