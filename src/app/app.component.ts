import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { GoogleAnalyticsService } from "./services-list/google-analytics-service.service";
declare var $: any;
declare var ga: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    // title = 'outbak-ventures-blockchain-app';

    constructor(private router: Router, private googleAnalyticsService: GoogleAnalyticsService) {
        // this.router.events.subscribe((ev)=> {

        // })
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                console.log('correct route');
                var urlVal =event.urlAfterRedirects;
                var changedValues = [""]; //Given this value to remove the red squiggly
                $('.dropdown-item').each(function(){
                    if($(this).hasClass('clicked')){
                        $(this).removeClass('clicked');
                    }
                    var currentAttrVal = $(this).attr('router-url');
                    if(currentAttrVal == urlVal){
                        changedValues.push($(this));
                    }
                });
                $('.footer-second a').each(function(){
                    if($(this).hasClass('clicked')){
                        $(this).removeClass('clicked');
                    }
                    var currentAttrVal = $(this).attr('router-url');
                    if(currentAttrVal == urlVal){
                        changedValues.push($(this));
                    }
                });
                $('.services-list a').each(function(){
                    if($(this).hasClass('clicked')){
                        $(this).removeClass('clicked');
                    }
                    var currentAttrVal = $(this).attr('router-url');
                    if(currentAttrVal == urlVal){
                        changedValues.push($(this));
                    }
                });
                $('.normal-nav-item').each(function(){
                    if($(this).hasClass('clicked')){
                        $(this).removeClass('clicked');
                    }
                    var currentAttrVal = $(this).attr('router-url');
                    if(currentAttrVal == urlVal){
                        changedValues.push($(this));
                    }
                });
                for(var count = 0; count < changedValues.length; count++) {
                    if(changedValues[count] != ""){
                        $(changedValues[count]).addClass("clicked");
                    }
                }
                console.log('clearning done');
              ga('set', 'page', event.urlAfterRedirects);
              ga('send', 'pageview');
            }
        });
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
        this.googleAnalyticsService.emitEvent('PageView', 'Homepage');
        $(document).ready(function(){
            console.log('Document is ready');
        });
        
        /*
        $(document).ready(function(){
            var contentPlacement = $('.outbak-topNav').position().top + $('.outbak-topNav').height();
            console.log("Checking the contentplacement : "+ contentPlacement );
            $('#outbak-section').css('margin-top',contentPlacement);
        });
        $(window).resize(function(){
            var contentPlacement = $('.outbak-topNav').position().top + $('.outbak-topNav').height();
            console.log("Checking the contentplacement : "+ contentPlacement );
            $('#outbak-section').css('margin-top',contentPlacement);
        });
        $("#outback-topCookies").click(function(){
            var contentPlacement = $('.outbak-topNav').position().top + $('.outbak-topNav').height();
            console.log("Checking the contentplacement after click: "+ contentPlacement );
            $('#outbak-section').attr('style','');
        })
        */
        console.log("Developed by Pavan Teja Bhatta <pavanteja.bhatta@gmail.com>");
    }

    navigate(id:number, id2?:number) {
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
