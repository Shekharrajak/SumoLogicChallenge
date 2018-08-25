import { Component, OnInit } from '@angular/core';
import { GamesService } from './games.service';

@Component({
    selector: 'app-gamesList',
    templateUrl: './gamesList.component.html',
    providers: [
        GamesService
    ]
})
export class GamesListComponent implements OnInit {
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
        private service: BookService
    ) { }

    ngOnInit() {
        this.items = this.service.getBooks();
    }

    onFilterChange(value: string) {
        console.log('filter:', value);
    }
}
