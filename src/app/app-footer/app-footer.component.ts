import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './app-footer.component.html',
    styleUrls: ['./app-footer.component.css']
})
export class AppFooterComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }
    navigate(id:number) {
        switch (id) {
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
            case 10:
                this.router.navigate(["/services/internet-of-things"]);
                break;
            case 11:
                this.router.navigate(["/services/artificial-intelligence"]);
                break;
            case 7:
                this.router.navigate(["/blog"]);
                break;
            case 8:
                this.router.navigate(["/contact"]);
                break;
            case 9:
                this.router.navigate(["/team"]);
                break;
            default:
                this.router.navigate(["/services"]);
                break;
        }
    }
}
