import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainModule } from './main/main.module';
import { GeneralService } from './services/general.service';

@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      CoreModule,
      MainModule
   ],
   providers: [GeneralService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
