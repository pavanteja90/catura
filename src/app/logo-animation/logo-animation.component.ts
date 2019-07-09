import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
    selector: 'app-logo-animation',
    templateUrl: './logo-animation.component.html',
    styleUrls: ['./logo-animation.component.css']
})
export class LogoAnimationComponent implements OnInit {
    // initialHit:boolean = false;

    constructor(private router: Router) { }

    ngOnInit() {
    }

    navigate() {
        setTimeout(() => {
            this.router.navigate(['/services']);
        }, 1000);
    }

    ngAfterViewChecked() {
        // if(!this.initialHit){            
        //     setTimeout(() => {
        //         this.router.navigate(["/services"]);
        //     }, 4000);
        //     this.initialHit = true;
        // }
        // $("#_vid").play();
    }

    ngOnDestroy() {
        // this.initialHit = false;
    }

}
