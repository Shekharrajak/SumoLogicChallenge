import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game/game.service';
import { TreeviewItem, TreeviewConfig } from 'ngx-treeview';
import { Game } from '../model/game';
import { StylingIndex } from '@angular/core/src/render3/styling';

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
  file: any;
  files: any[];
  gameTitleIndex: number;
  gameFolder: string;
  gameFolderFileIndex: number;

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

  setGameTitleIndex(gIndex) {
    this.files = null;
    this.gameFolder = null;
    this.gameTitleIndex = gIndex;
    console.log(this.gameTitleIndex );
  }

  setGameFolder(folder: string) {
    this.gameFolder = folder;
    console.log(this.gameFolder);
    if (this.gameFolder === 'Installation') {
      this.file = this.games[this.gameTitleIndex].game_play_resources.installation[this.gameFolderFileIndex];
      this.files = this.games[this.gameTitleIndex].game_play_resources.installation;
    } else {
      this.file = this.games[this.gameTitleIndex].game_play_resources.resource_dependency[this.gameFolderFileIndex];
      this.files = this.games[this.gameTitleIndex].game_play_resources.resource_dependency;
    }
  }

  setGameFolderFileIndex(fileIndex) {
    this.gameFolderFileIndex = fileIndex;
    console.log(this.gameFolderFileIndex);
    if (this.gameFolder === 'Installation') {
      this.file = this.games[this.gameTitleIndex].game_play_resources.installation[this.gameFolderFileIndex];
      this.files = this.games[this.gameTitleIndex].game_play_resources.installation;
    } else {
      this.file = this.games[this.gameTitleIndex].game_play_resources.resource_dependency[this.gameFolderFileIndex];
      this.files = this.games[this.gameTitleIndex].game_play_resources.resource_dependency;
    }
  }
}

