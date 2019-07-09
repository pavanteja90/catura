import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from "@angular/router";
import { GoogleAnalyticsService } from "./services-list/google-analytics-service.service";
import { Meta, Title } from '@angular/platform-browser';
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
        // , private meta: Meta, private title: Title
        // this.meta.updateTag({ name: 'keywords', content: '' });
        // this.meta.updateTag({ name: 'author', content: 'catura' });
        // this.meta.updateTag({ name: 'description', content: ''});
        // this.title.setTitle('Services | Catura');
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                var urlVal = event.urlAfterRedirects;
                var changedValues = [""]; //Given this value to remove the red squiggly
                $('.dropdown-item').each(function () {
                    if ($(this).hasClass('clicked')) {
                        $(this).removeClass('clicked');
                    }
                    var currentAttrVal = $(this).attr('router-url');
                    if (currentAttrVal == urlVal) {
                        changedValues.push($(this));
                    }
                });
                $('.footer-second a').each(function () {
                    if ($(this).hasClass('clicked')) {
                        $(this).removeClass('clicked');
                    }
                    var currentAttrVal = $(this).attr('router-url');
                    if (currentAttrVal == urlVal) {
                        changedValues.push($(this));
                    }
                });
                $('.services-list a').each(function () {
                    if ($(this).hasClass('clicked')) {
                        $(this).removeClass('clicked');
                    }
                    var currentAttrVal = $(this).attr('router-url');
                    if (currentAttrVal == urlVal) {
                        changedValues.push($(this));
                    }
                });
                $('.normal-nav-item').each(function () {
                    if ($(this).hasClass('clicked')) {
                        $(this).removeClass('clicked');
                    }
                    var currentAttrVal = $(this).attr('router-url');
                    if (currentAttrVal == urlVal) {
                        changedValues.push($(this));
                    }
                });
                for (var count = 0; count < changedValues.length; count++) {
                    if (changedValues[count] != "") {
                        $(changedValues[count]).addClass("clicked");
                    }
                }
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
        console.log("Developed by Pavan Teja Bhatta <pavanteja.bhatta@gmail.com>");
    }

    navigate(navCode: Array<number>) {
        let id = navCode[0];
        let id2 = 0;
        if(navCode.length > 1){
            id2 = navCode[1];
        }
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
                        this.router.navigate(["/"]);
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

    navButtonClicked() {
        if ($("#navButton").hasClass("btn-initial")) {
            $("#navButton").removeClass("btn-initial");
            $("#navButton").addClass("btn-outline-danger");
        }
        else {
            $("#navButton").removeClass("btn-outline-danger");
            $("#navButton").addClass("btn-initial");
        }

        if ($("#navButtonIcon").hasClass("fa-bars")) {
            $("#navButtonIcon").removeClass("fa-bars");
            $("#navButtonIcon").addClass("fa-times");
        }
        else {
            $("#navButtonIcon").removeClass("fa-times");
            $("#navButtonIcon").addClass("fa-bars");
        }
    }

}
