import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {SitePagesModule} from './site-pages/site-pages.module';
import { HeaderComponent } from './header/header.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import {NavigationMenuService} from './core/API/navigation-menu.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ProfileComponent } from './header/profile/profile.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {ButtonLanguageComponent} from './site-pages/dashboard/button/button-language/button-language.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationMenuComponent,
    ProfileComponent,
    ButtonLanguageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    SitePagesModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    BsDatepickerModule.forRoot(),
  ],
  providers: [NavigationMenuService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
