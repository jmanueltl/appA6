import { MaterialModule } from './_material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBanquitoComponent } from './nav-banquito/nav-banquito.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PrimeraPagComponent } from './_pages/primera-pag/primera-pag.component';
import { SegundaPagComponent } from './_pages/segunda-pag/segunda-pag.component';
import { TerceraPagComponent } from './_pages/tercera-pag/tercera-pag.component';

import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
    AppComponent,
    NavBanquitoComponent,
    PrimeraPagComponent,
    SegundaPagComponent,
    TerceraPagComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
