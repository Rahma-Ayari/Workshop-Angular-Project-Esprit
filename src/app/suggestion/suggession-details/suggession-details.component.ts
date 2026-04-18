import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-suggession-details',
  templateUrl: './suggession-details.component.html',
  styleUrl: './suggession-details.component.css'
})
export class SuggessionDetailsComponent {
  id!:any; // variable pour stocker l'ID de la suggestion
  suggestion: any; // variable pour stocker les détails de la suggestion

  constructor(private route: ActivatedRoute,private router :Router) {
   
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
      this.suggestion = this.suggestions.find(s => s.id === this.id); //=== trouver la valeur et type par contre == trouver la valeur sans se soucier du type
    });
   }
// deux méthodes goback et routerLink
   goBack() {
    this.router.navigate(['/listSuggestion']); 
    // navigate souvent utiliser ajout et pour réderection automatqiue 
  }



  suggestions = [
    {
      id: 1,
      title: 'Organiser une journée team building',
      description: 'Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l\'équipe.',
      category: 'Événements',
      date: new Date('2025-01-20'),
      status: 'acceptee',
      nbLikes: 10
    },
    {
      id: 2,
      title: 'Améliorer le système de réservation',
      description: 'Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.',
      category: 'Technologie',
      date: new Date('2025-01-15'),
      status: 'refusee',
      nbLikes: 0
    },
    {
      id: 3,
      title: 'Créer un système de récompenses',
      description: 'Mise en place d\'un programme de récompenses pour motiver les employés et reconnaître leurs efforts.',
      category: 'Ressources Humaines',
      date: new Date('2025-01-25'),
      status: 'refusee',
      nbLikes: 0
    },
    {
      id: 4,
      title: 'Moderniser l\'interface utilisateur',
      description: 'Refonte complète de l\'interface utilisateur pour une meilleure expérience utilisateur.',
      category: 'Technologie',
      date: new Date('2025-01-30'),
      status: 'en_attente',
      nbLikes: 0
    },
  ];

  
}
