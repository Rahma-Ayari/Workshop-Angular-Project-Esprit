import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { SuggessionDetailsComponent } from './suggession-details/suggession-details.component';

const routes: Routes = [
  {path:'id',component:ListSuggestionComponent},
  {path:'list',component:SuggessionDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionRoutingModule { }
