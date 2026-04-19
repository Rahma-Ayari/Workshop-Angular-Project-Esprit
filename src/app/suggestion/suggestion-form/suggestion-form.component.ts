import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SuggestionServiceService } from '../../Services/suggestion-service.service';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrl: './suggestion-form.component.css'
})
export class SuggestionFormComponent {
constructor(private fb:FormBuilder, private router:Router,private Service:SuggestionServiceService,private route:ActivatedRoute) { }
suggestionForm!:FormGroup;
id!:any;
ngOnInit(): void {
  this.suggestionForm=this.fb.group({
    title:['',[Validators.required,Validators.minLength(5),Validators.pattern('^[A-Z][a-zA-Z ]*$')]],
    description:['',[Validators.required,Validators.minLength(30)]],
    category:['',Validators.required],
    date: [{ value: new Date().toLocaleDateString(), disabled: true }],
    status: [{ value: 'en attente', disabled: true }], //qyf yabda string najem na7i l value
    nbLikes: [{ value: 0, disabled: true }]
  })  ;
  this.id = this.route.snapshot.params['id'];

  if (this.id) {
    this.Service.getSuggestionById(this.id).subscribe((data: any) => {
      this.suggestionForm.patchValue(data.suggestion); // pré-remplit le formulaire
    });
  }
  
  
}
 /*  userForm=new FormGroup({
    username:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  }) */
  onSubmit() {
    if (this.suggestionForm.invalid) return;

    const suggestion = this.suggestionForm.getRawValue();

    if (this.id) {
      this.Service.updateSuggestion(this.id, suggestion).subscribe({
        next: () => {
          console.log("Update réussi");
          this.router.navigate(['/listSuggestion']);
        },
        error: (err) => console.error("Erreur update :", err)
      });
    } else {
      this.Service.addSuggestion(suggestion).subscribe({
        next: () => {
          console.log("Ajout réussi");
          this.router.navigate(['/listSuggestion']);
        },
        error: (err) => console.error("Erreur ajout :", err)
      });
    }
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
