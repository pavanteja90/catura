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

  constructor(private router: Router){
    // this.router.events.subscribe((ev)=> {
      
    // })
  }
  
  ngOnInit(){
    $("#navigation .navbar-nav a").click(()=> {
      $("#navigation .navbar-nav").find("li .active").removeClass("active");
      $(this).parent("li").addClass("active");
    });
  }

  navigate(id){
    switch(id){
      case 1:
        this.router.navigate(["/services"]);
        break
      case 2:
        this.router.navigate(["/blog"]);
        break;
      case 3:
        this.router.navigate(["/careers"]);
        break;
      case 4:
        this.router.navigate(["/contact"]);
        break;
      case 5:
        this.router.navigate(["/managecookies"]);
        break;
    }
  }

}
