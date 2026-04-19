import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ListSuggestionComponent } from './suggestion/list-suggestion/list-suggestion.component';
import { NotfoundComponent } from './core/notfound/notfound.component';
import { SuggessionDetailsComponent } from './suggestion/suggession-details/suggession-details.component';
import { SuggestionFormComponent } from './suggestion/suggestion-form/suggestion-form.component';

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  {path: 'suggestion', loadChildren: () => import('./suggestion/suggestion.module').then(m => m.SuggestionModule) },
  { path: 'add', component: SuggestionFormComponent },
  { path: 'listSuggestion', component: ListSuggestionComponent },
  { path: 'detailsSuggestions/:id', component: SuggessionDetailsComponent },
  { path: 'update/:id', component: SuggestionFormComponent },
  { path: '**', component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
