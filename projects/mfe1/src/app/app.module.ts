import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddressComponent } from './address/address.component';
import { AddressModule } from './address/address.module';
import { RouterModule } from '@angular/router';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AddressModule,
    AuthModule.forRoot({
      domain: 'dev-ha-6vf7s.us.auth0.com',
      clientId: 'pQXuZGn3bfOfHpFd9ch7Wfa4xP4KhKlS'
    }),    
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'address',
      pathMatch: 'full' 
    }])
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
