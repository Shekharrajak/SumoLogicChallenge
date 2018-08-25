import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TreeviewItem } from 'ngx-treeview';
import { Game } from '../../model/game';
import { Installation } from '../../model/Installation';
import { GamePlayResources } from '../../model/GamePlayResources';
import { ResourceDependency } from '../../model/ResourceDependency';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  games = [];
  installations: Installation[];
  resourceDependencyList: ResourceDependency[];
  game = new Game();
  totalGame = 0;

  constructor(private httpService: HttpClient) {
  }

  getgames() {
    this.games = [];
    this.httpService.get('http://localhost:4200/assets/games_short.json')
      .subscribe(data => {
        // console.log('p0' , data[0]);
        for(let d of JSON.parse(JSON.stringify(data))) {
          // let tmp = JSON.parse(JSON.stringify(data[index]));
          this.game = new Game();
          const element = d;
          /* console.log('element => ', element);
          // console.log(element['Game play resources']['Installation']);
          console.log(element['Game play resources']['Installation']);
          console.log(element['Game play resources']['Resource Dependency']); */
          console.log(element.title);
          this.game.title = element.title;
          this.installations = [] ;

          for (let el of element['Game play resources']['Installation']) {
            let installation = new Installation();
            installation.file_name = el.file_name;
            installation.type = el.type;
            this.installations.push(installation);
          }

          this.resourceDependencyList = [];
          for (let el of element['Game play resources']['Resource Dependency']) {
            let resourceDependency = new ResourceDependency();
            resourceDependency.file_name = el.file_name;
            resourceDependency.type = el.type;
            this.resourceDependencyList.push(resourceDependency);
          }

          this.game.game_play_resources = new GamePlayResources();
          this.game.game_play_resources.installation = this.installations;
          this.game.game_play_resources.resource_dependency = this.resourceDependencyList;

          // console.log('tmp =>' + JSON.stringify(this.game));
          this.games[this.totalGame] = this.game;
          this.totalGame = this.totalGame + 1;
          console.log(this.games);
        }
      });

      return this.games;
  }

  getBooks(): TreeviewItem[] {
    const childrenCategory = new TreeviewItem({
      text: 'Children', value: 1, collapsed: true, children: [
        { text: 'Baby 3-5', value: 11 },
        { text: 'Baby 6-8', value: 12 },
        { text: 'Baby 9-12', value: 13 }
      ]
    });
    const itCategory = new TreeviewItem({
      text: 'IT', value: 9, children: [
        {
          text: 'Programming', value: 91, children: [{
            text: 'Frontend', value: 911, children: [
              { text: 'Angular 1', value: 9111 },
              { text: 'Angular 2', value: 9112 },
              { text: 'ReactJS', value: 9113, disabled: true }
            ]
          }, {
            text: 'Backend', value: 912, children: [
              { text: 'C#', value: 9121 },
              { text: 'Java', value: 9122 },
              { text: 'Python', value: 9123, checked: false, disabled: true }
            ]
          }]
        },
        {
          text: 'Networking', value: 92, children: [
            { text: 'Internet', value: 921 },
            { text: 'Security', value: 922 }
          ]
        }
      ]
    });
    const teenCategory = new TreeviewItem({
      text: 'Teen', value: 2, collapsed: true,  children: [
        { text: 'Adventure', value: 21 },
        { text: 'Science', value: 22 }
      ]
    });
    const othersCategory = new TreeviewItem({ text: 'Others', value: 3, checked: false, disabled: true });
    return [childrenCategory, itCategory, teenCategory, othersCategory];
  }
}
