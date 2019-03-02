import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideNavComponent } from './side-nav/side-nav.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CoreComponent,
    NavBarComponent,
    SideNavComponent
  ],
  exports: [CoreComponent],
})
export class CoreModule { }
