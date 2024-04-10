import {Component, OnInit} from '@angular/core';


import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact_me',
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})


export class ContactMeComponent implements OnInit {

  buttonClicked = sessionStorage.getItem('buttonClicked') === 'true';
  submissionCount = 0;

  public sendEmail(e: Event) {
    e.preventDefault();

      emailjs
        .sendForm('service_c5zeskw', 'template_t64sa08', e.target as HTMLFormElement, {
          publicKey: 'X4Y-iSc6vHzEjgTvT',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            this.buttonClicked = true;
            sessionStorage.setItem('buttonClicked', 'true');

          },
          (error) => {
            console.log('FAILED...', (error as EmailJSResponseStatus).text);
          },
        );
    this.submissionCount++;
  }

  public ngOnInit() {
    if (sessionStorage.getItem('buttonClicked') === 'true') {
      this.buttonClicked = true;
    }
  }

}
