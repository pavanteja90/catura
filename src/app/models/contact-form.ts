export class ContactForm {
    constructor(){

    }
    name: string = '';
    email: string = '';
    contact: number = 0;
    reasonForContact: string = '';
    message: string = '';

    map(data: any){
        this.name = data.name;
        this.email = data.email;
        this.contact = data.contact;
        this.reasonForContact = data.reasonForContact;
        this.message = data.message;
    }
}