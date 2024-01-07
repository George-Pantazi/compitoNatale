import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  scarpe = [
    { nome: 'af1', uscita: 1980 },
    { nome: 'j1', uscita: 1977 },
    { nome: 'j4', uscita: 1982 },
    { nome: 'j11', uscita: 2001 },
    { nome: 'tn', uscita: 1990 },
    { nome: '270', uscita: 1999 }
  ];
}
