import { Component } from '@angular/core';
import { Suggestion } from '../../models/suggestion';
import { SuggestionServiceService } from '../../Services/suggestion-service.service';

@Component({
  selector: 'app-list-suggestion',
  templateUrl: './list-suggestion.component.html',
  styleUrls: ['./list-suggestion.component.css']
})
export class ListSuggestionComponent {
  constructor(private suggestionService: SuggestionServiceService) { }

  searchText: string = '';

  suggestions: Suggestion[] = [
    
];

  ngOnInit() {
    this.suggestionService.getSuggestionsList().subscribe((data: any) => {
      this.suggestions = data;
    });
  }


  likeSuggestion(s: Suggestion) {
  s.nbLikes++;
}

  get filteredSuggestions() {
    return this.suggestions.filter(s =>
      s.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
      s.category.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  favorites: Suggestion[] = [];

  addToFavorites(s: Suggestion) {
    if (!this.favorites.includes(s)) {
      this.favorites.push(s);
      alert(`${s.title} ajouté aux favoris !`);
    }
  }

  deleteSuggestion(id: number) {
  this.suggestionService.deleteSuggestion(id).subscribe(() => {
    this.suggestions = this.suggestions.filter(s => s.id !== id);
  });
}



}