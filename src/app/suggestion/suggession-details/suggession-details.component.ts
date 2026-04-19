import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuggestionServiceService } from '../../Services/suggestion-service.service';

@Component({
  selector: 'app-suggession-details',
  templateUrl: './suggession-details.component.html',
  styleUrl: './suggession-details.component.css'
})
export class SuggessionDetailsComponent {
  id!:any; // variable pour stocker l'ID de la suggestion
  suggestion: any; // variable pour stocker les détails de la suggestion

  constructor(private route: ActivatedRoute,private router :Router,private service: SuggestionServiceService
) {
   
  }
  /**
   * ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; // Récupérer l'ID de la suggestion à partir des paramètres de la route
    console.log(this.id); // Afficher l'ID dans la console pour vérification

  }
   *  */ // Méthode d'initialisation du composant (load des données, etc.)

   ngOnInit(){
  this.route.params.subscribe(params => {
      this.id = +params['id']; // Récupérer l'ID de la suggestion à partir des paramètres de la route
      console.log('ID de la suggestion:', this.id); // Afficher l'ID dans la console pour vérification  

    this.service.getSuggestionById(this.id).subscribe((data: any) => {
      this.suggestion = data.suggestion;
    });
  });
}
// deux méthodes goback et routerLink
   goBack() {
    this.router.navigate(['/listSuggestion']); 
    // navigate souvent utiliser ajout et pour réderection automatqiue 
  }


  update() {
  this.router.navigate(['/update', this.id]);
}

  suggestions = [
    ];

  
}
