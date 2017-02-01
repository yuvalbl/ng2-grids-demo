import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TMNTService } from '../services/tmnt.service';
import { Character } from '../classes/character';


@Component({
  selector: 'app-grid1',
  templateUrl: './grid1.component.html',
  styleUrls: ['./grid1.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class Grid1Component implements OnInit {
  public primeNGSummary;


  public nameModes = [
    { value: 0, display: 'standard'},
    { value: 1, display: 'Nick Name'},
    { value: 2, display: 'Better Nick Name'}
  ];
  public currentNameMode = 0;

  characters: Character[] = [];
  tmntService;
  constructor(tmntService: TMNTService) {
    this.tmntService = tmntService;
  }

  ngOnInit(): void {
    this.tmntService.getCharacters()
      .then(data => this.characters = data);


    this.primeNGSummary = this.getSummary();
  }

  getSummary(): Object[] {
    return [
      { param: '2 Rows header',     value: 'yes' },
      { param: 'Scroll body only',     value: 'yes' },
      { param: 'Multi sort',     value: 'partial' },
      { param: 'In header filters',     value: 'yes' },
      { param: 'Filter by: category, text and range',     value: 'yes' },
      { param: 'Custom html',     value: 'partial' },
    ]
  }
}
