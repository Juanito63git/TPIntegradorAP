import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  per: persona = new persona("", "", "");

  constructor(public persoServ: PersonaService) { }

  ngOnInit(): void {
    this.persoServ.getPersona().subscribe(data => { this.per = data });
  }

}
