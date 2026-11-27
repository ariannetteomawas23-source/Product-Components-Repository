import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductComponent } from './pages/product.component/product.component';

//Angular Module Import

import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [App, ProductComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration()],
  bootstrap: [App],
})
export class AppModule {}