import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
declare var $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    // title = 'outbak-ventures-blockchain-app';

    constructor(private router: Router) {
        // this.router.events.subscribe((ev)=> {

        // })
    }

    ngOnInit() {
        // Add slideDown animation to Bootstrap dropdown when expanding.
        $('.dropdown').on('show.bs.dropdown', function () {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
        });

        // Add slideUp animation to Bootstrap dropdown when collapsing.
        $('.dropdown').on('hide.bs.dropdown', function () {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
        });
    }

    navigate(id, id2?) {
        switch (id) {
            case 1:
                switch (id2) {
                    case 1:
                        this.router.navigate(['/services/blockchain-consulting']);
                        break;
                    case 2:
                        this.router.navigate(["/services/cryptocurrency-wallet"]);
                        break;
                    case 3:
                        this.router.navigate(["/services/ico-development"]);
                        break;
                    case 4:
                        this.router.navigate(["/services/proof-of-concept"]);
                        break;
                    case 5:
                        this.router.navigate(["/services/smart-contract"]);
                        break;
                    case 6:
                        this.router.navigate(["/services/secrity-token"]);
                        break;
                    case 7:
                        this.router.navigate(["/services/internet-of-things"]);
                        break;
                    case 8:
                        this.router.navigate(["/services/artificial-intelligence"]);
                        break;
                    default:
                        this.router.navigate(["/services"]);
                        break;
                }
                break;
            case 2:
                this.router.navigate(["/blog"]);
                break;
            case 3:
                this.router.navigate(["/careers"]);
                break;
            case 4:
                this.router.navigate(["/team"]);
                break;
            case 5:
                this.router.navigate(["/contact"]);
                break;
            case 6:
                this.router.navigate(["/managecookies"]);
                break;
        }
    }

}
