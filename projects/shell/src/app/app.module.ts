import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AuthModule.forRoot({
      domain: 'dev-ha-6vf7s.us.auth0.com',
      clientId: 'pQXuZGn3bfOfHpFd9ch7Wfa4xP4KhKlS'
    }),
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'mfe1',
        loadChildren: () => loadRemoteModule({
          remoteEntry: 'http://localhost:3000/remoteEntry.js',
          remoteName: 'mfe1',
          exposedModule: './AddressModule',
        }).then(m => m.AddressModule)
      }
    ])
  ],
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
