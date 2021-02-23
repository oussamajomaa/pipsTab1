import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categories:any
  descriptions:any
  category:any
  amende:any
  amendDetail:any
  constructor() { 
    this.categories=[
      {name:"Alcool au volant",icon:"fas fa-glass-cheers",color:"warning", description:[
        {title:"Alcoolémie supérieure ou égal à 0,2 gramme par litre de sang en période probatoire",details:[
          {Amende:'135€'},
          {Type:'Contravention de classe 4'},
          {Points:'6'},
          {Minorée:'90€'},
          {Majorée:'375€'},
          {Maxima:'750€'},
          {Desc:'Suspension de 3 ans du permis de conduire'}
        ]},
        {title:"Alcoolémie entre 0,5 et 0,8 gramme par litre de sang : risques encourus",details:[
          {Amende:'135€'},
          {Type:'Contravention de classe 4'},
          {Points:'6'},
          {Minorée:'90€'},
          {Majorée:'375€'},
          {Maxima:'750€'},
          {Desc:'Suspension de 3 ans du permis de conduire'}
        ]},
        {title:"Alcoolémie supérieure à 0,8 gramme par litre de sang : risques encourus",details:[
          {Amende:'4500€'},
          {Type:'Délit'},
          {Points:'6'},
          {Minorée:''},
          {Majorée:''},
          {Maxima:''},
          {Desc:'Suspension de 3 ans du permis de conduire, sans sursis ni permis blanc'}
        ]},
        {title:"Alcoolémie supérieure ou égal à 0,2 gramme par litre de sang en période probatoire",details:[
          {Amende:'4500€'},
          {Type:'Délit'},
          {Points:'6'},
          {Minorée:''},
          {Majorée:''},
          {Maxima:''},
          {Desc:'Suspension de 3 ans du permis de conduire, sans sursis ni permis blanc'}
        ]},
      ]},
      {name:"Excès de vitesse",icon:"fas fa-tachometer-alt",color:"primary", description:[
        {title:"Excès de vitesse inférieur à 20 km/h en ville"},
        {title:"Excès de vitesse supérieur à 20 km/h et inférieur à 29 km/h en ville"},
        {title:"Excès de vitesse en ville entre 30 km/h et 39 km/h"},
        {title:"Excès de vitesse en ville entre 40 km/h et 49 km/h"},
        {title:"Excès de vitesse inférieur à 20 km/h"},
        {title:"Excès de vitesse inférieur à 30 km/h"},
        {title:"Excès de vitesse inférieur à 40 km/h"},
        {title:"Excès de vitesse inférieur à 50 km/h"},
        {title:"Excès de vitesse supérieur à 50 km/h"}
      ]},
      {name:"Infractions circulations",icon:"fas fa-traffic-light",color:"danger", description:[
        {title:"Non respect de l’arrêt au feu rouge",amande:""},
        {title:"Griller un stop ou faire un stop glissé"},
        {title:"Refus de priorité"},
        {title:"Non respect du sens interdit"},
        {title:"Non-respect de la priorité au piéton"},
        {title:"Non-respect des distances de sécurité"},
        {title:"Franchissement d’une ligne continue"},
        {title:"Oubli du clignotant"},
        {title:"Circulation sur la voie de bus"},
        {title:"Usage du téléphone au volant"},
        {title:"Utilisation d’écouteurs ou d’un casque audio au volant"},
        {title:"Non-port de la ceinture"},
        {title:"Non-port du casque"},
        {title:"Tabac au volant en présence d’un mineur"},
        {title:"Homicide ou blessures involontaires entraînant une ITT"},
        {title:"Délit de fuite"}
      ]},
      {name:"Arrêt de stationnement",icon:"fas fa-parking",color:"success", description:[
        {title:"Défaut de paiement du stationnement payant"},
        {title:"Arrêt ou stationnement gênant"},
        {title:"Arrêt ou stationnement dangereux"},
        {title:"Stationnement sur la bande d’arrêt d’urgence d’autoroute"}
      ]},
      {name:"Infractions autoroute",icon:"fas fa-road",color:"secondary", description:[
        {title:"Non-paiement du péage sur autoroute"},
        {title:"Marche arrière ou demi-tour sur autoroute "},
        {title:"Non-respect de la priorité lors de l’accès sur autoroute "},
        {title:"Arrêt non justifié sur la bande d’arrêt d’urgence"}
      ]},
      {name:"Permis de conduire",icon:"fas fa-id-card",color:"dark", description:[
        {title:"Conduire pendant une annulation, suspension, invalidation ou rétention"},
        {title:"Conduire sans permis"},
        {title:"Amende et sanctions : Conduire sans permis valide"},
        {title:"Amende et sanction pour défaut du certificat d’immatriculation"},
        {title:"Amende et sanction pour conduite sans assurance"},
        {title:"Amende et sanction pour conduite sans contrôle technique à jour"}
      ]},
      {name:"Permis probatoire",icon:"far fa-credit-card",color:"medium", description:[
        {title:"Infractions entraînant un retrait de points inférieur à 3 points"},
        {title:"Infraction entraînant le retrait de 3 points et plus"}
      ]},
      {name:"Signalisation véhicule",icon:"fas fa-exclamation-triangle",color:"tertiary", description:[
        {title:"Défaut d’utilisation des feux de croisement ou de route "},
        {title:"Défaut d’utilisation des feux de détresse"}
      ]},
      {name:"Equipement véhicule",icon:"fas fa-truck-moving",color:"warning", description:[
        {title:"Amende pour rétroviseur manquant ou cassé"},
        {title:"Amende pour non-présence du gilet et du triangle à bord"},
        {title:"Amende pneus lisses"},
        {title:"Amende pour plaque d’immatriculation illisible"},

      ]}
    ]
  }

  getDescriptions(data:any){
    this.descriptions = data.description
    this.category=data
  }

  getAmende(data:any){
    this.amende=data
    this.amendDetail=data.details
  }
}
