import { Component } from '@angular/core';
import { Country } from './CountryDetails';

@Component ({
   selector: 'rxRenewalHome-form',
   templateUrl: './RxRenewalHomeForm-form.component.html'

 
})

export class RxRenewalHomeFormComponent {
   model = new Country('INA',91,'India');
   allProfiles = [
    new Country('IN', 91,'India'),
    new Country('BAN',89, 'Bangladesh'),
    new Country('US',1, 'United States of America')
] 
   drugName : string = '';
   allergies : boolean = false;
   agerestriction : boolean = false;
   pregenency : boolean = false;

}