import { Component, OnInit } from '@angular/core';
import { TMNTService } from '../services/tmnt.service';
import { Character } from '../classes/character';



@Component({
  selector: 'app-grid1',
  templateUrl: './grid1.component.html',
  styleUrls: ['./grid1.component.css']
})
export class Grid1Component implements OnInit {
  characters: Character[] = [];
  tmntService;
  constructor(tmntService: TMNTService) {
    this.tmntService = tmntService;
  }

  ngOnInit(): void {
    this.tmntService.getCharacters()
      .then(data => this.characters = data);
  }

}
