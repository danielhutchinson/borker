import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidecardComponent } from './components/sidecard/sidecard.component';

const components = [SidecardComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components],
})
export class SharedModule {}
