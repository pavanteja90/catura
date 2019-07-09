import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { ContactForm } from "../models/contact-form";
import { ConnectionService } from "../services-list/connection.service";
import { Router, NavigationEnd } from '@angular/router';
import { GoogleAnalyticsService } from '../services-list/google-analytics-service.service';
import { Meta, Title } from '@angular/platform-browser';
declare var $: any;
declare var ga: any;

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

    submissionForm: ContactForm;
    constructor(private fb: FormBuilder, private connectionService: ConnectionService, private router: Router, private googleAnalytics: GoogleAnalyticsService, private meta: Meta, private title: Title) {
        // this.meta.updateTag({ name: 'keywords', content: '' });
        this.meta.updateTag({ name: 'author', content: 'catura' });
        // this.meta.updateTag({ name: 'description', content: '' });
        this.title.setTitle('Contact us | Catura');
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview');
            }
        })
    }

    contactForm = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(4)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        contactNumber: new FormControl('', [Validators.required]),
        reasonForContact: new FormControl('', [Validators.required]),
        message: new FormControl('')
    });

    ngOnInit() {
        $(".loading-page").show();
        $(".contact-section").hide();
        $(document).ready( () => {
            setTimeout(() => {
                $(".loading-page").hide();
                $(".contact-section").show();                
            }, 2000);
        });
        this.googleAnalytics.emitEvent('PageView', 'ContactUs');
        $(".numbersOnly").keydown(function (event: any) {
            var num = event.keyCode;
            if ((num > 95 && num < 106) || (num > 36 && num < 41) || num == 9) {
                return;
            }
            if (event.shiftKey || event.ctrlKey || event.altKey) {
                event.preventDefault();
            } else if (num != 46 && num != 8) {
                if (isNaN(parseInt(String.fromCharCode(event.which)))) {
                    event.preventDefault();
                }
            }
        });
    }

    submitContact() {
        // alert(this.contactForm.controls['name'].value);
        this.submissionForm = new ContactForm();
        this.submissionForm.map({
            'name': this.contactForm.controls['name'].value,
            'email': this.contactForm.controls['email'].value,
            'contact': this.contactForm.controls['contactNumber'].value,
            'reasonForContact': this.contactForm.controls['reasonForContact'].value,
            'message': this.contactForm.controls['message'].value
        });
        console.log(this.submissionForm);
        this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
            alert('Your message has been sent.');
            this.contactForm.reset();
        }, error => {
            console.log('Error', error);
        });
    }

}
