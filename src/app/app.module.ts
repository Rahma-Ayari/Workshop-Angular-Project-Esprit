import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ListSuggestionComponent } from './suggestion/list-suggestion/list-suggestion.component';
import { HomeComponent } from './core/home/home.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { SuggessionDetailsComponent } from './suggestion/suggession-details/suggession-details.component';
import { SuggestionModule } from './suggestion/suggestion.module';
import { SuggestionFormComponent } from './suggestion/suggestion-form/suggestion-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListSuggestionComponent,
    HomeComponent,
    NotfoundComponent,
    SuggessionDetailsComponent,
    SuggestionFormComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    SuggestionModule ,
    ReactiveFormsModule
  ],
   providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }