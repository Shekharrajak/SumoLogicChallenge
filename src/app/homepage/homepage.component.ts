import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  private _gameURL = './data/games_short.json';   
  constructor(private httpService: HttpClient) { }

  ngOnInit() {
    this.httpService.get('data/games_short.json').subscribe(
      data => {
        // this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
         console.log(data);
      },
      (err: any) => {
        console.log (err);
      }
    );
  }

  // getGamess(): Observable<any> {
  //   return this.httpService.get("./file.json")
  //                   .map((res:any) => res.json())
  //                   .catch((error:any) => console.log(error));

  // }

}
