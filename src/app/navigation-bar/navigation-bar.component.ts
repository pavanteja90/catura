import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { navigationCancelingError } from '@angular/router/src/shared';

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
    @Output() navButtonClick = new EventEmitter;
    @Output() navigation = new EventEmitter;
    constructor() { }

    ngOnInit() {
    }

    navButtonClicked() {
        this.navButtonClick.emit('');
    }

    navigate(id1:number, id2?:number){
        if(id2){
            this.navigation.emit([id1, id2]);
        }
        else{
            this.navigation.emit([id1]);
        }
    }

}
