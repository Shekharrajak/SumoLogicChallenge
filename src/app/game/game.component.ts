import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game/game.service';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
import { Game } from '../model/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  dropdownEnabled = true;
  items: TreeviewItem[];
  values: number[];
  config = TreeviewConfig.create({
    hasAllCheckBox: true,
    hasFilter: true,
    hasCollapseExpand: true,
    decoupleChildFromParent: false,
    maxHeight: 400
  });
  games: Game[];

  buttonClasses = [
    'btn-outline-primary',
    'btn-outline-secondary',
    'btn-outline-success',
    'btn-outline-danger',
    'btn-outline-warning',
    'btn-outline-info',
    'btn-outline-light',
    'btn-outline-dark'
  ];
  buttonClass = this.buttonClasses[0];

  constructor(
    private service: GameService
  ) {
    // this.service.getgames();
  }

  ngOnInit() {
    // this.items = this.service.getBooks();
    this.games = this.service.getgames();
  }

  onFilterChange(value: string) {
    console.log('filter:', value);
  }
}
