import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

// import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';


import { PassowordStrengthBarComponent } from './password-strength/password-strength.component';

import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

@NgModule({

  declarations: [

    //  AppComponent,

    PassowordStrengthBarComponent

  ],

  imports: [

    BrowserModule,

    FormsModule,
    RouterModule,

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }
