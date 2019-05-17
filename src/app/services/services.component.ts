import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  navigate(id){
    switch(id){
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
        this.router.navigate(["/blog"]);
        break;
      case 8:
        this.router.navigate(["/careers"]);
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
