import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class MainModule {}
