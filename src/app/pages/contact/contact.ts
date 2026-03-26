import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Breadcrumbs } from '../../components/breadcrumbs/breadcrumbs';
import { MailApiService } from '../../api/services/mail-api.service';
import { Mail } from '../../api/models/mail.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, RouterLink, Breadcrumbs, TranslateModule],
    templateUrl: './contact.html',
    styleUrl: './contact.css',
})
export class Contact {
    contactForm: FormGroup;
    submitted = false;
    isSending = false;
    errorMessage = '';

    constructor(private fb: FormBuilder, private mailService: MailApiService) {
        this.contactForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            message: ['', Validators.required],
            privacy: [false, Validators.requiredTrue]
        });
    }

    onSubmit() {
        if (this.contactForm.valid) {
            this.isSending = true;
            this.errorMessage = '';

            const formValue = this.contactForm.value;
            const message = formValue.message + `\n\nGegevens:\nNaam: ${formValue.firstName} ${formValue.lastName}\nEmail: ${formValue.email}`;
            const mail: Mail = {
                subject: 'Email via revivevzw.be',
                name: `${formValue.firstName} ${formValue.lastName}`,
                emailFrom: formValue.email,
                message: message
            };

            this.mailService.send(mail).subscribe({
                next: () => {
                    this.isSending = false;
                    this.submitted = true;
                    this.contactForm.reset({ privacy: false });
                    setTimeout(() => this.submitted = false, 5000);
                },
                error: (err) => {
                    this.isSending = false;
                    this.errorMessage = 'CONTACT.ERROR_MSG';
                    console.error('Email send failed', err);
                }
            });
        }
    }
}
