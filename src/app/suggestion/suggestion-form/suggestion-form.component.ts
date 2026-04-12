import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrl: './suggestion-form.component.css'
})
export class SuggestionFormComponent {
constructor(private fb:FormBuilder, private router:Router) { }
suggestionForm!:FormGroup;
ngOnInit(): void {
  this.suggestionForm=this.fb.group({
    title:['',[Validators.required,Validators.minLength(5),Validators.pattern('^[A-Z][a-zA-Z ]*$')]],
    description:['',[Validators.required,Validators.minLength(30)]],
    category:['',Validators.required],
    date: [{ value: new Date().toLocaleDateString(), disabled: true }],
    status: [{ value: 'en attente', disabled: true }],
    nbLikes: [{ value: 0, disabled: true }]
  })  }
 /*  userForm=new FormGroup({
    username:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  }) */
  onSubmit() {
  if (this.suggestionForm.invalid) return;

  this.router.navigate(['/listSuggestion']);
}

  categories: string[] = [
    'Infrastructure et bâtiments',
    'Technologie et services numériques',
    'Restauration et cafétéria',
    'Hygiène et environnement',
    'Transport et mobilité',
    'Activités et événements',
    'Sécurité',
    'Communication interne',
    'Accessibilité',
    'Autre'
  ];

  get title() {
    return this.suggestionForm.get('title');
  }
  get description() {
    return this.suggestionForm.get('description');
  }   
  get category() {
    return this.suggestionForm.get('category');
  }
  get date() {
    return this.suggestionForm.get('date');
  } 


}
