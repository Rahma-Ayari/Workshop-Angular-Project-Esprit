import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuggestionServiceService {

    private suggestionUrl = 'http://localhost:3000/suggestions';
  constructor(private http: HttpClient) { }

  getSuggestionsList() {
    return this.http.get(this.suggestionUrl);
  }

  getSuggestionById(id: number) {
      return this.http.get(`${this.suggestionUrl}/${id}`);
//return this.http.get(`${this.suggestionUrl}/${id}`);
  }

  addSuggestion(suggestion: any) {
    return this.http.post(this.suggestionUrl, suggestion);
  }

  updateSuggestion(id: number, suggestion: any) {
    return this.http.put(this.suggestionUrl + '/' + id, suggestion);
  }

  deleteSuggestion(id: number) {
    return this.http.delete(this.suggestionUrl + '/' + id);
  }
  
  

  

  

}
