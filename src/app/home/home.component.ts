import { Component, OnInit } from '@angular/core';
import { TMNTService } from '../services/tmnt.service';
import { Character } from '../classes/character';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  characters: Character[] = [];
  tmntService;
  constructor(tmntService: TMNTService) {
    this.tmntService = tmntService;
  }

  ngOnInit(): void {
    this.tmntService.getCharacters()
      .then(data =>this.characters = data);
  }

}
