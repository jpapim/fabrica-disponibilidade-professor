import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { ROUTES } from './app.routes';
import { ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { InputTextFieldComponent } from './components/input-text-field/input-text-field.component';
import { InputSelectFieldComponent } from './components/input-select-field/input-select-field.component';
import { HomeComponent } from './templates/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtonComponent,
    MenuComponent,
    MenuItemComponent,
    InputTextFieldComponent,
    InputSelectFieldComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ AppComponent ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
