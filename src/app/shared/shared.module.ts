import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterCardComponent } from './components/register-card/register-card.component';

@NgModule({
  declarations: [RegisterCardComponent],
  imports: [CommonModule],
  exports: [RegisterCardComponent],
})
export class SharedModule {}
